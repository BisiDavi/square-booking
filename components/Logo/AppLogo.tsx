import Link from "next/link";

interface Props {
  className?: string;
  link?: string;
}

export default function AppLogo({ className, link }: Props) {
  const logoclassName = className ? className : "text-2xl ml-1";
  const logoLink = link ? link : "/";
  return (
    <Link href={logoLink}>
      <a
        className={`text-center items-center ${logoclassName} font-bold border-white bg-gray-800 px-3 py-2 text-white`}
      >
        Bookify
      </a>
    </Link>
  );
}
