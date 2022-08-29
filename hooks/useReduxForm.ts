import { useAppDispatch } from "@/redux/store";
import { useAppSelector } from "@/hooks/useRedux";
import {
  updateCheckBox,
  updateForm,
  updateVariation,
  updateVariationCheckBox,
} from "@/redux/form-slice";

export default function useReduxForm() {
  const dispatch = useAppDispatch();
  const { form } = useAppSelector((state) => state.Form);

  const getInputValue = (name: string) => {
    if (name.includes("variation")) {
      return Object.keys(form.variation).includes(name)
        ? form.variation[name]
        : "";
    }
    return Object.keys(form).includes(name) ? form[name] : "";
  };

  function onChangeHandler(e: any, name: string, click?: boolean) {
    const data = click ? e : e.target.value;
    if (name.includes("variation")) {
      dispatch(updateVariation({ name, data }));
    } else {
      dispatch(updateForm({ name, data }));
    }
  }

  const getClickInputValue = (name: string) => {
    if (name.includes("variation")) {
      return Object.keys(form.variation).includes(name)
        ? form.variation[name]
        : false;
    }
    return Object.keys(form).includes(name) ? form[name] : false;
  };

  function onCheckboxHandler(inputName: string, data: string, name: string) {
    if (name.includes("variation")) {
      return dispatch(updateVariationCheckBox({ name: inputName, data }));
    }
    return dispatch(updateCheckBox({ name: inputName, data }));
  }

  return {
    getInputValue,
    onChangeHandler,
    getClickInputValue,
    onCheckboxHandler,
  };
}
