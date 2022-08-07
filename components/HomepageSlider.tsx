import Image from "next/image";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import slideBanners from "@/json/slider.json";

export default function HomepageSlider() {
  return (
    <Splide>
      {slideBanners.map((slideBanner) => (
        <SplideSlide key={slideBanner}>
          <Image
            src={slideBanner}
            alt={slideBanner}
            layout="responsive"
            width={1000}
            height={400}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
}
