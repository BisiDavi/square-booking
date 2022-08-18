import Typewriter from "typewriter-effect";
import Image from "next/image";

import { useAppSelector } from "@/hooks/useRedux";
import BannerAnimation from "@/components/Banner/BannerAnimation";

export default function HomepageBanner() {
  const { serviceCategories } = useAppSelector(
    (state) => state.ServiceCategories
  );
  return (
    <section className="w-full relative py-10 pt-24">
      <div className="container flex mx-auto justify-center items-center">
        <div className="w-1/2">
          <h1 className="font-bold text-5xl text-gray-900">
            Let&#39;s make
            <br />
            Booking better
            <br />
            together ✌🏼
          </h1>
          <div className="text mt-2 font-bold">
            <h4>Book for </h4>
            {serviceCategories && (
              <Typewriter
                options={{
                  strings: serviceCategories,
                  autoStart: true,
                  loop: true,
                }}
              />
            )}
          </div>
          <p className="mt-3 text-xl text-gray-400 word-break w-11/12">
            Discover the easiest way to schedule appointments with the #1 online
            booking system
          </p>
          <BannerAnimation />
        </div>
        <div className="w-1/2">
          <Image
            src="/booking-doodle-banner.webp"
            alt="booking-banner"
            layout="responsive"
            height={600}
            width={1000}
          />
        </div>
      </div>
      <style jsx>
        {`
          .w-full {
            background-color: var(--site-purple);
            height: 69vh;
          }
          .container {
            height: 100%;
          }
          .text h4 {
            margin-right: 5px;
          }
          .text {
            display: flex;
            font-size: 30px;
            color: white;
          }
        `}
      </style>
    </section>
  );
}
