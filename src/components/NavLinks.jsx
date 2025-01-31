import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
const navs = [
  { page: "home", url: "/" },
  // { page: "about" },
  // { page: "service" },
  { page: "project" },
  // { page: "contact" },
];
function NavLinks({ className, handler }) {
  const ref = useRef();
  useEffect(() => {
    if (ref.current) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [ref]);
  return (
    <ul
      className={`flex gap-4 capitalize  mt-24 ${className} flex-col justify-center md:mt-1 items-center md:flex-row md:justify-center md:gap-4  xl:gap-12 `}
    >
      {navs.map((nav) => (
        <li key={nav.page}>
          <NavLink
            to={nav.url || `/${nav.page}`}
            className="animateBg navlink"
            onClick={handler}
            ref={ref}
          >
            {nav.page}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
