/* eslint-disable @next/next/no-img-element */
import AdminLayoutPage from "@/layout/Admin-layout";
import UploadImage from "@/components/Images/UploadImage";
import ImageView from "@/components/Images/ImageView";

export default function MediaLibraryPage() {
  return (
    <AdminLayoutPage>
      <section className="container">
        <UploadImage />
        <ImageView />
      </section>
    </AdminLayoutPage>
  );
}
