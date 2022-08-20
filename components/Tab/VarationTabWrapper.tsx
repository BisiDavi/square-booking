import { PropsWithChildren } from "react";

export default function VarationTabWrapper({ children }: PropsWithChildren) {
  return (
    <div
      className="p-4 bg-white"
      id="profile"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      {children}
    </div>
  );
}
