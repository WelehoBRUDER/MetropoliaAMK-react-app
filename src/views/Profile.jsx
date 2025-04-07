import {useUser} from "../hooks/apiHooks";

const Profile = () => {
  const {user} = useUser().user;
  console.log(user);
  return (
    <div>
      <h1>{user?.username}'s Profile</h1>
      <p>Email: {user?.email}</p>
      <p>Created: {new Date(user?.created_at).toLocaleDateString("fi-FI")}</p>
      <p>Access level: {user?.level_name}</p>
    </div>
  );
};

export default Profile;
