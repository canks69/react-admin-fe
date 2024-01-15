import {RouteObject} from "react-router-dom";

export const AdminRoutes:RouteObject[] = [
  {
    path: "/admin",
    element: <h1>Admin Layout</h1>,
    children: [
      {path: "", element: <h1>Home Page</h1>},
      {path: "dashboard", element: <h1>Dashboard Page</h1>},
      {path: "users", element: <h1>Users Page</h1>},
      {path: "settings", element: <h1>Settings Page</h1>}
    ]
  }
];