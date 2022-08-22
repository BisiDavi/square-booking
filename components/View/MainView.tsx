import Image from "next/image";

export default function MainView() {
  return (
    <div className="main-view  py-4 px-4 flex items-center">
      <div className="container flex mx-auto flex-col lg:flex-row items-center justify-between">
        <div className="image-wrapper w-full my-4 lg:my-0 lg:w-2/5">
          <Image
            src="/services-rendered.webp"
            alt="services"
            layout="responsive"
            height={600}
            width={800}
          />
        </div>
        <div className="lg:w-1/2 lg:my-0 my-2 w-full">
          <h3 className="text-2xl lg:text-4xl text-blue-900 font-bold">
            We are Online Booking System
          </h3>
          <h3 className="text-lg lg:text-4xl text-blue-900 font-bold">
            for{" "}
            <span className="text-lg lg:text-4xl text-blue-600">
              all services based industries
            </span>
          </h3>
          <h6 className="text-lg lg:text-2xl text-gray-900 font-semibold">
            A platform for Service Provider and their Clients.{" "}
          </h6>
          <p className="text-lg lg:text-xl text-gray-800 font-light">
            Simply define your services and providers, display their
            availability, and you will have clients making bookings 24/7.
          </p>
        </div>
      </div>
    </div>
  );
}
