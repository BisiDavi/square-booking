import { useAppSelector } from "@/hooks/useRedux";
import CreateServiceView from "@/components/View/CreateServiceView";
import { ViewStateType } from "@/types/redux-types";
import CreateServiceForm from "../Form/CreateServiceForm";

function displayServiceView(view: ViewStateType["service"]) {
  switch (view) {
    case "create-service":
      return <CreateServiceView />;
    case "create-service-form":
      return <CreateServiceForm />;
  }
}

export default function AdminServiceView() {
  const { service } = useAppSelector((state) => state.View);
  return <>{displayServiceView(service)}</>;
}
