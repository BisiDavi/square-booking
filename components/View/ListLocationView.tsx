import { BsSearch } from "react-icons/bs";
import { useQuery } from "react-query";

import { listLocations } from "@/requests/getRequests";
import Checkbox from "@/components/Form/FormElement/Checkbox";

export default function ListLocationView() {
  const { data, status } = useQuery("listLocations", listLocations);

  return (
    <div className="form-modal w-11/12 flex flex-col mx-auto">
      <div className="search-input relative mx-auto flex justify-center w-full">
        <BsSearch className="mr-2 text-xl absolute left-3 top-3" />
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 py-2 w-full rounded-md pl-10"
        />
      </div>
      <div className="location-view h-44">
        {status === "error" ? (
          "unable to fetch location"
        ) : status === "loading" ? (
          "loading..."
        ) : (
          <div className="mt-4 list">
            <Checkbox label="Locations" className="bg-gray-100" />
            {data.data.locations.map(
              (location: { id: string; name: string }) => (
                <Checkbox label={location.name} key={location.id} />
              )
            )}
            <Checkbox label="Available at all future locations" />
          </div>
        )}
      </div>
    </div>
  );
}
