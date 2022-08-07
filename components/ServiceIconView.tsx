import BarberShopIcon from "@/icons/BarberShopIcon";
import BraidsIcon from "@/icons/BraidsIcon";
import ChiropracticIcon from "@/icons/ChiropracticIcon";
import DaySpaIcon from "@/icons/DaySpaIcon";
import HairSalonIcon from "@/icons/HairSalonIcon";
import LashesIcon from "@/icons/LashesIcon";
import MakeupIcon from "@/icons/MakeupIcon";
import MassageIcon from "@/icons/MassageIcon";
import NailSalonlcon from "@/icons/NailSalonlcon";
import SkincareIcon from "@/icons/SkincareIcon";
import TattooIcon from "@/icons/TattooIcon";
import serviceIcons from "@/json/services.json";

function displayServiceIcon(icon: string) {
  switch (icon) {
    case "hair":
      return <HairSalonIcon />;
    case "baber":
      return <BarberShopIcon />;
    case "nail":
      return <NailSalonlcon />;
    case "skin":
      return <SkincareIcon />;
    case "massage":
      return <MassageIcon />;
    case "makeup":
      return <MakeupIcon />;
    case "eyebrow":
      return <LashesIcon />;
    case "chiropractor":
      return <ChiropracticIcon />;
    case "spa":
      return <DaySpaIcon />;
    case "braids":
      return <BraidsIcon />;
    case "tattoo":
      return <TattooIcon />;
    default:
      null;
  }
}

export default function ServiceIconView() {
  return (
    <ul className="w-full flex bg-black py-4">
      {serviceIcons.map((serviceIcon) => (
        <li
          key={serviceIcon.icon}
          className="flex  flex-col justify-center mx-auto items-center text-center bg-dark-800 rounded-full w-1/6"
        >
          <span className="icon hover:bg-gray-500 flex mx-auto">
            {displayServiceIcon(serviceIcon.icon)}
          </span>
          <h6 className="text-white text-xs mt-2">{serviceIcon.name}</h6>
        </li>
      ))}
      <style jsx>
        {`
          .icon {
            height: 100px;
            width: 100px;
            border: 1px solid white;
            padding: 10px;
            border-radius: 50%;
          }
        `}
      </style>
    </ul>
  );
}
