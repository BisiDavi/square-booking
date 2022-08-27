/* eslint-disable react-hooks/exhaustive-deps */
import { useDropzone } from "react-dropzone";
import { useCallback, useMemo, useRef } from "react";
import axios from "axios";
import { useQueryClient } from "react-query";

import useToast from "@/hooks/useToast";
import { styles } from "@/styles/dropzone.styles";
import { useAppDispatch } from "@/hooks/useRedux";
import { updateMediaUpload } from "@/redux/ui-slice";

export default function useImageDropzone() {
  const toastID = useRef(null);
  const dispatch = useAppDispatch();
  const { loadingToast, updateToast } = useToast();
  const queryClient = useQueryClient();

  const onDrop = useCallback(async (acceptedFiles: any) => {
    let formData = new FormData();
    const [file] = acceptedFiles;
    formData.append("file", file);
    loadingToast(toastID);
    axios
      .post("/api/image/upload-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        dispatch(updateMediaUpload(true));
        updateToast(toastID, "success", "image uploaded");
        queryClient.invalidateQueries("getImages");
      })
      .catch((error) => {
        dispatch(updateMediaUpload(true));
        updateToast(
          toastID,
          "error",
          `error uploading image, ${error?.response?.data.errors[0].detail}`
        );
      });
  }, []);

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
