import {Icon} from "@iconify/react";
import {useEffect, useState} from "react";

export const ThemeSetting = () => {
  const [modalTheme, setModalTheme] = useState(false)
  const [color, setColor] = useState('blue')
  const [mode, setMode] = useState('light')
  const buttonThemeClick = () => {
    setModalTheme(!modalTheme)
  }
  
  const changeMode = (mode: string) => {
    document.documentElement.dataset.themes = mode
    localStorage.setItem('theme', mode)
    setMode(mode)
  }
  const changeTheme = (color: string) => {
    document.documentElement.dataset.color = color
    localStorage.setItem('color', color)
    setColor(color)
  }
  
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    const color = localStorage.getItem('color')
    if (theme) {
      changeMode(theme)
    }
    if (color) {
      changeTheme(color)
    }
  }, [])
  
  return (
    <>
      <div className="fixed bottom-0 right-0 z-10 mb-4 mr-4">
        <button
          onClick={buttonThemeClick}
          className="w-10 h-10 rounded-full bg-primary focus:outline-none"
        >
          <Icon icon={`bxs:paint-roll`} className="text-white w-full text-2xl"/>
        </button>
      </div>
      
       <>
        <div className={`fixed inset-0 z-10 flex justify-end transition duration-300 ease-in-out ${modalTheme ? '' : 'translate-x-full' } `}>
          <div
            onClick={buttonThemeClick}
            className={`flex-initial inset-0 w-full cursor-default focus:outline-none`}
          />
          <div className="bg-card rounded-lg w-96 opacity-100 shadow-md shadow-light/10">
            <div className="flex items-center justify-between px-4 py-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-light">Theme Setting</h2>
            </div>
            <div className="px-4 py-2">
              <p className="text-xl font-semibold text-light py-4 mt-10">Choose your mode</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <button
                    onClick={() => changeMode('light')}
                    className={`w-10 h-10 rounded-full ${mode === 'light' ? 'bg-primary' : '' } mr-3`}
                  >
                    <Icon icon={`eva:sun-fill`} className="w-full text-white my-2 text-2xl"/>
                  </button>
                  <button
                    onClick={() => changeMode('dark')}
                    className={`w-10 h-10 rounded-full ${mode === 'dark' ? 'bg-primary' : '' } mr-3`}
                  >
                    <Icon icon={`eva:moon-fill`} className="text-light w-full my-2 text-2xl"/>
                  </button>
                </div>
              </div>
              
              <p className="text-xl font-medium text-light py-4 mt-10">Choose your theme color</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <button
                    className="w-10 h-10 rounded-full bg-[#23B3F4] mr-3"
                    onClick={() => changeTheme('blue')}
                  >
                    {color === 'blue' && (
                      <Icon icon={`iconamoon:check-fill`} className="text-white w-full my-2 text-2xl"/>
                    )}
                  </button>
                  <button
                    onClick={() => changeTheme('red')}
                    className="w-10 h-10 rounded-full bg-[#EB5858] mr-3"
                  >
                    {color === 'red' && (
                      <Icon icon={`iconamoon:check-fill`} className="text-white w-full my-2 text-2xl"/>
                    )}
                  </button>
                  <button
                    onClick={() => changeTheme('green')}
                    className="w-10 h-10 rounded-full bg-[#1CA35E] mr-3"
                  >
                    {color === 'green' && (
                      <Icon icon={`iconamoon:check-fill`} className="text-white w-full my-2 text-2xl"/>
                    )}
                  </button>
                  <button
                    onClick={() => changeTheme('purple')}
                    className="w-10 h-10 rounded-full bg-[#A772CB] mr-3"
                  >
                    {color === 'purple' && (
                      <Icon icon={`iconamoon:check-fill`} className="text-white w-full my-2 text-2xl"/>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
       </>
    </>
  )
}