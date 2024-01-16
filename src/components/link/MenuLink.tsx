import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from "@iconify/react";
import {adminMenu, adminMenuProps} from "../../routes/adminRoutes.tsx";

interface SidebarItemProps {
  item: adminMenuProps;
  activeMenu: string;
  mainRoute: string;
  parentPath?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, activeMenu, parentPath = '', mainRoute}) => {
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const fullPath = `${parentPath}/${item.path}`.replace(/\/+/g, '/');
  // console.log(fullPath, {mainRoute})
  // Check if the current item is active
  const isActive =location.pathname.startsWith(`${mainRoute}${fullPath}`);
  
  useEffect(() => {
    if (isActive) {
      setDropdownOpen(true);
    }
  }, [isActive]);
  
  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  
  return (
    <li className="rounded-lg mb-2">
      {item.items ? (
        <a
          href={undefined}
          onClick={handleDropdownToggle}
          className={`flex items-center gap-4 text-sm text-white font-medium px-4 py-2 rounded-lg ${isActive ? 'bg-accent text-primary' : ''} hover:bg-accent hover:text-secondary`}
        >
          <Icon icon={item.icon || 'mdi:circle-outline'} className="text-white text-lg" />
          {item.label}
          
          <Icon
            icon={isDropdownOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'}
            className={`ml-auto text-white text-lg transition-transform duration-300 transform ${isDropdownOpen ? 'rotate-180' : ''}`}
          />
        </a>
      ) :
        item.label && (
            <Link
              to={`${mainRoute}${fullPath}`}
              onClick={() => setDropdownOpen(false)} // Close dropdown when clicking on a link
              className={`flex items-center gap-4 text-sm text-white font-medium px-4 py-2 rounded-lg ${isActive ? 'bg-accent text-primary' : ''} hover:bg-accent hover:text-secondary`}
            >
              <Icon icon={item.icon || 'mdi:circle-outline'} className="text-white text-lg" />
              {item.label}
            </Link>
        )
      }
      
      
      {item.items && (
        <ul className={`flex-col min-w-full flex list-none pl-4 mt-2 ${isDropdownOpen ? 'block' : 'hidden'}`}>
          {item.items.map(subItem => (
            <SidebarItem key={subItem.path} item={subItem} activeMenu={activeMenu} parentPath={fullPath} mainRoute={mainRoute}/>
          ))}
        </ul>
      )}
    </li>
  );
};

export const MenuLink: React.FC = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  
  useEffect(() => {
    // Update the active menu state based on the current location
    setActiveMenu(location.pathname);
  }, [location.pathname]);
  
  return (
    <ul className="flex-col min-w-full flex list-none">
      {adminMenu[0].items.map(item => (
        <SidebarItem key={item.path} item={item} activeMenu={activeMenu || ''} mainRoute={adminMenu[0].path} />
      ))}
    </ul>
  );
};
