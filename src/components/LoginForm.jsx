import useForm from "../hooks/formHooks";
import {useUserContext} from "../hooks/contextHooks";

const LoginForm = () => {
  const initValues = {
    username: "",
    password: "",
  };

  const {handleLogin} = useUserContext();

  const doLogin = async () => {
    try {
      handleLogin(inputs);
    } catch (e) {
      alert(e.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doLogin,
    initValues
  );

  return (
    <>
      <h1 className="text-3xl">Login</h1>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-[80%]">
          <label htmlFor="loginuser">Username</label>
          <input
            className="my-2.5 p-2.5 border border-[#ccc] rounded-[5px]"
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div className="flex flex-col w-[80%]">
          <label htmlFor="loginpassword">Password</label>
          <input
            className="my-2.5 p-2.5 border border-[#ccc] rounded-[5px]"
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button
          className="my-2.5 p-2.5 rounded-[5px] bg-[#363636] text-white border-none cursor-pointer"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
