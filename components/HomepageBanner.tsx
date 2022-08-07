import Typewriter from "typewriter-effect";
import Image from "next/image";
import BannerTypewriter from "@/components/BannerTypewriter";

export default function HomepageBanner() {
  return (
    <section className="w-full relative bg-orange-50 py-10">
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
            <h4>Hire</h4>
            <Typewriter
              options={{
                strings: [
                  "Baber",
                  "Hairdresser",
                  "Yoga",
                  "Chiropractor",
                  "Makeup Artist",
                  "Masseur",
                  "Tattoo Expert",
                  "Song Writer",
                  "Cleaner",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="mt-3 text-xl text-gray-400">
            Discover the easiest way to schedule appointments with the #1 online
            booking system
          </p>
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
      <BannerTypewriter />
      <style jsx>
        {`
          .w-full {
            background-color: #4e44c4;
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
