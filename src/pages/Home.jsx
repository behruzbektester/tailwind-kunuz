import React from "react";
import { NavLink } from "react-router-dom";
import NavLinks from "../components/NavLinks";

export default function Home() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <div className="flex items-center space-x-2">
          <img src="/kunuz-logo.png" alt="" width={92} />
        </div>

        <ul className="flex gap space-x-4 text-black font-extrabold justify-center gap-3 items-center">
          <li className="border-l-2 pl-3 font-extrabold">O‘zbekiston</li>
          <li className="border-l-2 pl-3">Jahon</li>
          <li className="border-l-2 pl-3">Iqtisodiyot</li>
          <li className="border-l-2 pl-3">Jamiyat</li>
          <li className="border-l-2 pl-3">Sport</li>
          <li className="border-l-2 pl-3">Fan-texnika</li>
          <li className="border-l-2 pl-3">Nuqtayi nazar</li>
          <li className="border-l-2 pl-3 border-r-2 pr-3">Audio</li>
        </ul>

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Click
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <button
          className="btn bg-gray-100 rounded-md pb-1 pt-1 pl-1 pr-1"
          width={42}
        >
          <img src="/search.png" alt="" width={24} />
        </button>
      </div>

      <div className="container mx-auto py-2 px-4">
        <ul className="flex space-x-6 text-gray-600 text-base justify-between list-disc">
          <NavLink to={"/trump"}>
            <li className="hover">Tramp Oq uyga qaytdi</li>
          </NavLink>
          <NavLink to={"/tinchlik"}>
            <li className="hover">G‘azoda tinchlik sulhi</li>
          </NavLink>
          <NavLink to={"/koreya"}>
            <li className="hover">Koreyada siyosiy mojaro</li>
          </NavLink>
          <NavLink to={"/ru"}>
            <li className="hover">Rossiya-Ukraina urushi</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
