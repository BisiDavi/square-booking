import Link from "next/link";

interface Props {
  className: string;
}

export default function AppLogo({ className }: Props) {
  const logoclassName = className ? className : "text-2xl";
  return (
    <Link href="/">
      <a>
        <h3
          className={`text-center items-center ${logoclassName} font-bold  ml-1 text-center border-white bg-gray-800 px-3 py-2 text-white`}
        >
          Bookify
        </h3>
      </a>
    </Link>
  );
}
