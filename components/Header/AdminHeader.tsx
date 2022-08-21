import AppLogo from "@/components/Logo/AppLogo";
import Logo from "@/components/Logo";
import { useAppSelector } from "@/hooks/useRedux";
import UpdateTheme from "@/components/Theme/UpdateTheme";

export default function AdminHeader() {
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);

  console.log("storeProfile", storeProfile);

  return (
    <div className="w-full z-40 fixed bg-white max-h-20 shadow justify-between py-4 px-8 flex items-center">
      <AppLogo className="text-2xl" link="/admin" />
      <Logo />
      <div className="greetings flex items-center">
        <h3>Welcome {storeProfile?.name}</h3>
        <UpdateTheme />
      </div>
    </div>
  );
}
