interface Props {
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  text: string;
  icon?: JSX.Element;
  disabled?:boolean
}

export default function Button({ className, onClick, type, text, icon, disabled }: Props) {
  const buttonType = type ? type : "button";
  return (
    <>
      <button
        className={className}
        onClick={onClick}
        type={buttonType}
        disabled={disabled}
      >
        {icon} {text}
      </button>
    </>
  );
}
