import useRequestMutation from "@/hooks/useRequestMutation";

export default function useUploadImageMutation() {
  return useRequestMutation((imageFile) => imageFile, {
    mutationKey: "uploadImageMutation",
    success: "image uploaded",
    error: "unable to upload image",
  });
}
