import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Buttons from "./components/Buttons";
import { auth } from "@/auth";
import { useSession } from "next-auth/react";

export default async function Home() {
  const session = await auth();
  const isLoggedIn = session?.user ? true : false;

  const loggedInUser = session?.user.username;
  
  return (
    <div className="h-screen flex flex-row">

        {isLoggedIn ? <img className="w-1/2 object-cover" src="images/hnk.jpg" alt="picture" /> : <div className="w-1/2 bg-sky-600"> </div>}

        <div className="px-5 w-1/2 flex flex-col justify-between pt-5 ">

          {isLoggedIn ? <h1 className="font-bold text-5xl">Welcome, {loggedInUser}.</h1> : <div className="flex flex-col gap-y-6"> <SignupForm/> <LoginForm/> </div>}

          <Buttons/>
        </div>
        
        </div>
  );
}
