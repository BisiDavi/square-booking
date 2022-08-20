import UploadIcon from "@/components/Form/FormElement/UploadIcon";
import FormGroup from "@/components/Form/FormElement/FormGroup";
import createService from "@/json/create-service.json";
import Button from "@/components/UI/Button";

export default function TempCreateServiceForm() {
  return (
    <div className="bg-white rounded-md p-8 w-11/12 mx-auto my-4 flex flex-col">
      <div className="main flex  items-start">
        <div className="w-4/5 mr-4">
          {createService.main.map((input) => (
            <FormGroup input={input} key={input.name} />
          ))}
        </div>
        <UploadIcon />
      </div>
      <div className="others w-11/12">
        <div className="price-duration">
          <h3 className="my-3 text-lg font-medium">Price and Duration</h3>
          {createService.priceDuration.map((input) => (
            <FormGroup input={input} key={input.name} />
          ))}
        </div>
        <div className="duration mt-6">
          {createService.duration.map((input) => (
            <FormGroup input={input} key={input.name} />
          ))}
        </div>
        <div className="bookable mt-6">
          {createService.bookable.map((input) => (
            <FormGroup input={input} key={input.name} />
          ))}
        </div>
        <Button
          className="text-blue-500 w-full mt-6 py-3 text-left px-4 border hover:bg-gray-100"
          text="Add Variation"
        />
      </div>
    </div>
  );
}
