"use server";

import { createClient } from "@/utils/supabase/server";
import { Project } from "@/types";
import { revalidatePath } from "next/cache";

export async function getProjects(): Promise<Project[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: true });

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
