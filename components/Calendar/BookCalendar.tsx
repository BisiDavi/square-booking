import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";

import "react-day-picker/dist/style.css";

export default function BookCalendar() {
  const [selected, setSelected] = useState<Date>();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = (
      <p className="font-bold text-green-500 text-md mt-4">
        {" "}
        {format(selected, "PP")} Selected.
      </p>
    );
  }
  const currentFullDate = new Date();
  const currentDate = currentFullDate.getDate();
  const currentMonth = currentFullDate.getMonth();
  const currentYear = currentFullDate.getFullYear();
  const calenderDate = currentDate - 1;

  const disabledDays = [
    {
      from: new Date(1978, 0, 1),
      to: new Date(currentYear, currentMonth, calenderDate),
    },
  ];
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
      disabled={disabledDays}
    />
  );
}
