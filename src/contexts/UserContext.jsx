// UserContext.jsx
import {createContext, useState} from "react";
import {useAuthentication, useUser} from "../hooks/apiHooks";
import {useNavigate} from "react-router-dom";

const UserContext = createContext(null);

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const {postLogin} = useAuthentication();
  const {getUserByToken} = useUser();
  const navigate = useNavigate();

  // login, logout and autologin functions are here instead of components
  const handleLogin = async (credentials) => {
    try {
      const result = await postLogin(credentials);
      if (result.message === "Login successful") {
        localStorage.setItem("token", result.token);
        const userData = await getUserByToken(result.token);
        setUser(userData);
        navigate("/");
      } else {
        // Handle failure here
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      setUser(null);
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  // handleAutoLogin is used when the app is loaded to check if there is a valid token in local storage
  const handleAutoLogin = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      console.log(postLogin);
      console.log(getUserByToken);
      const userData = await getUserByToken(token);
      if (userData) {
        setUser(userData);
        navigate("/");
      } else {
        localStorage.removeItem("token");
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <UserContext.Provider
      value={{user, handleLogin, handleLogout, handleAutoLogin}}
    >
      {children}
    </UserContext.Provider>
  );
};
export {UserProvider, UserContext};
