import NewTextArea from "@/components/Form/FormElement/NewTextArea";
import NewInput from "@/components/Form/FormElement/NewInput";
import CategoryDropdown from "@/components/Form/FormElement/CategoryDropdown";
import FormModalGroup from "@/components/Form/FormElement/FormModalGroup";
import LabelledSelect from "@/components/Form/FormElement/LabelledSelect";
import DurationElement from "@/components/Form/FormElement/DurationElement";

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
    case "select":
      return <LabelledSelect input={input} />;
      case "duration":
        return <DurationElement input={input} />
  }
}

export default function FormGroup({ input }: any) {
  return <>{displayFormElement(input)}</>;
}
