"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Buttons() {
    const router = useRouter();

    const handleLogout = async () => {
        await signOut({redirectTo:"/"});
    }

    const handleSecret = () => {
        router.push("/secret");
    }

    return(
        <div className = "flex flex-row gap-x-5 pb-4">
            <button className="bg-slate-900 text-white rounded-md px-3 py-2 w-20 hover:bg-slate-700" onClick={handleLogout}>Logout</button>

            <button className="bg-slate-900 text-white rounded-md px-3 py-2 w-20 hover:bg-slate-700" onClick={handleSecret}>Secret</button>
        </div>
        
    );
}