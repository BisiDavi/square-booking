import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import { toggleAccordion, updateModal } from "@/redux/ui-slice";

type modalState = "auth-modal" | null;

export default function useUI() {
  const { modal, accordion } = useAppSelector((state) => state.UI);
  const dispatch = useAppDispatch();

  function toggleModal(modalState: modalState) {
    dispatch(updateModal(modalState));
  }

  function toggleAccordionHandler(UIState: any) {
    return dispatch(toggleAccordion(UIState));
  }
  return { modal, toggleModal, accordion, toggleAccordionHandler };
}
