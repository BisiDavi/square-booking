import { retrieveCustomer } from "@/requests/postRequests";
import { useQuery } from "react-query";

interface Props {
  customerId: string;
  showName?: boolean;
}

export default function GetCustomer({ customerId, showName }: Props) {
  const { data, status } = useQuery(`retrieveCustomer-${customerId}`, () =>
    retrieveCustomer(customerId)
  );
  const parsedData =
    status === "success" ? JSON.parse(data?.data)?.customer : null;
  return (
    <div>
      {status === "error" ? (
        "unable to fetch customer"
      ) : status === "loading" ? (
        "loading..."
      ) : (
        <>
          {showName && (
            <div className="name flex items-center">
              <span className="mx-1">{parsedData?.familyName}</span>
              <span className="mx-1">{parsedData?.givenName}</span>
            </div>
          )}
        </>
      )}
    </div>
  );
}
