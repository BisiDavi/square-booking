/* eslint-disable unused-imports/no-unused-vars */
import { useRef } from "react";
import { useMutation } from "react-query";

import useToast from "@/hooks/useToast";

type toastType = {
  success: string;
  error: string;
};

type mutationFnType = (variables: any) => Promise<any>;

export default function useRequestMutation(
  mutationFn: mutationFnType,
  mutationKey: string,
  toast: toastType
) {
  const { loadingToast, updateToast } = useToast();
  const toastID = useRef(null);

  return useMutation(mutationFn, {
    mutationKey,
    onMutate: () => {
      loadingToast(toastID);
    },
    onSettled: {},
    onSuccess: (data: any) => {
      console.log("response", data);
      updateToast(toastID, "success", toast.success);
    },
    onError: (err: any) => {
      console.log("err", err);
      updateToast(toastID, "error", toast.error);
    },
  });
}
