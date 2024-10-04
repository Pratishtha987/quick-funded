// // import React from "react";
// import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
// import { BsBoxArrowUpRight } from "react-icons/bs";
// import "../Header/Header.css";

// export default function Header() {
//   const navigate = useNavigate();
//   return (
//     // <div>
//     <div className="flex gap-5 justify-between items-center px-7 mx-auto py-4 w-full max-w-[1440px] max-md:flex-wrap max-md:max-full">
//       <div>
//         <img src="../logo-quick.png" width="300" />
//       </div>

//       <div>
//         <nav
//           className="flex gap-5 justify-between self-stretch my-auto text-lg leading-5 text-neutral-900
//         max-md:flex-wrap"
//         >
//           <div>
//             <NavLink to={"/"}>Home</NavLink>
//           </div>
//           <div>
//             <NavLink to={"/blogs"}>Blogs</NavLink>
//           </div>
//           <div>
//             <NavLink to={"/affilate"}>Affilate</NavLink>
//           </div>
//           <div>
//             <NavLink to={"/faq"}>FAQ</NavLink>
//           </div>
//           <div>
//             <NavLink to={"/contactus"}>Contact Us</NavLink>
//           </div>
//         </nav>
//       </div>

//       <div>
//         <nav className="flex  gap-5 justify-center self-stretch leading-[100%]">
//           <div className="flex items-center text-lg">
//             <NavLink
//               to="/clientarea"
//               className="flex items-center space-x-2 hover:opacity-80  transition-opacity"
//             >
//               <button className=" hover:text-green-500">Client Area</button>
//               <BsBoxArrowUpRight className="w-5 h-5 text-green-500" />
//             </NavLink>
//           </div>

//           <div
//             className="justify-center px-8 py-3 text-base font-semibold text-white
//           bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] rounded-[20px] max-md:px-5"
//           >
//             <NavLink to={"/signup"}>
//               <button>Buy Challenge</button>
//             </NavLink>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { BsBoxArrowUpRight } from "react-icons/bs";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "../Header/Header.css";

// export default function Header() {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="px-7 py-4 mx-auto w-full max-w-[1440px]">
//       <div className="flex justify-between items-center">
//         <div>
//           <img src="../logo-quick.png" width="300" alt="Logo" />
//         </div>

//         <div className="hidden md:block">
//           <nav className="flex gap-5 text-lg leading-5 text-neutral-900">
//             <NavLink to="/">Home</NavLink>
//             <NavLink to="/blogs">Blogs</NavLink>
//             <NavLink to="/affilate">Affilate</NavLink>
//             <NavLink to="/faq">FAQ</NavLink>
//             <NavLink to="/contactus">Contact Us</NavLink>
//           </nav>
//         </div>

//         <div className="hidden md:flex gap-5 items-center">
//           <NavLink
//             to="/clientarea"
//             className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
//           >
//             <span className="text-lg hover:text-green-500">Client Area</span>
//             <BsBoxArrowUpRight className="w-5 h-5 text-green-500" />
//           </NavLink>

//           <NavLink
//             to="/signup"
//             className="px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#88B92F] to-[#109523] rounded-[20px]"
//           >
//             Buy Challenge
//           </NavLink>
//         </div>

//         <button className="md:hidden text-2xl" onClick={toggleMenu}>
//           {isMenuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {isMenuOpen && (
//         <div className="md:hidden mt-4">
//           <nav className="flex flex-col gap-4 text-lg">
//             <NavLink to="/" onClick={toggleMenu}>
//               Home
//             </NavLink>
//             <NavLink to="/blogs" onClick={toggleMenu}>
//               Blogs
//             </NavLink>
//             <NavLink to="/affilate" onClick={toggleMenu}>
//               Affilate
//             </NavLink>
//             <NavLink to="/faq" onClick={toggleMenu}>
//               FAQ
//             </NavLink>
//             <NavLink to="/contactus" onClick={toggleMenu}>
//               Contact Us
//             </NavLink>
//             <NavLink
//               to="/clientarea"
//               className="flex items-center space-x-2"
//               onClick={toggleMenu}
//             >
//               <span>Client Area</span>
//               <BsBoxArrowUpRight className="w-5 h-5 text-green-500" />
//             </NavLink>
//             <NavLink
//               to="/signup"
//               className="px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#88B92F] to-[#109523] rounded-[20px] text-center"
//               onClick={toggleMenu}
//             >
//               Buy Challenge
//             </NavLink>
//           </nav>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { BsBoxArrowUpRight } from "react-icons/bs";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "../Header/Header.css";

// export default function Header() {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="relative">
//       <div className="px-7 py-4 mx-auto w-full max-w-[1440px]">
//         <div className="flex justify-between items-center">
//           <div>
//             <img src="../logo-quick.png" width="300" alt="Logo" />
//           </div>

//           <div className="hidden md:block">
//             <nav className="flex gap-5 text-lg leading-5 text-neutral-900">
//               <NavLink to="/">Home</NavLink>
//               <NavLink to="/blogs">Blogs</NavLink>
//               <NavLink to="/affilate">Affilate</NavLink>
//               <NavLink to="/faq">FAQ</NavLink>
//               <NavLink to="/contactus">Contact Us</NavLink>
//             </nav>
//           </div>

//           <div className="hidden md:flex gap-5 items-center">
//             <NavLink
//               to="/clientarea"
//               className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
//             >
//               <span className="text-lg hover:text-green-500">Client Area</span>
//               <BsBoxArrowUpRight className="w-5 h-5 text-green-500" />
//             </NavLink>

//             <NavLink
//               to="/signup"
//               className="px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#88B92F] to-[#109523] rounded-[20px]"
//             >
//               Buy Challenge
//             </NavLink>
//           </div>

//           <button className="md:hidden text-2xl z-50" onClick={toggleMenu}>
//             {isMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {isMenuOpen && (
//         <div className="fixed inset-0 bg-white z-40 md:hidden">
//           <div className="flex flex-col h-full justify-center items-center">
//             <nav className="flex flex-col gap-6 text-xl text-center">
//               <NavLink to="/" onClick={toggleMenu}>
//                 Home
//               </NavLink>
//               <NavLink to="/blogs" onClick={toggleMenu}>
//                 Blogs
//               </NavLink>
//               <NavLink to="/affilate" onClick={toggleMenu}>
//                 Affilate
//               </NavLink>
//               <NavLink to="/faq" onClick={toggleMenu}>
//                 FAQ
//               </NavLink>
//               <NavLink to="/contactus" onClick={toggleMenu}>
//                 Contact Us
//               </NavLink>
//               <NavLink
//                 to="/clientarea"
//                 className="flex items-center justify-center space-x-2"
//                 onClick={toggleMenu}
//               >
//                 <span>Client Area</span>
//                 <BsBoxArrowUpRight className="w-5 h-5 text-green-500" />
//               </NavLink>
//               <NavLink
//                 to="/signup"
//                 className="px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#88B92F] to-[#109523] rounded-[20px]"
//                 onClick={toggleMenu}
//               >
//                 Buy Challenge
//               </NavLink>
//             </nav>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { BsBoxArrowUpRight } from "react-icons/bs";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "../Header/Header.css";

// export default function Header() {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="relative">
//       <div className="px-7 py-4 mx-auto w-full max-w-[1440px]">
//         <div className="flex justify-between items-center">
//           <div>
//             <img src="../logo-quick.png" width="300" alt="Logo" />
//           </div>

//           <div className="hidden md:block">
//             <nav className="flex gap-5 text-lg leading-5 text-neutral-900">
//               <NavLink to="/">Home</NavLink>
//               <NavLink to="/blogs">Blogs</NavLink>
//               <NavLink to="/affilate">Affiliate</NavLink>
//               <NavLink to="/faq">FAQ</NavLink>
//               <NavLink to="/contactus">Contact Us</NavLink>
//             </nav>
//           </div>

//           <div className="hidden md:flex gap-5 items-center">
//             <NavLink
//               to="/clientarea"
//               className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
//             >
//               <span className="text-lg hover:text-green-500">Client Area</span>
//               <BsBoxArrowUpRight className="w-5 h-5 text-green-500" />
//             </NavLink>

//             <NavLink
//               to="/signup"
//               className="px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#88B92F] to-[#109523] rounded-[20px]"
//             >
//               Buy Challenge
//             </NavLink>
//           </div>

//           <button className="md:hidden text-2xl z-50" onClick={toggleMenu}>
//             {isMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {isMenuOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-40 md:hidden">
//           <div className="flex flex-col h-full justify-center items-center">
//             <nav className="flex flex-col gap-6 text-xl text-center">
//               <NavLink
//                 to="/"
//                 className="text-white hover:text-green-400"
//                 onClick={toggleMenu}
//               >
//                 Home
//               </NavLink>
//               <NavLink
//                 to="/blogs"
//                 className="text-white hover:text-green-400"
//                 onClick={toggleMenu}
//               >
//                 Blogs
//               </NavLink>
//               <NavLink
//                 to="/affilate"
//                 className="text-white hover:text-green-400"
//                 onClick={toggleMenu}
//               >
//                 Affiliate
//               </NavLink>
//               <NavLink
//                 to="/faq"
//                 className="text-white hover:text-green-400"
//                 onClick={toggleMenu}
//               >
//                 FAQ
//               </NavLink>
//               <NavLink
//                 to="/contactus"
//                 className="text-white hover:text-green-400"
//                 onClick={toggleMenu}
//               >
//                 Contact Us
//               </NavLink>
//               <NavLink
//                 to="/clientarea"
//                 className="flex items-center justify-center space-x-2 text-white hover:text-green-400"
//                 onClick={toggleMenu}
//               >
//                 <span>Client Area</span>
//                 <BsBoxArrowUpRight className="w-5 h-5" />
//               </NavLink>
//               <NavLink
//                 to="/signup"
//                 className="px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#88B92F] to-[#109523] rounded-[20px] hover:opacity-90"
//                 onClick={toggleMenu}
//               >
//                 Buy Challenge
//               </NavLink>
//             </nav>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Header/Header.css";

export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative">
      <div className="px-7 py-4 mx-auto w-full max-w-[1440px]">
        <div className="flex justify-between items-center">
          <div>
            <img src="../logo-quick.png" width="300" alt="Logo" />
          </div>

          <div className="hidden md:block">
            <nav className="flex gap-5 text-lg leading-5 text-neutral-900">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/blogs">Blogs</NavLink>
              <NavLink to="/affilate">Affiliate</NavLink>
              <NavLink to="/faq">FAQ</NavLink>
              <NavLink to="/contactus">Contact Us</NavLink>
            </nav>
          </div>

          <div className="hidden md:flex gap-5 items-center">
            <NavLink
              to="/clientarea"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <span className="text-lg hover:text-green-500">Client Area</span>
              <BsBoxArrowUpRight className="w-5 h-5 text-green-500" />
            </NavLink>

            <NavLink
              to="/signup"
              className="px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#88B92F] to-[#109523] rounded-[20px]"
            >
              Buy Challenge
            </NavLink>
          </div>

          <button className="md:hidden text-2xl z-50" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden backdrop-blur-sm">
          <div className="flex flex-col h-full justify-center items-center">
            <nav className="flex flex-col gap-6 text-xl text-center">
              <NavLink
                to="/"
                className="text-neutral-900 font-semibold hover:text-green-500"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/blogs"
                className="text-neutral-900 font-semibold hover:text-green-500"
                onClick={toggleMenu}
              >
                Blogs
              </NavLink>
              <NavLink
                to="/affilate"
                className="text-neutral-900 font-semibold hover:text-green-500"
                onClick={toggleMenu}
              >
                Affiliate
              </NavLink>
              <NavLink
                to="/faq"
                className="text-neutral-900 font-semibold hover:text-green-500"
                onClick={toggleMenu}
              >
                FAQ
              </NavLink>
              <NavLink
                to="/contactus"
                className="text-neutral-900 font-semibold hover:text-green-500"
                onClick={toggleMenu}
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/clientarea"
                className="flex items-center justify-center space-x-2 text-neutral-900 font-semibold hover:text-green-500"
                onClick={toggleMenu}
              >
                <span>Client Area</span>
                <BsBoxArrowUpRight className="w-5 h-5" />
              </NavLink>
              <NavLink
                to="/signup"
                className="px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#88B92F] to-[#109523] rounded-[20px] hover:opacity-90"
                onClick={toggleMenu}
              >
                Buy Challenge
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
