import { useQueryClient } from "react-query";

import displayFormElement from "@/components/Form/FormElement/displayFormElement";
import { useAppDispatch } from "@/redux/store";
import { useAppSelector } from "@/hooks/useRedux";
import { updateModal } from "@/redux/ui-slice";
import createService from "@/json/create-service.json";
import { resetForm } from "@/redux/form-slice";
import { formatService } from "@/lib/formatForm";
import useCreateServiceMutation from "@/hooks/useCreateServiceMutation";

export default function useCreateServiceForm() {
  const dispatch = useAppDispatch();
  const { form } = useAppSelector((state) => state.Form);
  const serviceFormData = formatService(form);
  const { mutate, isLoading } = useCreateServiceMutation();
  const queryClient = useQueryClient();
  const { modal } = useAppSelector((state) => state.UI);


const createServiceContent: any = createService;


  function modalHandler() {
    dispatch(updateModal("variation-modal"));
  }

  function createServiceHandler(e: any) {
    e.preventDefault();
    mutate(serviceFormData, {
      onSuccess: (data: any) => {
        console.log("data-createServiceHandler", data);
        dispatch(resetForm());
      },
      onSettled: () => {
        queryClient.invalidateQueries("listServices");
      },
      onError: (error: any) => {
        console.log("error", error);
      },
    });
  }

  function closeModalHandler() {
    dispatch(updateModal(null));
  }

  function cancelHandler() {
    dispatch(resetForm());
  }

  function createServiceFormElement(formType: string) {
    return createServiceContent[formType].map((input: any) =>
      displayFormElement(input, input.name)
    );
  }

  return {
    createServiceFormElement,
    cancelHandler,
    closeModalHandler,
    createServiceHandler,
    modalHandler,
    isLoading,
    form,
    modal,
  };
}
