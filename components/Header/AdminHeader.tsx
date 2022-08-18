import AppLogo from "@/components/Logo/AppLogo";
import Logo from "@/components/Logo";
import { useAppSelector } from "@/hooks/useRedux";
import UpdateTheme from "@/components/Theme/UpdateTheme";

export default function AdminHeader() {
  const { storeProfile } = useAppSelector((state) => state.StoreProfile);

  return (
    <div className="w-full shadow justify-between flex items-center">
      <AppLogo />
      <Logo />
      <div className="greetings">
        <h3>Welcome {storeProfile?.name}</h3>
        <UpdateTheme />
      </div>
    </div>
  );
}
