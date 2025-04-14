import {useEffect} from "react";
import {Link, Outlet} from "react-router-dom";
import {useUserContext} from "../hooks/contextHooks";
const Layout = () => {
  const userCtx = useUserContext();
  useEffect(() => {
    try {
      userCtx.handleAutoLogin();
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
