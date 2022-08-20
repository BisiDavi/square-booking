// import { listBookings } from "@/requests/getRequests";
// import { useQuery } from "react-query";

export default function AppointmentView() {
//   const { data, status } = useQuery("listBooking", listBookings);

//   console.log("data", data);

  return (
    <div>
      <h3>Upcomming Appointments</h3>
      <table className="table">
        <thead>
          <tr>
            <td>Date</td>
            <td>Customer</td>
            <td>Service</td>
            <td>Team</td>
            <td>Location</td>
            <td>Duration</td>
            <td>Period</td>
          </tr>
        </thead>
        <tbody>
            <tr></tr>
        </tbody>
      </table>
    </div>
  );
}
