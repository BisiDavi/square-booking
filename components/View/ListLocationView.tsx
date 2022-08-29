import { useQuery } from "react-query";

import { listLocations } from "@/requests/getRequests";
import Checkbox from "@/components/Form/FormElement/Checkbox";
import SpinnerRipple from "@/components/Loader/SpinnerRipple";

interface Props {
  name: string;
}

export default function ListLocationView({ name }: Props) {
  const { data, status } = useQuery("listLocations", listLocations);

  const parsedData = status === "success" ? JSON.parse(data?.data) : null;

  return (
    <div className="form-modal w-11/12 flex flex-col mx-auto">
      <div className="location-view">
        {status === "error" ? (
          "unable to fetch location"
        ) : status === "loading" ? (
          <div className="mx-auto flex flex-col justify-center items-center">
            <SpinnerRipple />
            <p>Fetching location...</p>
          </div>
        ) : (
          <div className="list">
            <h3>Select Locations</h3>
            {parsedData.locations.map(
              (location: { id: string; name: string }, index: number) => {
                return (
                  <Checkbox
                    label={location.name}
                    key={location.id}
                    value={location.id}
                    formType="service"
                    type="location"
                    name={`${name}-${index}`}
                  />
                );
              }
            )}
          </div>
        )}
      </div>
    </div>
  );
}
