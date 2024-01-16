import {Navigate, RouteObject} from "react-router-dom";
import {DashboardPage} from "../pages/dashboard/DashboardPage.tsx";
import {DashboardLayout} from "../layouts/DashboardLayout.tsx";
import {JSX} from "react";
import {FullLayout} from "../layouts/FullLayout.tsx";

export interface adminMenuProps {
  label?: string;
  path: string;
  icon?: string;
  element?: JSX.Element;
  items?: adminMenuProps[];
}

export const adminMenu = [
  {
    path: "/admin",
    element: <DashboardLayout/>,
    items: [
      {
        path: '',
        element: <Navigate to='/admin/dashboard' replace={true} />,
      },
      {
        label: 'Dashboard',
        path: 'dashboard',
        element: <DashboardPage />,
        icon: 'solar:home-linear',
      },
      {
        label: 'Users',
        path: 'users',
        element: <h1 className='flex justify-center items-center'>Users</h1>,
        icon: 'basil:user-outline',
      },
      {
        label: 'Settings',
        path: 'settings',
        icon: 'bx:bxs-cog',
        element: <FullLayout />,
        items: [
          {
            label: 'Profile',
            element: <h1>Profile</h1>,
            path: 'profile'
          },
          {
            label: 'Security',
            element: <h1>Security</h1>,
            path: 'security'
          },
          {
            label: 'About',
            element: <FullLayout />,
            path: 'about',
            items: [
              {
                label: 'Company',
                element: <h1>Company</h1>,
                path: 'company'
              },
              {
                label: 'Team',
                element: <h1>Team</h1>,
                path: 'team'
              },
              {
                label: 'Contact',
                element: <h1>Contact</h1>,
                path: 'contact'
              }
            ]
          }
        ]
      },
    ]
  }
];

const genarateRoutes = (adminMenu: adminMenuProps[]) => {
  const routes: RouteObject[] = [];
  adminMenu.forEach((item) => {
    routes.push({
      path: item.path,
      element: item.element,
      children: item.items ? genarateRoutes(item.items) : []
    });
  });
  return routes;
}
export const AdminRoutes:RouteObject[] = genarateRoutes(adminMenu);