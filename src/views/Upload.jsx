import {useState} from "react";
import handleInputChange from "../hooks/formHooks";
import {useFile, useMedia} from "../hooks/apiHooks";
import useForm from "../hooks/formHooks";

const Upload = () => {
  const [file, setFile] = useState(null);
  const {postFile} = useFile();
  const {postMedia} = useMedia();
  const initValues = {
    title: "",
    description: "",
  };

  // Upload.jsx
  const doUpload = async () => {
    try {
      // TODO: call postFile function (see below)
      // TODO: call postMedia function (see below)
      // TODO: redirect to Home
      postFile(file, localStorage.getItem("token")).then((result) => {
        console.log("File uploaded successfully:", result);
        const media = {
          title: inputs.title,
          description: inputs.description,
          fileId: result.id,
        };
        postMedia(media).then((result) => {
          console.log("Media uploaded successfully:", result);
        });
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doUpload,
    initValues
  );

  // Upload.jsx
  const handleFileChange = (evt) => {
    if (evt.target.files) {
      console.log(evt.target.files[0]);
      // TODO: set the file to state
      setFile(evt.target.files[0]);
    }
  };

  return (
    <>
      <h1 className="text-3xl">Upload</h1>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-[80%]">
          <label htmlFor="title">Title</label>
          <input
            className="my-2.5 p-2.5 border border-[#ccc] rounded-[5px]"
            name="title"
            type="text"
            id="title"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col w-[80%]">
          <label htmlFor="description">Description</label>
          <textarea
            className="my-2.5 p-2.5 border border-[#ccc] rounded-[5px]"
            name="description"
            rows={5}
            id="description"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="flex flex-col w-[80%]">
          <label htmlFor="file">File</label>
          <input
            className="my-2.5 p-2.5 border border-[#ccc] rounded-[5px]"
            name="file"
            type="file"
            id="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
          />
        </div>
        <img
          src={
            file
              ? URL.createObjectURL(file)
              : "https://dummyimage.com/200x200/000/fff&text=Choose+image"
          }
          alt="preview"
          width="200"
          className="w-[200px] h-[200px] object-cover rounded-[5px] my-2.5"
        />
        <button
          className="my-2.5 p-2.5 rounded-[5px] bg-[#363636] text-white border-none cursor-pointer"
          type="submit"
          disabled={file && inputs.title.length > 3 ? false : true}
        >
          Upload
        </button>
      </form>
    </>
  );
};
export default Upload;
