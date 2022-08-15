import ServiceVariationList from "@/components/Services/ServiceVariationList";

import type { serviceItemType } from "@/types/service-type";

interface Props {
  service: serviceItemType;
}

export default function ServiceView({ service }: Props) {
  return (
    <div className="serviceview my-2">
      <h4 className="font-semibold text-xl">{service.itemData.name}</h4>
      <p className="text-md font-medium">{service.itemData.description}</p>
      <ul>
        <h5 className="font-medium text-lg text-center mb-0">Variations</h5>
        {service.itemData.variations.map((variation) => (
          <ServiceVariationList variation={variation} key={variation.id} />
        ))}
      </ul>
    </div>
  );
}
