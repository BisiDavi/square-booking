import {
  listBookings,
  getCustomers,
  listServices,
} from "@/requests/getRequests";
import { searchTeam } from "@/requests/postRequests";

export default function reportCardQueryFunction(func: string) {
  switch (func) {
    case "listBookings":
      return listBookings();
    case "listCustomer":
      return getCustomers();
    case "listServices":
      return listServices();
    case "listStaff":
      return searchTeam({});
  }
}

export function parseReportCard(data: any, methodType: string) {
  return JSON.parse(data?.data)[methodType];
}
