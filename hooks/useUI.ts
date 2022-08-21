import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import { toggleAccordion, updateModal } from "@/redux/ui-slice";
import { modalStateType } from "@/types/redux-types";

export default function useUI() {
  const { modal, accordion } = useAppSelector((state) => state.UI);
  const dispatch = useAppDispatch();

  function toggleModal(modalStateType: modalStateType) {
    dispatch(updateModal(modalStateType));
  }

  function toggleAccordionHandler(UIState: any) {
    return dispatch(toggleAccordion(UIState));
  }
  return { modal, toggleModal, accordion, toggleAccordionHandler };
}
