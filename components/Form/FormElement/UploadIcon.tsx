import { BiUpload } from "react-icons/bi";

import Button from "@/components/UI/Button";

export default function UploadIcon() {
  return (
    <div className="h-32 upload-service-icon flex justify-center items-center bg-gray-500 w-1/5 ml-4 rounded-md">
      <Button
        text="upload icon"
        className="text-md font-medium items-center text-white border border-gray-100 py-2 px-3 rounded-md hover:bg-gray-900 hover:border-gray-900  flex"
        icon={<BiUpload className="mr-1 text-xl" />}
      />
    </div>
  );
}
