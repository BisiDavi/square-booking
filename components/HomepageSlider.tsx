import Image from "next/image";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import slideBanners from "@/json/slider.json";

export default function HomepageSlider() {
  return (
    <>
      <div className="w-3/4">
        <Splide>
          {slideBanners.map((slideBanner) => (
            <SplideSlide key={slideBanner.img}>
              <Image
                src={slideBanner.img}
                alt={slideBanner.alt}
                layout="responsive"
                width={1200}
                height={600}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
}
