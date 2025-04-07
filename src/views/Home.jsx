import MediaRow from "../components/MediaRow";
import {useEffect, useState} from "react";
import {fetchData} from "../utils/fetchData";

const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    try {
      const array = await fetchData(import.meta.env.VITE_MEDIA_API + "/media");
      setMediaArray(array);
      const newArray = Promise.all(
        array.map(async (item) => {
          if (!item) return;
          const result = await fetchData(
            import.meta.env.VITE_AUTH_API + "/" + item.user_id
          );
          return {...item, username: result.username};
        })
      );
      newArray.then((resolvedArray) => {
        // Filter out any undefined values from the resolved array
        setMediaArray(resolvedArray);
      });
      // console.log(newArray);
      // setMediaArray(newArray);
    } catch (error) {
      console.error("Error fetching media data:", error);
      setMediaArray([]); // Reset mediaArray to an empty array on error
      return;
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
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
