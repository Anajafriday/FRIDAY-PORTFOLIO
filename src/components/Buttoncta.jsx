import { Link } from "react-router-dom";

function Buttoncta({ link, children, className = "", target = "_blank" }) {
  return (
    <Link
      to={link}
      className={`bg-colorCta text-colorPrimary hover:bg-colorBrand px-6 py-2 md:px-4 lg:px-8 lg:py-2 md:py-3 text-base lg:text-base  ${className} animateBg`}
      target={target}
    >
      {children}
    </Link>
  );
}

export default Buttoncta;
