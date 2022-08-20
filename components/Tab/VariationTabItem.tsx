/* eslint-disable unused-imports/no-unused-vars */
interface Props {
  tab: string;
  id: string;
  className: string;
  tabHandler: (id: string) => void;
}

export default function VariationTabItem({
  tab,
  id,
  tabHandler,
  className,
}: Props) {
  return (
    <li className="mr-2" role="presentation">
      <button
        className={`inline-block p-4 rounded-t-lg text-lg border-b-2 ${className}`}
        id={id}
        data-tabs-target={`#${id}`}
        type="button"
        role="tab"
        aria-controls={id}
        aria-selected="true"
        onClick={() => tabHandler(id)}
      >
        {tab}
      </button>
    </li>
  );
}
