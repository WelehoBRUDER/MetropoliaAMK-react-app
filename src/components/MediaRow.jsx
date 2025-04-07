const MediaRow = (props) => {
  const {item} = props;
  if (!item) return null; // Return null if item is not provided
  return (
    <tr key={item.media_id || "none"}>
      <td>
        <img src={item.thumbnail || "-"} alt={item.title || "no-title"} />
      </td>
      <td>{item.title || "no-title"}</td>
      <td>{item.description || "no description."}</td>
      <td>{new Date(item.created_at).toLocaleString("fi-FI") || "-"}</td>
      <td>{item.filesize || "-"}</td>
      <td>{item.media_type || "-"}</td>
    </tr>
  );
};

export default MediaRow;
