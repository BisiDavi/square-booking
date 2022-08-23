import AppLogo from "@/components/Logo/AppLogo";
import Logo from "@/components/Logo";
import UpdateTheme from "@/components/Theme/UpdateTheme";
import { useAppSelector } from "@/hooks/useRedux";

export default function AdminHeader() {
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);

  return (
    <div className="w-full z-40 fixed bg-white max-h-20 shadow justify-between py-4 px-8 flex items-center">
      <AppLogo className="text-2xl" link="/admin" />
      <Logo className="bg-gray-900" />
      <div className="greetings flex items-center">
        {status === "success" && (
          <h3 className="font-bold text-xl">
            Welcome 👋 ,{storeProfile?.name}
          </h3>
        )}
        <UpdateTheme />
      </div>
    </div>
  );
}
