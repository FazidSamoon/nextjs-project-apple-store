import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header>
        <div className="relative cursor-pointer opacity-75 transition hover:opacity-100 ">

      <Image
        src="/assets/apple-logo.png"
        alt="apple logo"
        width={100}
        height={100}
        priority
        />
    </div>
    </header>
  );
};

export default Header;
