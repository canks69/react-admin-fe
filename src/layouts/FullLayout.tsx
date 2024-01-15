import {Outlet} from "react-router-dom";

export const FullLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Outlet />
    </div>
  )
}