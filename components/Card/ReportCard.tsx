/* eslint-disable @next/next/no-img-element */
interface Props {
  report: {
    count: number;
    text: string;
    icon: string;
  };
}

export default function ReportCard({ report }: Props) {
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
        <h3 className="font-bold">{report.count}</h3>
        <p className="text-sm text-gray-400 font-bold text-center">
          {report.text}
        </p>
      </div>
    </div>
  );
}
