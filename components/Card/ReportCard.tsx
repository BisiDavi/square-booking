import { useQuery } from "react-query";
import reportCardQueryFunction, {
  parseReportCard,
} from "@/components/Card/reportCardQueryFunction";

/* eslint-disable @next/next/no-img-element */
interface Props {
  report: {
    count: number;
    text: string;
    icon: string;
    method: string;
    key: string;
  };
}

export default function ReportCard({ report }: Props) {
  const { data, status } = useQuery(report.method, () =>
    reportCardQueryFunction(report.method)
  );

  const parsedData =
    status === "success" ? parseReportCard(data, report.key) : null;

  console.log(`data-${report.method}`, parsedData);
  const count = parsedData ? parsedData.length : 0;

  return (
    <div className="rounded-lg shadow bg-white w-1/4 mr-3 p-4 py-6 hover:bg-gray-50 justify-center text-xl flex items-center">
      <img
        src={report.icon}
        alt={report.text}
        height={50}
        width={50}
        className="text-3xl mr-4"
      />
      <div className="text text-center flex flex-col justify-center">
        {parsedData && <h3 className="font-bold">{count}</h3>}
        <p className="text-sm text-gray-400 font-bold text-center">
          {report.text}
        </p>
      </div>
    </div>
  );
}
