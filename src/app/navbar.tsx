"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <nav className="px-32 py-4 flex   justify-between content-center shadow fixed left-0 right-0 bg-white">
        <h1 className="justify-center text-2xl  ">
          <Link className="font-bold text-xl  text-black" href={"/"}>
            Course.
          </Link>
        </h1>
        <ul>
          <li className="justify-center text-sm flex gap-6 mx-6 p-2 ">
            <Link
              className={
                pathname === "/course"
                  ? "underline underline-offset-8 text-black"
                  : "text-black"
              }
              href={"course"}
            >
              Course
            </Link>
            <Link
              className={
                pathname === "/Resource"
                  ? "underline underline-offset-8 text-black"
                  : "text-black"
              }
              href={"Resource"}
            >
              Resource
            </Link>
            <Link
              className={
                pathname === "/Pricing"
                  ? "underline underline-offset-8 text-black"
                  : "text-black"
              }
              href={'#faq'}
            >
              FAQ
            </Link>
          </li>
        </ul>
        <div className="">
          <button className="px-3 py-1.5 cursor-pointer bg-white text-white rounded hover:bg-gray-200 border-1 border-gray-200 mr-2 transform duration-500 ">
            <Link className="text-black" href={"profil"}>
              Log in
            </Link>
          </button>
          <button className="px-3 py-1.5 cursor-pointer bg-black text-white rounded hover:bg-gray-900 ">
            <Link className="text-white" href={"profil"}>
              Get access
            </Link>
          </button>
        </div>
      </nav>
    </>
  );
}
