import { BsRecordCircleFill } from "react-icons/bs";

interface Props {
  report: {
    count: number;
    text: string;
  };
}

export default function ReportCard({ report }: Props) {
  return (
    <div className="rounded-lg shadow bg-white w-1/4 mr-3 p-4 text-xl flex items-center">
      <BsRecordCircleFill className="text-3xl mr-4" />
      <div className="text text-center flex flex-col justify-center">
        <h3>{report.count}</h3>
        <p className="text-sm text-gray-500 font-bold text-center">
          {report.text}
        </p>
      </div>
    </div>
  );
}
