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
        <ul className="list-none m-0 p-0 overflow-hidden bg-[#333333] flex justify-end">
          <li>
            <Link
              className="block text-white text-center p-4 no-underline hover:bg-[#111111]"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="block text-white text-center p-4 no-underline hover:bg-[#111111]"
              to="/profile"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              className="block text-white text-center p-4 no-underline hover:bg-[#111111]"
              to="/upload"
            >
              Upload
            </Link>
          </li>
          <li>
            <Link
              className="block text-white text-center p-4 no-underline hover:bg-[#111111]"
              to="/login"
            >
              Login
            </Link>
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
