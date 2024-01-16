import {Navigate, RouteObject} from "react-router-dom";
import { FullLayout} from "../layouts/FullLayout";

export const AuthRoutes:RouteObject[] = [
  {
    path: "/auth",
    element: <FullLayout />,
    children: [
      {path: "", element: <Navigate to="/auth/login" />},
      {path: "login", element: <h1>Login Page</h1>},
      {path: "register", element: <h1>Register Page</h1>}
    ]
  }
];