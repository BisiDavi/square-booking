import BookCalendar from "@/components/Calendar/BookCalendar";
import DefaultLayout from "@/layout/Default-layout";

export default function BookPage() {
  return (
    <DefaultLayout>
      <div className="content container flex items-center mx-auto py-4">
        <div className="w-3/5">
          <BookCalendar />
        </div>
        <div className="w-1/3 bg-gray-200 h-screen"></div>
      </div>
    </DefaultLayout>
  );
}
