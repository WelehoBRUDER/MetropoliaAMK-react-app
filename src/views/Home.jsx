import MediaRow from "../components/MediaRow";
import {useMedia} from "../hooks/apiHooks";
import {useUserContext} from "../hooks/contextHooks";

const Home = () => {
  const {mediaArray} = useMedia();
  const {user} = useUserContext();

  return (
    <>
      <h2>My Media</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 border border-[#ccc] text-center">Thumbnail</th>
            <th className="p-4 border border-[#ccc] text-center">Title</th>
            <th className="p-4 border border-[#ccc] text-center">Posted by</th>
            <th className="p-4 border border-[#ccc] text-center">
              Description
            </th>
            <th className="p-4 border border-[#ccc] text-center">Created</th>
            <th className="p-4 border border-[#ccc] text-center">Size</th>
            <th className="p-4 border border-[#ccc] text-center">Type</th>
            <th className="p-4 border border-[#ccc] text-center">Detail</th>
            {user && (
              <th className="p-4 border border-[#ccc] text-center">Modify</th>
            )}
            {user && (
              <th className="p-4 border border-[#ccc] text-center">Delete</th>
            )}
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow key={item.media_id} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Home;
