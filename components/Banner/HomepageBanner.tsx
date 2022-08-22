import Typewriter from "typewriter-effect";
import Image from "next/image";

import { useAppSelector } from "@/hooks/useRedux";
import BannerAnimation from "@/components/Banner/BannerAnimation";

export default function HomepageBanner() {
  const { serviceCategories } = useAppSelector(
    (state) => state.ServiceCategories
  );
  return (
    <section className="w-full py-5 pt-24">
      <div className="container py-5 flex-col lg:flex lg:flex-row mx-auto justify-center items-center relative">
        <div className="w-full lg:h-64 lg:w-1/2">
          <h1 className="font-bold text-3xl text-center lg:text-start lg:text-5xl text-gray-900">
            Let&#39;s make
            <br />
            Booking better
            <br />
            together ✌🏼
          </h1>
          <div className="text mt-2 text-center text-md font-bold">
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
          <p className="mt-3 text-md text-center lg:text-xl text-gray-400 word-break w-full lg:w-11/12">
            Discover the easiest way to schedule appointments with the #1 online
            booking system
          </p>
        </div>
        <div className="hidden lg:block lg:w-1/2">
          <Image
            src="/booking-doodle-banner.webp"
            alt="booking-banner"
            layout="responsive"
            height={600}
            width={1000}
          />
        </div>
        {/* <BannerAnimation /> */}
      </div>
      <style jsx>
        {`
          .w-full {
            background-color: var(--site-purple);
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
          @media (max-width: 500px) {
            .text {
              font-size: 20px;
              text-align: center;
              justify-content: center;
            }
          }
        `}
      </style>
    </section>
  );
}
