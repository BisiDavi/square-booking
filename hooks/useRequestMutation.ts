/* eslint-disable unused-imports/no-unused-vars */
import { useRef } from "react";
import { useMutation } from "react-query";
import useToast from "@/hooks/useToast";

type mutationDataType = {
  mutationKey: string;
  success: string;
  error: string;
  onSuccessMethod?: () => void;
  onErrorMethod?: () => void;
  onSettledMethod?: () => void;
};

type mutationFnType = (variables: any) => Promise<any>;

export default function useRequestMutation(
  mutationFn: mutationFnType,
  mutationData: mutationDataType
) {
  const { loadingToast, updateToast } = useToast();
  const toastID = useRef(null);

  return useMutation(mutationFn, {
    mutationKey: mutationData.mutationKey,
    onMutate: () => {
      loadingToast(toastID);
    },
    onSuccess: (data: any) => {
      console.log(`response-data-${mutationData.mutationKey}`, data?.data);
      if (mutationData.onSuccessMethod) {
        mutationData.onSuccessMethod();
      }
      updateToast(toastID, "success", mutationData.success);
    },
    onSettled: () => {},
    onError: (err: any) => {
      console.log("err", err);
      if (mutationData.onErrorMethod) {
        mutationData.onErrorMethod();
      }
      updateToast(toastID, "error", mutationData.error);
    },
  });
}
