import TextArea from "@/components/Form/FormElement/TextArea";
import Input from "@/components/Form/FormElement/Input";
import CategoryDropdown from "@/components/Form/FormElement/CategoryDropdown";
import FormModalGroup from "@/components/Form/FormElement/FormModalGroup";
import LabelledSelect from "@/components/Form/FormElement/LabelledSelect";
import DurationElement from "@/components/Form/FormElement/DurationElement";
import ToggleElement from "@/components/Form/FormElement/ToggleElement";
import TeamModalView from "@/components/View/TeamModalView";
import ListLocationView from "@/components/View/ListLocationView";

export default function displayFormElement(input: any, key: string) {
  switch (input.elementType) {
    case "input":
      return <Input input={input} key={key} />;
    case "textarea":
      return <TextArea input={input} key={key} />;
    case "categoryDropdown":
      return <CategoryDropdown key={key} />;
    case "form-modal":
      return <FormModalGroup input={input} key={key} />;
    case "select":
      return <LabelledSelect input={input} key={key} />;
    case "duration":
      return <DurationElement input={input} key={key} />;
    case "toggle":
      return <ToggleElement input={input} key={key} />;
    case "teamMembersView":
      return <TeamModalView />;
    case "locationsView":
      return <ListLocationView />;
  }
}
