import { useDropzone } from "react-dropzone";
import { useCallback, useMemo } from "react";
import axios from "axios";

import { styles } from "@/styles/dropzone.styles";

export default function useImageDropzone() {
  const onDrop = useCallback(async (acceptedFiles: any) => {
    let formData = new FormData();
    const [file] = acceptedFiles;
    formData.append("file", file);
 

    axios
      .post("/api/image/upload-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => console.log("fetch-response", response))
      .catch((error) => console.log("fetch-error", error));
  }, []);

  // const imageFile = acceptedFiles[0];
  const dropzone = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/avif": [".avif"],
      "image/webp": [".webp"],
    },
  });

  const style: any = useMemo(
    () => ({
      ...styles.baseStyle,
      ...(dropzone.isFocused ? styles.focusedStyle : {}),
      ...(dropzone.isDragAccept ? styles.acceptStyle : {}),
      ...(dropzone.isDragReject ? styles.rejectStyle : {}),
    }),
    [dropzone.isFocused, dropzone.isDragAccept, dropzone.isDragReject]
  );

  return { dropzone, style };
}
