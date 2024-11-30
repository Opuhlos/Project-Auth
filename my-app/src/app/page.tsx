import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-row">
        <div className="w-1/2 bg-sky-600">

        </div>

        <div className="w-1/2 flex flex-col">
          <SignupForm/>
          <br></br>
          <LoginForm/>
        </div>
        

        
        </div>
  );
}
