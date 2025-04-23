import {Link} from "react-router-dom";
import {useUserContext} from "../hooks/contextHooks";

const MediaRow = (props) => {
  const {user} = useUserContext();
  const {item} = props;
  if (!item) return null; // Return null if item is not provided
  console.log(user);
  return (
    <tr key={item.media_id || "none"}>
      <td className="p-4 border border-[#ccc] text-center">
        <img src={item.thumbnail || "-"} alt={item.title || "no-title"} />
      </td>
      <td className="p-4 border border-[#ccc] text-center">
        {item.title || "no-title"}
      </td>
      <td className="p-4 border border-[#ccc] text-center">
        {item.username || "unknown"}
      </td>
      <td className="p-4 border border-[#ccc] text-center">
        {item.description || "no description."}
      </td>
      <td className="p-4 border border-[#ccc] text-center">
        {new Date(item.created_at).toLocaleString("fi-FI") || "-"}
      </td>
      <td className="p-4 border border-[#ccc] text-center">
        {item.filesize || "-"}
      </td>
      <td className="p-4 border border-[#ccc] text-center">
        {item.media_type || "-"}
      </td>
      <td className="p-4 border border-[#ccc] text-center">
        <Link
          className="text-white no-underline bg-[#363636] border-none px-2 py-1 hover:bg-[#111111] inline-block"
          to="/single"
          state={{item}}
        >
          Show
        </Link>
      </td>
      {user && (
        <td className="p-4 border border-[#ccc] text-center">
          <button
            className="text-white no-underline bg-[#363636] border-none px-2 py-1 hover:bg-[#111111] inline-block"
            onClick={() => console.log("modify", item)}
          >
            Modify
          </button>
        </td>
      )}
      {user && (
        <td className="p-4 border border-[#ccc] text-center">
          <button
            className="text-white no-underline bg-[#363636] border-none px-2 py-1 hover:bg-[#111111] inline-block"
            onClick={() => console.log("delete", item)}
          >
            Delete
          </button>
        </td>
      )}
    </tr>
  );
};

export default MediaRow;
