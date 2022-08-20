interface Props {
  label: string;
  className?: string;
}

export default function Checkbox({ label, className }: Props) {
  return (
    <div
      className={`flex items-center p-4 hover:bg-gray-100 w-full ${className}`}
    >
      <input type="checkbox" className="mr-4" /> {label}
    </div>
  );
}
