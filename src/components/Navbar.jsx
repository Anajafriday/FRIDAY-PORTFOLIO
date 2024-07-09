import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Navbar() {
  const [openNav, setOpenNav] = useState("-translate-x-full");
  const isNavOpen = openNav !== "";
  function hideNav() {
    setOpenNav("-translate-x-full");
  }
  return (
    <header className=" bg-colorPrimaryLight w-full py-4 sticky top-0 z-50">
      <nav className="flex justify-between  items-center  md:justify-around ">
        <Logo />
        <div
          className={`fixed transform ${openNav} transition-transform duration-500 md:-translate-x-0 md:static md:bg-inherit inset-0 w-4/5 md:w-full  bg-colorPrimary `}
        >
          <NavLinks handler={hideNav} />
        </div>
        <span className="md:hidden flex self-end -mt-4 mr-4">
          {!isNavOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 256 256"
              onClick={hideNav}
            >
              <path
                fill="currentColor"
                d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              onClick={() => setOpenNav("")}
            >
              <path
                fill="currentColor"
                d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"
              />
            </svg>
          )}
        </span>
      </nav>
    </header>
  );
}

export default Navbar;
