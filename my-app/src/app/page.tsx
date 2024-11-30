import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Display from "./components/Display";

export default function Home() {
  return (
    <div className="h-screen flex flex-row">

        <Display/>

        <div className="w-1/2 flex flex-col">
          <SignupForm/>
          <br></br>
          <LoginForm/>
        </div>
        

        
        </div>
  );
}
