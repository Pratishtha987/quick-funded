import React from "react";
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import "../Header/Header.css";

export default function Header() {
  const navigate = useNavigate();
  return (
    // <div>
    <div className="flex gap-5 justify-between items-center px-5 w-full max-w-[1440px] max-md:flex-wrap max-md:max-full">
      <div>
        <img src="../logo-quick.png" width="300" />
      </div>

      <div>
        <nav
          className="flex gap-5 justify-between self-stretch my-auto text-lg leading-5 text-neutral-900 
        max-md:flex-wrap"
        >
          <div>
            <NavLink to={"/"}>Home</NavLink>
          </div>
          <div>
            <NavLink to={"/affilate"}>AffilatePage</NavLink>
          </div>
          <div>
            <NavLink to={"/faq"}>FAQ</NavLink>
          </div>
          <div>
            <NavLink to={"/contatcus"}>Contatcus</NavLink>
          </div>
        </nav>
      </div>

      <div>
        <nav className="flex gap-5 justify-center self-stretch leading-[100%]">
          <div className="my-auto text-lg text-neutral-900">
            <NavLink to={"/login"}>
              <button>Login</button>
            </NavLink>
          </div>

          <div
            className="justify-center px-11 py-6 text-base font-semibold text-white 
          bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] rounded-[120px] max-md:px-5"
          >
            <NavLink to={"/signup"}>
              <button> Signup</button>
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}
