import useForm from "../hooks/formHooks";
import {postLogin} from "../hooks/apiHooks";

const LoginForm = () => {
  const initValues = {
    username: "",
    password: "",
  };

  const doLogin = async () => {
    try {
      const result = await postLogin(inputs);
      console.log(result);
    } catch (error) {
      console.error("Error logging in:", error);
    }
    // TODO: add login functionalities here
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doLogin,
    initValues
  );

  console.log(inputs);
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
