/* eslint-disable unused-imports/no-unused-vars */
interface Props {
  tab: string;
  id: string;
  tabHandler: (id: string) => void;
}

export default function VariationTabItem({ tab, id, tabHandler }: Props) {
  return (
    <li className="mr-2" role="presentation">
      <button
        className="inline-block p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
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
