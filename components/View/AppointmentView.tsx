import { useQuery } from "react-query";

import { listBookings } from "@/requests/getRequests";
import { bookingType } from "@/types/request-types";
import GetCustomer from "../Customer/GetCustomer";
import GetServiceCatalog from "../Services/GetService";
import GetTeammateName from "../Team/GetTeammateName";
import GetLocationName from "../Location/GetLocationName";
import { formatDate, formatPeriod } from "@/lib/formatTime";

export default function AppointmentView() {
  const { data, status } = useQuery("listBooking", listBookings);

  const parsedData = status === "success" ? JSON.parse(data?.data) : null;

  return (
    <div className="my-4">
      <h3 className="font-medium my-3 mt-6 text-2xl">Upcoming Appointments</h3>
      <table className="table w-full border">
        <thead>
          <tr className="font-medium text-xl h-12 bg-gray-200 ">
            <td>Date</td>
            <td>Customer</td>
            <td>Service</td>
            <td>Duration</td>
            <td>Period</td>
            <td>Team</td>
            <td>Location</td>
          </tr>
        </thead>
        {parsedData && (
          <tbody className="text-md">
            {parsedData.bookings.map((booking: bookingType) => {
              const serviceVariationId =
                booking?.appointmentSegments &&
                booking?.appointmentSegments[0]?.serviceVariationId;
              const appointment =
                booking?.appointmentSegments && booking?.appointmentSegments[0];
              const serviceDuration = appointment.durationMinutes
                ? `${appointment?.durationMinutes} mins`
                : appointment?.durationHours === 1
                ? `${appointment?.durationHours} hr`
                : `${appointment?.durationHours} hrs`;
              const team = appointment?.teamMemberId;
              return (
                <tr
                  key={booking.id}
                  className="border-b h-10 items-center hover:bg-gray-200"
                >
                  <td>{formatDate(booking?.createdAt)}</td>
                  <td>
                    <GetCustomer customerId={booking?.customerId} showName />
                  </td>
                  <td>
                    <GetServiceCatalog serviceId={serviceVariationId} />
                  </td>
                  <td>{serviceDuration}</td>
                  <td>
                    {" "}
                    {formatPeriod(
                      booking?.startAt,
                      appointment?.durationMinutes
                    )}
                  </td>
                  <td>{<GetTeammateName teamId={team} />} </td>
                  <td>
                    <GetLocationName locationId={booking?.locationId} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
}