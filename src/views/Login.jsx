import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import {useState} from "react";

const Login = () => {
  const [logInOrRegister, setLogInOrRegister] = useState(true);
  return (
    <>
      {logInOrRegister ? <LoginForm /> : <RegisterForm />}
      {logInOrRegister && <p>Not a user? Register here</p>}
      <button
        className="my-2.5 p-2.5 rounded-[5px] bg-[#363636] text-white border-none cursor-pointer"
        onClick={() => setLogInOrRegister(!logInOrRegister)}
      >
        {logInOrRegister ? "Sign Up" : "Back to log in"}
      </button>
    </>
  );
};

export default Login;
