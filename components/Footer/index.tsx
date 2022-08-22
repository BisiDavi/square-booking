import Image from "next/image";

import Logo from "@/components/Logo";
import { useAppSelector } from "@/hooks/useRedux";
import formatTime from "@/lib/formatTime";
import formatCountry from "@/lib/formatCountry";
import formatDays from "@/lib/formatDays";

export default function Footer() {
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);
  return (
    <>
      <div className="footer-wrapper">
        <Image
          alt="footer-image"
          src="/footer-gradient.png"
          height={200}
          width={1200}
          layout="responsive"
        />
      </div>
      <footer className="bg-gray-900 w-full py-10">
        <div className="container mb-8 px-6  lg:px-0 flex flex-col lg:flex-row lg:mx-auto lg:items-start lg:justify-between">
          <Logo className="w-40 items-center text-center justify-center flex mb-4" />
          {storeProfile && (
            <div className="location text-white w-full lg:w-1/6">
              <h3 className="text-lg font-bold">Contact Us</h3>
              <p className="text-sm">Phone: {storeProfile?.phoneNumber}</p>
              <p className="text-sm break-words">
                Email:{storeProfile?.businessEmail}
              </p>
            </div>
          )}
          {storeProfile && (
            <div className="location text-white w-full my-2 lg:my-0 lg:w-1/5">
              <h3 className="text-lg font-bold">Location</h3>
              <p>{storeProfile?.address?.addressLine1}</p>
              <p>
                {storeProfile?.address?.postalCode},{" "}
                {storeProfile?.address?.locality},{" "}
                {storeProfile?.address?.administrativeDistrictLevel1},{" "}
                {formatCountry(storeProfile?.country)}
              </p>
            </div>
          )}
          {storeProfile?.businessHours && (
            <div className="location text-white w-3/4  my-2 lg:my-0 lg:w-1/5">
              <h3 className="text-lg font-bold">Business Hours</h3>
              <ul>
                {storeProfile?.businessHours?.periods.map((period) => (
                  <li
                    key={period.dayOfWeek}
                    className="text-sm justify-between flex py-0.5"
                  >
                    <span>{formatDays(period?.dayOfWeek)}</span>
                    <span>
                      {period.startLocalTime} AM -{" "}
                      {formatTime(period.endLocalTime)} PM
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </footer>
    </>
  );
}
