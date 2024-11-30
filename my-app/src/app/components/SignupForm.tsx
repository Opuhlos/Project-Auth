"use client";

import { useState, ChangeEvent, FormEvent } from "react";

export default function SignupForm() {
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
        
        const userData = {
            username: enteredUsername,
            password: enteredPassword,
        }; 

        // Send the request 
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.log(userData)
            console.error('Error in CreateItem!', error);
        }

        setUsername('');
        setPassword('');
    };

    return(
        <form className="px-5 pt-5 w-1/2 flex flex-col gap-y-5">
            <h1 className="text-3xl font-semibold">Create a new account</h1>

            <div className="flex flex-row gap-x-5 w-52">
                <input className={`${inputStyle}`} id="sign-username" type="text" placeholder="Username" value={enteredUsername} onChange={handleUsernameChange} required />

                <input className={`${inputStyle}`} id="sign-password" type="password" placeholder="Password" value={enteredPassword} onChange={handlePasswordChange} required />
            </div>

            <button className="bg-slate-900 text-white rounded-md px-3 py-2 w-20 hover:bg-slate-700" onClick={submitHandler}>Create</button>
        </form>      
    );
}