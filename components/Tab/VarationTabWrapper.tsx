import { PropsWithChildren } from "react";

export default function VarationTabWrapper({ children }: PropsWithChildren) {
  return (
    <div
      className="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
      id="profile"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      {children}
    </div>
  );
}
