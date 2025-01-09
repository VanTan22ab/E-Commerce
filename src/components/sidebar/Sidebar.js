import React, { Children, createContext, useContext, useState } from "react";
import {
  CodeSandboxOutlined,
  MehOutlined,
  ArrowsAltOutlined,
} from "@ant-design/icons";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const SidebarContext = createContext();
export default function Sidebar({ children, activeIndex, onSetActiveIndex }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen w-fit">
      <nav className="h-full w-fit flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <div
            className={`flex justify-left items-center font-semibold text-lg overflow-hidden transision-all ${
              expanded ? "w-32" : "w-0"
            }`}
          >
            <AcUnitIcon className="mx-2 " fontSize="medium" />
            <p>JiraXS</p>
          </div>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center"
          >
            {expanded ? <MenuOpenIcon /> : <MenuIcon />},
          </button>
        </div>
        <SidebarContext.Provider
          value={{ expanded, activeIndex, onSetActiveIndex }}
        >
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
        <div className="border-t flex p-3 flex justify-center items-center">
          <AccountCircleOutlinedIcon className="rounded-md" fontSize="large"/>
          <div
            className={`flex justify-between items-center overflow-hidden transision-all ${
              expanded ? "w-full" : "w-0 flex justify-center items-center"
            }`}
          >
            <div className="leading-4 ml-2">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <ArrowsAltOutlined size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, index, alert }) {
  const { expanded, activeIndex, onSetActiveIndex } =
    useContext(SidebarContext);
  const isActive = index === activeIndex; // Kiểm tra xem mục có đang active không

  return (
    <li
      className={`group relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${
        isActive
          ? "bg-gradient-to-tr from-fcolor to-zcolor text-tcolor"
          : "hover:bg-zcolor text-gray-600"
      }`}
      onClick={() => onSetActiveIndex(index)} // Cập nhật trạng thái active
    >
      {icon}
      <span
        className={`overflow-hidden transition-all duration-300 ease ${
          expanded ? "w-52 ml-3 truncate" : "w-0 truncate"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-scolor ${
            expanded ? "" : "top-2"
          }`}
        ></div>
      )}
      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6
             bg-fcolor text-tcolor text-sm invisible
              opacity-20 -translate-x-3 transition-all truncate
              group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
