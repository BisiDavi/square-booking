import BookCalendar from "@/components/Calendar/BookCalendar";
import DefaultLayout from "@/layout/Default-layout";

export default function BookPage() {
  return (
    <DefaultLayout>
      <div className="content flex py-4 justify-between relative w-full">
        <div className="w-3/5">
          <BookCalendar />
        </div>
        <div className="w-1/3"></div>
      </div>
    </DefaultLayout>
  );
}
