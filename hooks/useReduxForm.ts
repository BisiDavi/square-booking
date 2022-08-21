import { useAppDispatch } from "@/redux/store";
import { useAppSelector } from "@/hooks/useRedux";
import { updateForm } from "@/redux/form-slice";

export default function useReduxForm() {
  const dispatch = useAppDispatch();
  const { form } = useAppSelector((state) => state.Form);

  const getInputValue = (name: string) =>
    Object.keys(form).includes(name) ? form[name] : "";

  function onChangeHandler(e: any, name: string, click?: boolean) {
    const data = click ? e : e.target.value;
    dispatch(updateForm({ name, data }));
  }

  return { getInputValue, onChangeHandler };
}
