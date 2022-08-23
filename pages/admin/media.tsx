import useImageDropzone from "@/hooks/useImageDropzone";
import AdminLayoutPage from "@/layout/Admin-layout";
import { FiUpload } from "react-icons/fi";

export default function MediaLibraryPage() {
  const { style, dropzone } = useImageDropzone();
  const { getRootProps, getInputProps, isDragAccept, acceptedFiles } = dropzone;

  console.log("acceptedFiles", acceptedFiles);

  return (
    <AdminLayoutPage>
      <section className="container">
        <h3 className="text-2xl font-bold text-center">
          Upload Your Pictures by dragging / Click to select image files{" "}
        </h3>
        <div
          className="dropzone h-80 mt-10 rounded-lg  bg-gray-200 w-4/5 justify-center mx-auto flex"
          {...getRootProps({ style })}
        >
          <FiUpload className="text-4xl" />
          <input {...getInputProps()} />
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
                <span className="bg-gray-900 text-white rounded-full h-10 w-10 px-2 py-1 mx-1">{index + 1}</span> {file.name}
              </li>
            ))}
        </ul>
      </section>
    </AdminLayoutPage>
  );
}
