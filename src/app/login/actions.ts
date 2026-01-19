'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
    // Hardcoded admin email - the "Passphrase" acts as the password for this account
    const email = "kinshukgoel2@gmail.com"
    const password = formData.get('passphrase') as string

    const supabase = await createClient()

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        console.error("Login failed:", error.message)
        return { error: "Invalid passphrase" } // Generic error message for security
    }

    revalidatePath('/', 'layout')
    redirect('/admin')
}

export async function updateAdminCredentials(formData: FormData) {
    const passphrase = formData.get('passphrase') as string;
    const email = formData.get('email') as string;

    // Only update if values are provided
    const updates: { password?: string, email?: string } = {};
    if (passphrase) updates.password = passphrase;
    if (email) updates.email = email;

    if (Object.keys(updates).length === 0) {
        return { success: true };
    }

    const supabase = await createClient();
    const { error } = await supabase.auth.updateUser(updates);

    if (error) {
        console.error("Error updating credentials:", error);
        return { success: false, error: error.message };
    }

    revalidatePath('/admin');
    return { success: true };
}

export async function signOut() {
    const supabase = await createClient();
    await supabase.auth.signOut();
    revalidatePath('/', 'layout');
    redirect('/');
}
