import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function GET() {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Simple query to keep the database active
    const { error } = await supabase.from("projects").select("id").limit(1);

    if (error) {
        return Response.json({ status: "error", message: error.message }, { status: 500 });
    }

    return Response.json({ status: "ok", timestamp: new Date().toISOString() });
}