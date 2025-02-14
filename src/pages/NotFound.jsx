import React from "react";
import { NavLink } from "react-router-dom";
import Navlinks from "../components/NavLinks";

export default function NotFound() {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/notfound-page.jpg')" }}
    >
      <h1 className="text-white text-6xl font-extrabold pb-2">404</h1>
      <h2 className=" text-white text-4xl font-bold pb-2">
        Sorry this page's is not found 🤷🏻‍♂️
      </h2>
      <p className="text-white text-3xl pb-2">
        If there is any mistake please tell us
      </p>
      <button className=" bg-white rounded-lg text-black pt-1 pb-1 pl-1 pr-1 w-max ">
        <NavLink to={"/"}>Return to home page</NavLink>
      </button>
    </div>
  );
}
