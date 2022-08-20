import LocationItem from "@/components/Location/LoationItem";

interface Props {
  locationIds: string[];
}

export default function GetLocation({ locationIds }: Props) {
  return (
    <div>
      {locationIds?.map((locationId) => (
        <LocationItem key={locationId} locationId={locationId} />
      ))}
    </div>
  );
}
