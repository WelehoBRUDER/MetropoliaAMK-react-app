import {useUserContext} from "../hooks/contextHooks";
import {Navigate, useLocation} from "react-router-dom";

const ProtectedRoute = ({children}) => {
  const location = useLocation();
  const {user} = useUserContext();
  if (!user) {
    // replace and state are used to redirect to origin when page is refreshed
    return <Navigate to="/" replace state={{from: location}} />;
  }

  return children;
};

export default ProtectedRoute;
