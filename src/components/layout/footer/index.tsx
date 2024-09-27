import React from "react";
import bg1 from "../../../../public/image/BG 14.png";
import bg2 from "../../../../public/image/BG 3.png";
import logo from "../../../../public/image/growjo-logo.png";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/shared/Icon";

const Footer = () => {
  return (
    <footer className="bg-[#183C54] min-h-[362px] relative py-3">
      <div className="absolute top-0 right-0">
        <Image
          src={bg2}
          alt="Growjo background-image"
          className="object-fit h-auto"
        />
      </div>
      <div className="absolute bottom-0 left-0">
        <Image
          src={bg1}
          alt="Growjo background-image"
          className="object-fit h-auto"
        />
      </div>
      <div className="flex border-b-[1px] border-[#d9d9d936] text-white px-12 pt-20 pb-24 items-center justify-evenly">
        <div>
          <Image
            src={logo}
            alt="Growjo logo"
            className="object-fit  h-auto"
          />
        </div>
        <div className="flex items-center gap-8">
          <Link href="/about">Directory</Link>
          <Link href="/about">Best Sales Lead Database</Link>
          <Link href="/about">What is Zombie</Link>
        </div>
        <div className="flex items-center gap-8">
          <span className="bg-white flex items-center justify-center rounded-lg p-1">
            <Icon name="bxl-instagram" color="black" size="20px" />
          </span>
          <span className="bg-white flex items-center justify-center rounded-lg p-1">
            <Icon name="bxl-facebook" color="black" size="20px" />
          </span>
          <span className="bg-white flex items-center justify-center rounded-lg p-1">
            <Icon name="bxl-twitter" color="black" size="20px" />
          </span>
        </div>
      </div>
      <div className="flex py-10 gap-8 justify-center items-center">
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
        <span>Contact Us</span>
      </div>
      <div className="flex gap-8 justify-center items-center">
        <span>
          copyright {new Date().getFullYear()}
          <span className="text-[#FC8600]"> Growjo</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
