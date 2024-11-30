import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Buttons from "./components/Buttons";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  const loggedInUser = session?.user;
  const username = loggedInUser?.name;
  console.log(username)

  
  return (
    <div className="h-screen flex flex-row">

        {username ? <img src="images/hnk.jpg" alt="picture"> </img> : <div className="w-1/2 bg-sky-600"> </div>}

        <div className="px-5 w-1/2 flex flex-col justify-between">
          <div className="flex flex-col gap-y-6">
            <SignupForm/>
            <LoginForm/>
          </div>
          
          <Buttons/>
        </div>
        
        </div>
  );
}
