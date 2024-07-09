import { Link } from "react-router-dom";

function Logo({ className }) {
  return (
    <span className={`w-16 ml-4 md:w-24 lg:ml-52 md:ml-16 `}>
      <Link
        to="/"
        className={`w-24 ${className} md:w-96  h-12 rounded-full flex  items-center`}
      >
        <img
          src="/Friday (1).png"
          alt="logo"
          className=" rounded-full h-full object-contain"
        />
        <h3 className="text-xl font-bold capitalize">friday</h3>
      </Link>
    </span>
  );
}

export default Logo;
