import {MenuLink} from "../components/link/MenuLink.tsx";

export const Sidebar = () => {
  return (
    <div className={`bg-gradient-to-r from-primary to-secondary h-screen fixed top-0 md:left-0 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl w-64 z-10 py-4 px-6 transition-all duration-300`}>
      <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
        <a
          href="/admin"
          className="mt-2 text-center w-full inline-block"
        >
          <div className="inline-flex items-center justify-center m-2">
            <span className="text-xl font-bold text-white uppercase tracking-wide">
              DASHBOARD
            </span>
          </div>
        </a>
        
        <div className="flex flex-col">
          <hr className="my-4 min-w-full text-zinc-300"/>
          <MenuLink />
        </div>
      </div>
    </div>
)
}