import MediaRow from "../components/MediaRow";
import {useEffect, useState} from "react";
import {fetchData} from "../utils/fetchData";
import {useMedia} from "../hooks/apiHooks";

const Home = () => {
  const {mediaArray} = useMedia();

  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Posted by</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Detail</th>
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
