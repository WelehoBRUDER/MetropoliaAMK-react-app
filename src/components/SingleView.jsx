const SingleView = (props) => {
  const {item, setSelected} = props;
  if (!item) return null; // Return null if item is not provided
  return (
    <dialog open={!!item} onClose={() => setSelected(null)}>
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
      <button onClick={() => setSelected(null)}>X</button>
    </dialog>
  );
};
export default SingleView;
