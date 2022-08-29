/* eslint-disable @next/next/no-img-element */
import { BiUpload } from "react-icons/bi";
import axios from "axios";

import useReduxForm from "@/hooks/useReduxForm";
import { updateImage } from "@/redux/form-slice";
import { useAppDispatch } from "@/redux/store";

export default function UploadIcon() {
  const { getInputValue, onChangeHandler } = useReduxForm();
  const formData = new FormData();
  const dispatch = useAppDispatch();
  const imgFile = getInputValue("service-image");

  function uploadImageHandler(e: any) {
    const imageData = URL.createObjectURL(e.target.files[0]);
    onChangeHandler(imageData, "service-image", true);
    formData.append("file", e.target.files[0]);
    axios
      .post("/api/image/upload-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const imageData = JSON.parse(response.data);
        dispatch(updateImage(imageData));
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  return (
    <div className="h-32 upload-service-icon flex justify-center items-center bg-gray-500 border border-gray-900 w-1/4 ml-4 rounded-md relative">
      {!imgFile && (
        <label
          htmlFor="uploadImage"
          className="wrapper flex items-center cursor-pointer border border-gray-100 text-white px-2 rounded-md"
        >
          <BiUpload className="mr-1 text-xl" />
          <input
            type="file"
            id="uploadImage"
            className="text-md font-medium text-white items-center px-3 rounded-md hover:bg-gray-900 hover:border-gray-900  flex"
            onChange={uploadImageHandler}
          />
          Upload Image
        </label>
      )}
      {imgFile && <img src={imgFile} alt="image-uploaded" />}
      {imgFile && (
        <div className="backdrop absolute bg-gray-500 opacity-90 px-2 h-4/5 flex justify-center items-center w-5/6">
          <label
            htmlFor="uploadImage"
            className="wrapper flex items-center text-sm font-bold cursor-pointer border py-1 hover:bg-gray-900 hover:text-white border-gray-100 text-white px-2 rounded-md"
          >
            <BiUpload className="mr-1 text-xl" />
            <input
              type="file"
              id="uploadImage"
              height="130px"
              width="160px"
              className="font-medium text-white items-center px-3 rounded-md hover:bg-gray-900 hover:border-gray-900  flex"
              onChange={uploadImageHandler}
            />
            change Image
          </label>
        </div>
      )}
      <style jsx>
        {`
          input[type="file"] {
            display: none;
          }
        `}
      </style>
    </div>
  );
}
