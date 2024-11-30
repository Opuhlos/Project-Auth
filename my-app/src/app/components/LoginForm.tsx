"use client";

import { useState, ChangeEvent, FormEvent } from "react";



import { signIn } from "next-auth/react";

export default function LoginForm() {
    const inputStyle = "border-0 border-b-[3px] focus:outline-none"

    const [enteredUsername, setUsername] = useState<string>('');
    const [enteredPassword, setPassword] = useState<string>('');

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const submitHandler = async (event: FormEvent) => {
        event.preventDefault();
    
        try {
            const respone = await signIn("credentials", {
                username: enteredUsername,
                password: enteredPassword,
                redirect: false,
            });
        } catch (err: any) {
            throw err;
        }

        setUsername('');
        setPassword('');
    };

    return(
        <form className="px-5 w-1/2 flex flex-col gap-y-5">
            <h1 className="text-3xl font-semibold">Login</h1>

            <div className="flex flex-row gap-x-5 w-52">
                <input className={`${inputStyle}`} id="login-username" type="text" placeholder="Username" value={enteredUsername} onChange={handleUsernameChange} required />

                <input className={`${inputStyle}`} id="login-password" type="password" placeholder="Password" value={enteredPassword} onChange={handlePasswordChange} required />
            </div>

            <button className="bg-slate-900 text-white rounded-md px-3 py-2 w-20 hover:bg-slate-700" onClick={submitHandler}>Login</button>
        </form>      
    );
}