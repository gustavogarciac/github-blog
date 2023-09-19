import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="min-h-screen bg-base-background">
      <Header />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
