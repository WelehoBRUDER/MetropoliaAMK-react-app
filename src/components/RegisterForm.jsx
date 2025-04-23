import useForm from "../hooks/formHooks";
import {useUser} from "../hooks/apiHooks";
import {useNavigate} from "react-router-dom";

const RegisterForm = () => {
  const initValues = {
    username: "",
    email: "",
    password: "",
  };
  const navigator = useNavigate();

  const doRegister = async () => {
    console.log(inputs);
    try {
      const result = await postRegister(inputs);
      console.log(result);
      if (result.message === "Login successful") {
        localStorage.setItem("token", result.token);
        navigator("/");
      } else {
        // Handle failure here
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
    // TODO: add login functionalities here
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doRegister,
    initValues
  );

  return (
    <>
      <h1>Register</h1>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-[80%]">
          <label htmlFor="registeruser">Username</label>
          <input
            className="my-2.5 p-2.5 border border-[#ccc] rounded-[5px]"
            name="username"
            type="text"
            id="registeruser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div className="flex flex-col w-[80%]">
          <label htmlFor="registeremail">Email</label>
          <input
            className="my-2.5 p-2.5 border border-[#ccc] rounded-[5px]"
            name="email"
            type="text"
            id="registeremail"
            onChange={handleInputChange}
            autoComplete="email"
          />
        </div>
        <div className="flex flex-col w-[80%]">
          <label htmlFor="registerpassword">Password</label>
          <input
            className="my-2.5 p-2.5 border border-[#ccc] rounded-[5px]"
            name="password"
            type="password"
            id="registerpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button
          className="my-2.5 p-2.5 rounded-[5px] bg-[#363636] text-white border-none cursor-pointer"
          type="submit"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
