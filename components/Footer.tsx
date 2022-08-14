import Image from "next/image";
import Logo from "@/components/Logo";
import { useAppSelector } from "@/hooks/useRedux";
import formatTime from "@/lib/formatTime";

export default function Footer() {
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);
  return (
    <footer className="bg-gray-900  w-full">
      <Image
        alt="footer-image"
        src="/footer-gradient.png"
        height={200}
        width={1200}
        layout="responsive"
      />
      <div className="h-52 container flex mx-auto items-center justify-between">
        <Logo />

        <div className="location text-white w-1/6">
          <h3 className="text-lg font-bold">Contact Us</h3>
          <p className="text-sm">Phone: {storeProfile?.phoneNumber}</p>
          <p className="text-sm break-words">
            Email:{storeProfile?.businessEmail}
          </p>
        </div>

        <div className="location text-white w-1/5">
          <h3 className="text-lg font-bold">Location</h3>
          <p>{storeProfile?.address.addressLine1}</p>
          <p>
            {storeProfile?.address.postalCode}, {storeProfile?.address.locality}
            , {storeProfile?.address.administrativeDistrictLevel1}
          </p>
        </div>

        <div className="location text-white w-1/5">
          <h3 className="text-lg font-bold">Business Hours</h3>
          <ul>
            {storeProfile?.businessHours.periods.map((period) => (
              <li key={period.dayOfWeek} className="text-sm">
                {period.dayOfWeek} : {period.startLocalTime} AM -{" "}
                {formatTime(period.endLocalTime)} PM
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
