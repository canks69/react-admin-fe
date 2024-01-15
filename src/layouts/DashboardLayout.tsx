import {Outlet} from "react-router-dom";
import {Sidebar} from "./Sidebar.tsx";

export const DashboardLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}