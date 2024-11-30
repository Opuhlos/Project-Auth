import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import { auth } from "@/auth";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  const loggedInUser = session?.user;
  const username = loggedInUser?.name;

  
  return (
    <div className="h-screen flex flex-row">

        {username ? <img src="images/hnk.jpg" alt="picture"> </img> : <div className="w-1/2 bg-sky-600"> </div>}

        <div className="w-1/2 flex flex-col">
          <SignupForm/>
          <br></br>
          <LoginForm/>
        </div>
        

        
        </div>
  );
}
