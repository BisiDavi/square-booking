import Link from "next/link";

interface Props {
  footer?: boolean;
}

export default function Logo({ footer }: Props) {
  const logoClassName = footer
    ? "text-white"
    : "hover:bg-gray-500 hover:text-white ";
  return (
    <>
      <Link href="/" passHref>
        <a className={`border-2 border-white p-2 ${logoClassName}`}>
          <h4 className="font-bold">
            Book <span className="italic font-light">SPREE</span>
          </h4>
        </a>
      </Link>
    </>
  );
}
