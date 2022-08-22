import { BsPhone } from "react-icons/bs";

import formatTime from "@/lib/formatTime";
import formatDays from "@/lib/formatDays";
import { useAppSelector } from "@/hooks/useRedux";
import { serviceItemType } from "@/types/service-type";

interface Props {
  service: serviceItemType;
}

export default function ServicePageSidebar({ service }: Props) {
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);

  return (
    <div className="w-full lg:w-1/3 bg-gray-200 lg:rounded-lg px-5 py-4 lg:ml-12 height-max-content lg:fixed lg:right-20 lg:z-50">
      <h6 className="text-md pt-2 text-gray-600 font-bold">ABOUT US</h6>
      <p className="pt-1 pb-8">{service?.itemData.description}</p>
      <h6 className="text-md py-1  text-gray-600 font-bold">
        CONTACT & BUSINESS HOURS
      </h6>
      <hr className="w-full bg-gray-400 h-1" />
      <div className="call flex items-center justify-between py-4">
        <div className="flex items-center">
          <BsPhone className="mr-2" /> <p>{storeProfile?.phoneNumber}</p>
        </div>
        <div className="dial-phone font-medium text-center bg-white border border-gray-100 rounded w-1/6 hover:bg-gray-100">
          <a className="text-md" href={`tel:+${storeProfile?.phoneNumber}`}>
            Call
          </a>
        </div>
      </div>
      <hr className="w-full bg-gray-400 h-1" />
      <ul className="opening-days mt-4">
        {storeProfile?.businessHours.periods.map((period) => (
          <li
            key={period.dayOfWeek}
            className="text-sm flex justify-between py-1"
          >
            {formatDays(period.dayOfWeek)}{" "}
            <span>
              {period.startLocalTime} AM - {formatTime(period.endLocalTime)} PM{" "}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
