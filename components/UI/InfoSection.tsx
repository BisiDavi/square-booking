import Image from "next/image";

import infoGroup from "@/json/info.json";

export default function InfoSection() {
  return (
    <>
      {infoGroup.map((info, index) => {
        const order = index === 1 ? "order-2" : "";
        return (
          <section
            className="container px-4 lg:px-0 flex flex-col my-2 lg:my-0 lg:flex-row mx-auto my-2 items-center"
            key={info.image}
          >
            <div className={`text w-full lg:w-1/2 ${order}`}>
              <h1 className="text-2xl lg:text-3xl font-bold mb-2 lg:mb-4">
                {info.title}
              </h1>
              <p className="mb-3 text-lg lg:text-xl">{info.text}</p>
              {info?.text2 && (
                <p className="mb-3 text-lg lg:text-xl">{info.text2}</p>
              )}
            </div>
            <div
              className={`imagewrapper my-2 lg:my-0 lg:w-1/2 w-full  block order-1`}
            >
              <Image
                src={info.image}
                alt={info.title}
                height={500}
                width={600}
              />
            </div>
          </section>
        );
      })}
    </>
  );
}
