import Logo from "@/components/logo";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="h-52 container flex mx-auto items-center justify-between">
        <Logo footer />
        <span className="text-white">All rights reserved</span>
      </div>
    </footer>
  );
}
