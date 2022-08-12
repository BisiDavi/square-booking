import Button from "@/components/Button";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <div className="bg-blue-100">
      <div className="container flex items-center mx-auto justify-between">
        <Logo />
        <div className="button-group flex items-center">
          <Button
            text="Log in"
            className="text-black"
            type="button"
            onClick={() => null}
          />
          <Button
            text="Sign up"
            className="bg-red-500 border-r-500 m-4 text-white p-2 px-4"
            type="button"
            onClick={() => null}
          />
        </div>
      </div>
    </div>
  );
}
