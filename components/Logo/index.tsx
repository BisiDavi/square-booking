import { useAppSelector } from "@/hooks/useRedux";
import Link from "next/link";

export default function Logo() {
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);
  return (
    <>
      <Link href="/" passHref>
        <a
          className={`border-2 border-white p-2 text-black hover:bg-gray-100 hover:text-black`}
        >
          <h4 className="font-bold">{storeProfile?.name}</h4>
        </a>
      </Link>
    </>
  );
}
