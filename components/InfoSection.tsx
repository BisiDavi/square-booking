import Image from "next/image";

import infoGroup from "@/json/info.json";

export default function InfoSection() {
  return (
    <>
      {infoGroup.map((info, index) => {
        const order = index === 1 ? "order-2" : "";
        return (
          <section
            className="container flex mx-auto my-8 items-center"
            key={info.image}
          >
            <div className={`text w-1/2 ${order}`}>
              <h1 className="text-3xl font-bold mb-4">{info.title}</h1>
              <p className="mb-3 text-xl">{info.text}</p>
              {info?.text2 && <p className="mb-3 text-xl">{info.text2}</p>}
            </div>
            <div className={`imagewrapper w-1/2 block order-1`}>
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
