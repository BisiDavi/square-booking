import NewTextArea from "@/components/Form/FormElement/NewTextArea";
import NewInput from "@/components/Form/FormElement/NewInput";
import CategoryDropdown from "@/components/Form/FormElement/CategoryDropdown";
import FormModalGroup from "@/components/Form/FormElement/FormModalGroup";

function displayFormElement(input: any) {
  switch (input.elementType) {
    case "input":
      return <NewInput input={input} />;
    case "textarea":
      return <NewTextArea input={input} />;
    case "categoryDropdown":
      return <CategoryDropdown />;
    case "form-modal":
      return <FormModalGroup input={input} />;
  }
}

export default function FormGroup({ input }: any) {
  return <>{displayFormElement(input)}</>;
}
