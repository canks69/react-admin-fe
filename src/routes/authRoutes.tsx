import {RouteObject} from "react-router-dom";
import {AuthLayout} from "../layouts/AuthLayout.tsx";

export const AuthRoutes:RouteObject[] = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {path: "", element: <h1>Home Page</h1>},
      {path: "login", element: <h1>Login Page</h1>},
      {path: "register", element: <h1>Register Page</h1>}
    ]
  }
];