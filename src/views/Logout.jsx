import {useUserContext} from "../hooks/contextHooks";

const Logout = () => {
  const {handleLogout} = useUserContext();

  return (
    <div className="logout">
      <h1 className="text-3xl">Logout</h1>
      <button
        className="absolute top-4 right-4 bg-[#363636] text-white border-none px-2 py-1 cursor-pointer hover:bg-[#2e2e2e]"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
