"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoSearch } from "react-icons/io5";

function NavBar() {
  return (
    <div className=" max-w-screen-xl mx-auto  border-b-2 py-2 flex justify-between items-center ">
      <div className="flex flex-row gap-4 items-center">
        <div>
          <Link href="/">
            <Image src={"/next.svg"} alt=" logo" width={227} height={98} />
          </Link>
        </div>
        <div> info </div>
        <div> info </div>
        <div> info </div>
        <div> | </div>
        <div> info </div>
      </div>
      <div className=" text-3xl text-gray-500">
        <IoSearch />
      </div>
    </div>
  );
}

export default NavBar;
