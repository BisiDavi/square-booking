import LabelledInput from "@/components/Form/FormElement/LabelledInput";
import Select from "@/components/Form/FormElement/Select";

export default function PriceOverride() {
  return (
    <div className="row flex items-center my-4">
      <LabelledInput
        placeholder="Price override"
        label="Price override"
        className="w-1/2 relative mr-4"
        type="number"
      />
      <Select label="Location" className="relative w-1/2  -mb-5" />
    </div>
  );
}
