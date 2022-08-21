import { useQuery } from "react-query";
import { getCategories } from "@/requests/getRequests";

interface Props {
  categoryId: string;
}

export default function GetCategory({ categoryId }: Props) {
  const { data, status } = useQuery(`getCategories`, getCategories);

  const parsedData =
    status === "success" ? JSON.parse(data?.data).objects : null;

  const filterCategory = parsedData?.filter(
    (categoryItem: { id: string }) => categoryItem.id === categoryId
  )[0];

  return (
    <div>
      {status === "error" ? (
        "error"
      ) : status === "loading" ? (
        "loading..."
      ) : (
        <>
          <span>{filterCategory?.categoryData?.name}</span>
        </>
      )}
    </div>
  );
}
