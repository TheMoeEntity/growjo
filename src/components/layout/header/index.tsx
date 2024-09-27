import Image from "next/image";
import React from "react";
import logo from "../../../../public/image/growjo-logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex p-8 items-center justify-evenly">
      <div>
        <Image
          src={logo}
          alt="Growjo logo"
          className="object-fit w-full h-auto"
        />
      </div>
      <div>
        <input type="search" placeholder="Search Growjo.." className="px- pl-10 py-2 bg-transparent border rounded-md" />
      </div>
      <div className="flex items-center gap-8">
        <Link href="/about">Blog</Link>
        <Link href="/about">Data API</Link>
        <Link href="/about">Add Company</Link>
        <Link href="/about">About</Link>
        <Link href="/about">Contact us</Link>
      </div>
      <div className="flex items-center gap-8">
        <button className="border-[2px] border-black py-2 px-5 rounded-md text-black">Login</button>
        <button className="bg-[#FC8600] px-5 py-2 rounded-md text-white">Sign up for free</button>
      </div>
    </header>
  );
};

export default Header;
