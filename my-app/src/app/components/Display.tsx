import { auth } from "@/auth";
import { getSession } from "next-auth/react";

export default async function Display() {
    const session = await getSession();
    const loggedInUser = session?.user;
    const username = loggedInUser?.name;

    return(
        <div>{username ? <img src="images/hnk.jpg" alt="picture"> </img> : <div className="w-1/2 bg-sky-600"> </div>}</div>
    );
}