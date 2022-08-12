import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href="/" passHref>
        <a
          className={`border-2 border-white p-2 text-white hover:bg-gray-100 hover:text-black`}
        >
          <h4 className="font-bold">
            Book <span className="font-light -ml-1">Spree</span>
          </h4>
        </a>
      </Link>
    </>
  );
}
