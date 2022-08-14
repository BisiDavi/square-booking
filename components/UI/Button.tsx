interface Props {
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  text: string;
  icon?: JSX.Element;
}

export default function Button({
  className,
  onClick,
  type,
  text,
  icon,
}: Props) {
  const buttonType = type ? type : "button";
  return (
    <>
      <button className={className} onClick={onClick} type={buttonType}>
        {icon} {text}
      </button>
    </>
  );
}
