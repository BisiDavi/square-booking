import { useQuery } from "react-query";

import AdminLayoutPage from "@/layout/Admin-layout";
import { listCustomerType } from "@/types/request-types";
import { getCustomers } from "@/requests/getRequests";
import { formatDate } from "@/lib/formatTime";

export default function CustomersPage() {
  const { data, status } = useQuery("getCustomers", () => getCustomers());

  const parsedData = status === "success" ? JSON.parse(data?.data) : null;

  return (
    <AdminLayoutPage>
      <section className="customers bg-white h-screen my-4 rounded-md">
        <table className="border mt-4 w-full">
          <thead className="bg-gray-100 h-14">
            <tr>
              <th>Name</th>
              <th>Email Address</th>
              <th>First Booking</th>
              <th>Country</th>
            </tr>
          </thead>
          {status === "error"
            ? "unable to fetch team"
            : status === "loading"
            ? "loading..."
            : parsedData && (
                <tbody>
                  {parsedData.customers.map((customer: listCustomerType) => (
                    <tr
                      key={customer.id}
                      className="my-4 h-14 border border-y text-center"
                    >
                      <td>
                        <span className="mx-1">{customer?.givenName}</span>
                        <span className="mx-1">{customer?.familyName}</span>
                      </td>
                      <td>{customer.emailAddress}</td>
                      <td>{formatDate(customer.createdAt)}</td>
                      <td>{customer.address.country}</td>
                    </tr>
                  ))}
                </tbody>
              )}
        </table>
      </section>
    </AdminLayoutPage>
  );
}
