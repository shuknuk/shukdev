"use server";

import { createClient } from "@/utils/supabase/server";
import { Project } from "@/types";
import { revalidatePath } from "next/cache";

export async function getProjects(): Promise<Project[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("display_order", { ascending: true });

    if (error) {
        console.error("Error fetching projects:", error);
        return [];
    }

    // Transform DB data to Project type if needed (e.g. mapping case_study to caseStudy)
    return data.map((p) => ({
        ...p,
        caseStudy: p.case_study, // Map snake_case to camelCase
    }));
}

export async function toggleProjectVisibility(projectId: string, isHidden: boolean) {
    const supabase = await createClient();
    const { error } = await supabase
        .from("projects")
        .update({ is_hidden: isHidden })
        .eq("id", projectId);

    if (error) {
        console.error("Error updating visibility:", error);
        return { success: false, error };
    }

    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
}

export async function updateProject(
    projectId: string,
    updates: {
        title?: string;
        description?: string;
        category?: string;
        rank?: string | null;
        caseStudy?: {
            challenge: string;
            solution: string;
            learnings: string;
        } | null;
    }
) {
    const supabase = await createClient();

    // Map caseStudy to case_study for database
    const dbUpdates: Record<string, unknown> = {};
    if (updates.title !== undefined) dbUpdates.title = updates.title;
    if (updates.description !== undefined) dbUpdates.description = updates.description;
    if (updates.category !== undefined) dbUpdates.category = updates.category;
    if (updates.rank !== undefined) dbUpdates.rank = updates.rank;
    if (updates.caseStudy !== undefined) dbUpdates.case_study = updates.caseStudy;

    const { error } = await supabase
        .from("projects")
        .update(dbUpdates)
        .eq("id", projectId);

    if (error) {
        console.error("Error updating project:", error);
        return { success: false, error: error.message };
    }

    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
}

export async function updateProjectOrder(projectId: string, newOrder: number) {
    const supabase = await createClient();
    const { error } = await supabase
        .from("projects")
        .update({ display_order: newOrder })
        .eq("id", projectId);

    if (error) {
        console.error("Error updating project order:", error);
        return { success: false, error: error.message };
    }

    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
}

export async function createProject(projectData: {
    id: string;
    title: string;
    description: string;
    category: "Featured" | "Project Archive";
    rank?: string | null;
    tech: string[];
    links: {
        github?: string | { label: string; url: string }[];
        live?: string;
    };
    caseStudy?: {
        challenge: string;
        solution: string;
        learnings: string;
    } | null;
}) {
    const supabase = await createClient();

    // Get the highest display_order and add 1
    const { data: projects } = await supabase
        .from("projects")
        .select("display_order")
        .order("display_order", { ascending: false })
        .limit(1);

    const nextOrder = projects && projects.length > 0 ? (projects[0].display_order || 0) + 1 : 1;

    // Map to database format
    const dbData = {
        id: projectData.id,
        title: projectData.title,
        description: projectData.description,
        category: projectData.category,
        rank: projectData.rank || null,
        tech: projectData.tech,
        links: projectData.links,
        case_study: projectData.caseStudy || null,
        display_order: nextOrder,
        is_hidden: false,
    };

    const { error } = await supabase
        .from("projects")
        .insert(dbData);

    if (error) {
        console.error("Error creating project:", error);
        return { success: false, error: error.message };
    }

    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
}
