import Link from "next/link";
import { useAppSelector } from "@/hooks/useRedux";

interface Props {
  className?: string;
}

export default function Logo({ className }: Props) {
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);
  const logoClassName = className ? className : "";
  return (
    <>
      <Link href="/" passHref>
        <a
          className={`border-2 border-white text-white p-2 ${logoClassName}  hover:bg-gray-100 hover:text-black`}
        >
          <h4 className="font-bold">{storeProfile?.name}</h4>
        </a>
      </Link>
    </>
  );
}
