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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="registeruser">Username</label>
          <input
            name="username"
            type="text"
            id="registeruser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="registeremail">Email</label>
          <input
            name="email"
            type="text"
            id="registeremail"
            onChange={handleInputChange}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="registerpassword">Password</label>
          <input
            name="password"
            type="password"
            id="registerpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
