import { Link } from "react-router";

function Header() {
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content text-4xl flex justify-between p-4">
        <Link to="/" className="text-2xl hover:underline rounded-3xl ">
          Homepage
        </Link>
        <Link to="/:gallery" className=" text-2xl hover:underline rounded-3xl">
          Gallery
        </Link>
      </div>
    </div>
  );
}

export default Header;
