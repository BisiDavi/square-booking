import Image from "next/image";
import Logo from "@/components/logo";

export default function Footer() {
  return (
    <footer className="bg-gray-300 w-full">
      <Image
        alt="footer-image"
        src="/footer-gradient.png"
        height={200}
        width={1200}
        layout="responsive"
      />
      <div className="h-52 container flex mx-auto items-center justify-between">
        <Logo footer />
        <span className="text-white">All rights reserved</span>
      </div>
    </footer>
  );
}
