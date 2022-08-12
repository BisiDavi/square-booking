import Button from "@/components/Button";
import Logo from "@/components/Logo";
import useUI from "@/hooks/useUI";

export default function Header() {
  const { toggleModal } = useUI();
  return (
    <div className="bg-blue-100">
      <div className="container flex items-center mx-auto justify-between">
        <Logo />
        <div className="button-group flex items-center">
          <Button
            text="Log in"
            className="text-black"
            type="button"
            onClick={() => toggleModal("auth-modal")}
          />
          <Button
            text="Sign up"
            className="bg-red-500 border-r-500 m-4 text-white p-2 px-4"
            type="button"
            onClick={() => toggleModal("auth-modal")}
          />
        </div>
      </div>
    </div>
  );
}
