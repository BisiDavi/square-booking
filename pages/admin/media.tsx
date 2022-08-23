/* eslint-disable @next/next/no-img-element */
import { FiUpload } from "react-icons/fi";

import useImageDropzone from "@/hooks/useImageDropzone";
import AdminLayoutPage from "@/layout/Admin-layout";

function getSize(fileSize: number) {
  if (fileSize > 1000 && fileSize < 1000000) {
    return `${fileSize / 1000} kB`;
  } else if (fileSize > 1000000) {
    return `${fileSize / 1000000} MB`;
  }
}

export default function MediaLibraryPage() {
  const { style, dropzone } = useImageDropzone();
  const { getRootProps, getInputProps, isDragAccept, acceptedFiles } = dropzone;

  return (
    <AdminLayoutPage>
      <section className="container">
        <h3 className="text-2xl font-bold text-center">
          Upload Your Pictures by dragging / Click to select image files{" "}
        </h3>
        <div
          className="dropzone h-96 mt-10 rounded-lg  bg-gray-200 w-4/5 justify-center mx-auto flex"
          {...getRootProps({ style })}
        >
          {acceptedFiles.length === 0 && <FiUpload className="text-4xl" />}
          <input {...getInputProps()} />
          <div className="images">
            {acceptedFiles.map((file, index) => {
              const imageData = URL.createObjectURL(file);
              return (
                index === 0 && (
                  <img
                    key={file.name}
                    src={imageData}
                    height="500px"
                    width="500px"
                    alt="uploaded image"
                    onLoad={() => {
                      URL.revokeObjectURL(imageData);
                    }}
                  />
                )
              );
            })}
          </div>
        </div>
        <div className="drop mx-auto text-center my-4 font-bold">
          {isDragAccept ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag &apos;n&apos; drop the Image</p>
          )}
        </div>
        <ul className="file-list">
          {acceptedFiles &&
            acceptedFiles.map((file, index) => (
              <li key={file.lastModified} className="font-bold text-center">
                <span className="bg-gray-900 text-white rounded-full h-10 w-10 px-2 py-1 mx-1">
                  {index + 1}
                </span>{" "}
                {file.name} {" - "} <span>{getSize(file.size)}</span>
              </li>
            ))}
        </ul>
      </section>
    </AdminLayoutPage>
  );
}
