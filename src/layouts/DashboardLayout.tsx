import {Outlet} from "react-router-dom";
import {Sidebar} from "./Sidebar.tsx";
import {ThemeSetting} from "./ThemeSetting.tsx";
import {UseThemes} from "../components/theme/UseThemes.tsx";

export const DashboardLayout = () => {
  return (
    <div className='text-light bg-background h-screen'>
      <UseThemes>
        <Sidebar />
        <div className='md:ml-64'>
          <Outlet />
        </div>
        <ThemeSetting />
      </UseThemes>
    </div>
  )
}