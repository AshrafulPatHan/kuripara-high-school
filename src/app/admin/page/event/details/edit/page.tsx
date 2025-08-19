// app/admin/page/event/details/edit/page.tsx
import Image from "next/image";
// import Background from "@/assets/image/university-418219_1920.jpg";
import PrivateRoute from "@/components/admin/auth/PrivateRoute";
import EditEventForm from "@/components/admin/event/EditEventForm"; // client component

export default function EditEventData({ searchParams }: any) {
  const { id, Title, Description, Photo, Data, IdData } = searchParams;

  return (
    <PrivateRoute>
      <div
        className="w-[100vw] md:w-[100%] h-[99%] flex flex-col items-center justify-center bg-cover bg-center rounded-xl"
        style={{
          backgroundImage: `url("https://i.ibb.co.com/Ps6Q2k1p/benjamin-voros-ph-IFd-C6l-A4-E-unsplash.jpg")`,
        }}
      >
        <EditEventForm
          id={id}
          Title={Title}
          Description={Description}
          Photo={Photo}
          Data={Data}
          IdData={IdData}
        />
      </div>
    </PrivateRoute>
  );
}
