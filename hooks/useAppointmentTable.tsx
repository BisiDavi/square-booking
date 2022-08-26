/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "react-query";
import { useMemo } from "react";

import { listBookings } from "@/requests/getRequests";
import { formatDate, formatPeriod } from "@/lib/formatTime";

export default function useAppointmentTable() {
  const { data, status } = useQuery("listBooking", listBookings);

  const initialState: any = {
    pageIndex: 0,
    pageSize: 5,
  };

  const dataArray = useMemo(() => {
    if (status === "success") {
      const parsedData = JSON.parse(data?.data);
      return parsedData?.bookings;
    } else {
      return [];
    }
  }, [status]);

  const serviceVariationId = (booking: any) =>
    booking?.appointmentSegments &&
    booking?.appointmentSegments[0]?.serviceVariationId;

  const getAppointment = (appointment: any) =>
    appointment?.appointmentSegments && appointment?.appointmentSegments[0];

  const serviceDuration = (originalRow: any) => {
    const appointment = getAppointment(originalRow);
    return appointment?.durationMinutes
      ? `${appointment?.durationMinutes} mins`
      : appointment?.durationHours === 1
      ? `${appointment?.durationHours} hr`
      : `${appointment?.durationHours} hrs`;
  };

  const columns = useMemo(
    () => [
      { Header: "S/N", accessor: "sn" },
      {
        Header: "Date",
        id: "dateId",
        accessor: (originalRow: any) => formatDate(originalRow?.createdAt),
      },
      {
        Header: "Customer",
        id: "customerId",
        accessor: (originalRow: any) => originalRow?.customerId,
      },
      {
        Header: "Service",
        id: "serviceId",
        accessor: (originalRow: any) => serviceVariationId(originalRow),
      },
      {
        Header: "Duration",
        id: "durationId",
        accessor: (originalRow: any) => serviceDuration(originalRow),
      },
      {
        Header: "Period",
        id: "periodId",
        accessor: (originalRow: any) =>
          formatPeriod(
            originalRow?.startAt,
            originalRow?.appointmentSegments &&
              originalRow?.appointmentSegments[0]?.durationMinutes
          ),
      },
      {
        Header: "Team",
        id: "teamId",
        accessor: (originalRow: any) => {
          const appointment: any = getAppointment(originalRow);
          return appointment.teamMemberId;
        },
      },
      {
        Header: "Location",
        id: "locationId",
        accessor: (originalRow: any) => originalRow?.locationId,
      },
    ],
    []
  );

  return { dataArray, columns, status, initialState };
}
