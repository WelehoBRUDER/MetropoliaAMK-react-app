import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Single = () => {
  const {state} = useLocation();
  const item = state.item;
  const navigate = useNavigate();
  return (
    <div className="single-view">
      <h2>{item?.title || "No title"}</h2>
      <p>{item?.description || "No description"}</p>
      <div>
        {item?.media_type === "image/jpeg" && (
          <img src={item.filename || "-"} alt={item.title || "No title"} />
        )}
        {item?.media_type === "video/mp4" && (
          <video src={item.filename || "-"} controls width="100%">
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <p>Media type: {item.media_type || "Unknown"}</p>
      <p>Filesize: {item.filesize / 10 ** 6 || 0}mb</p>
      <p>Created: {new Date(item.created_at).toLocaleString("fi-FI")}</p>
      <p>Media ID: {item.media_id ?? "none"}</p>
      <p>User ID: {item.user_id ?? "none"}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};
export default Single;
