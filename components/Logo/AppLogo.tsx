import Link from "next/link";

export default function AppLogo() {
  return (
    <Link href="/">
      <a>
        <h3 className="text-center items-center text-2xl font-bold mb-24">
          <span className="font-bold ml-1 text-center border-white bg-gray-800 text-4xl px-3 py-2 text-white">
            Bookify
          </span>
        </h3>
      </a>
    </Link>
  );
}
