// TODO: add necessary imports
import {useEffect, useState} from "react";
import {fetchData} from "../utils/fetchData";
const useMedia = () => {
  // TODO: move mediaArray state here
  // TODO: move getMedia function here
  // TODO: move useEffect here
  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    try {
      const array = await fetchData(import.meta.env.VITE_MEDIA_API + "/media");
      setMediaArray(array);
      const newArray = Promise.all(
        array.map(async (item) => {
          if (!item) return;
          const result = await fetchData(
            import.meta.env.VITE_AUTH_API + "/users/" + item.user_id
          );
          return {...item, username: result.username};
        })
      );
      newArray.then((resolvedArray) => {
        console.log(resolvedArray);
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

  return {mediaArray};
};

export {useMedia};
