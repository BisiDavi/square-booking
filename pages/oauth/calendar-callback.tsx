import AppLogo from "@/components/Logo/AppLogo";
import DefaultLayout from "@/layout/Default-layout";
import { useRouter } from "next/router";

export default function CalendarCallbackPage() {
  const router = useRouter();
  console.log("router.query", router?.query);
  return (
    <DefaultLayout>
      <section className="calendar-callbackpage">
        <h3 className="text-center my-10 text-xl font-bold">
          Authorize <AppLogo /> to use your Google calendar, so as to notify you
          of your booking.{" "}
        </h3>
      </section>
    </DefaultLayout>
  );
}
