import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import { updateModal } from "@/redux/ui-slice";

type modalState = "auth-modal" | null;

export default function useUI() {
  const { modal } = useAppSelector((state) => state.UI);
  const dispatch = useAppDispatch();

  function toggleModal(modalState: modalState) {
    dispatch(updateModal(modalState));
  }
  return { modal, toggleModal };
}
