import MediaRow from "../components/MediaRow";
import {useEffect, useState} from "react";
import {fetchData} from "../utils/fetchData";

const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    try {
      const json = await fetchData("test.json");
      setMediaArray(json);
    } catch (error) {
      console.error("Error fetching media data:", error);
      setMediaArray([]); // Reset mediaArray to an empty array on error
      return;
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  console.log(mediaArray);

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
