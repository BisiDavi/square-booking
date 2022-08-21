import { useAppDispatch } from "@/redux/store";
import { useAppSelector } from "@/hooks/useRedux";
import { updateForm } from "@/redux/form-slice";

export default function useReduxForm() {
  const dispatch = useAppDispatch();
  const { form } = useAppSelector((state) => state.Form);

  const getInputValue = (name: string) =>
    Object.keys(form).includes(name) ? form[name] : "";

  function onChangeHandler(e: any, name: string) {
    dispatch(updateForm({ name, data: e.target.value }));
  }

  return { getInputValue, onChangeHandler };
}
