import ProfileComponent from "./profile";
import { createClient } from "@/supabase/server";

export default async function ProfilePage() {
    return (
        <ProfileComponent/>
    )
}