import Image from "next/image";

import AppLogo from "@/components/Logo/AppLogo";

export default function AppFooter() {
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
        <div className="container mb-8 flex mx-auto items-start justify-between">
          <AppLogo />

          <span className="text-white font-bold">
            © 2022, Powered by Square
          </span>
        </div>
      </footer>
    </>
  );
}
