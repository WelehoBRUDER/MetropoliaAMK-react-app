import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import {useState} from "react";

const Login = () => {
  const [logInOrRegister, setLogInOrRegister] = useState(true);
  return (
    <>
      {logInOrRegister ? <LoginForm /> : <RegisterForm />}
      {logInOrRegister && <p>Not a user? Register here</p>}
      <button onClick={() => setLogInOrRegister(!logInOrRegister)}>
        {logInOrRegister ? "Sign Up" : "Back to log in"}
      </button>
    </>
  );
};

export default Login;
