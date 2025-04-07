import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Single = () => {
  const {state} = useLocation();
  const item = state.item;
  const navigate = useNavigate();
  const displayFileSize = (size) => {
    if (size / 10 ** 6 < 1) {
      return `${size / 10 ** 3}kb`;
    } else if (size / 10 ** 9 < 1) {
      return `${size / 10 ** 6}mb`;
    }
    return `${size / 10 ** 9}gb`;
  };
  return (
    <div className="single-view">
      <h2>{item?.title || "No title"}</h2>
      <p>{item?.description || "No description"}</p>
      <div>
        {item?.media_type.startsWith("image/") && (
          <img src={item.filename || "-"} alt={item.title || "No title"} />
        )}
        {item?.media_type === "video/mp4" && (
          <video src={item.filename || "-"} controls width="100%">
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <p>Media type: {item.media_type || "Unknown"}</p>
      <p>Filesize: {displayFileSize(item.filesize) || 0}</p>
      <p>Created: {new Date(item.created_at).toLocaleString("fi-FI")}</p>
      <p>Media ID: {item.media_id ?? "none"}</p>
      <p>Posted by: {item.username ?? item.user_id ?? "none"}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};
export default Single;
