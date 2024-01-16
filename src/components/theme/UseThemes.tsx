import React from "react";
interface UseThemesProps {
  children: React.ReactNode;
}

export const UseThemes = ({children}: UseThemesProps) => {
  if(!localStorage.getItem("color")){
    localStorage.setItem("color", "blue");
  }
  
  if(!localStorage.getItem("theme")){
    document.body.classList.add("light");
  }
  
  React.useEffect(() => {
    document.documentElement.dataset.color = localStorage.getItem("color") || "blue";
    document.documentElement.dataset.themes = localStorage.getItem("theme") || "light";
  }, []);
  return <>{children}</>;
};