import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="px-32 py-4 flex   justify-between content-center shadow fixed left-0 right-0 bg-white">
        <h1 className="justify-center text-2xl  ">
          <Link className="font-bold text-xl  text-black" href={"/"}>
            Course.
          </Link>
        </h1>
        <ul>
          <li className="justify-center   text-sm flex gap-6 mx-6 p-2 ">
            <Link className="text-black " href={"course"}>
              Course
            </Link>
            <Link className="text-black " href={"Resource"}>
              Resource
            </Link>
            <Link className="text-black " href={"Pricing"}>
              Pricing
            </Link>
          </li>
        </ul>
        <div className="">
          <button className="px-3 py-1.5 bg-white text-white rounded hover:bg-gray-200 border-1 border-gray-200 mr-2 transform duration-500 ">
            <Link className="text-black" href={"profil"}>
              Log in
            </Link>
          </button>
          <button className="px-3 py-1.5 bg-black text-white rounded hover:bg-gray-900 ">
            <Link className="text-white" href={"profil"}>
              Get access
            </Link>
          </button>
        </div>
      </nav>
    </>
  );
}
