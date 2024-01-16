import {Outlet} from "react-router-dom";

export const FullLayout = () => {
  return (
    <div className="flex flex-col justify-center py-5 items-center">
      <Outlet />
    </div>
  )
}