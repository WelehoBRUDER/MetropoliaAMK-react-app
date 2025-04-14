import {useEffect, useState} from "react";
import {fetchData} from "../utils/fetchData";

const useMedia = () => {
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

const useUser = () => {
  const [user, setUser] = useState({});

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const userData = await fetchData(
        import.meta.env.VITE_AUTH_API + "/users/token",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(userData);
      return userData;
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const postRegister = async (inputs) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    };
    const registerResult = await fetchData(
      import.meta.env.VITE_AUTH_API + "/users",
      fetchOptions
    );
    return registerResult;
  };

  useEffect(() => {
    getUser();
  }, []);

  return {user, getUserByToken: getUser, postRegister};
};

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    };
    const loginResult = await fetchData(
      import.meta.env.VITE_AUTH_API + "/auth/login",
      fetchOptions
    );
    return loginResult;
  };

  return {postLogin};
};

export {useMedia, useUser, useAuthentication};
