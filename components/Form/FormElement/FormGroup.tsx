import NewTextArea from "@/components/Form/FormElement/NewTextArea";
import NewInput from "@/components/Form/FormElement/NewInput";
import CategoryDropdown from "@/components/Form/FormElement/CategoryDropdown";
import FormModalGroup from "@/components/Form/FormElement/FormModalGroup";
import LabelledSelect from "@/components/Form/FormElement/LabelledSelect";
import DurationElement from "@/components/Form/FormElement/DurationElement";
import ToggleElement from "@/components/Form/FormElement/ToggleElement";
import TeamModalView from "@/components/View/TeamModalView";
import ListLocationView from "@/components/View/ListLocationView";

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
      return <DurationElement input={input} />;
    case "toggle":
      return <ToggleElement input={input} />;
    case "teamMembersView":
      return <TeamModalView />;
    case "locationsView":
      return <ListLocationView />;
  }
}

export default function FormGroup({ input }: any) {
  return <>{displayFormElement(input)}</>;
}
