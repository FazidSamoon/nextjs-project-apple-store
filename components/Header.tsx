import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { useSession, signIn, signOut } from "next-auth/client";
import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between bg-[#E7ECEE] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative cursor-pointer opacity-75 transition hover:opacity-100">
            <Image
              src="/assets/apple-logo.png"
              alt="apple logo"
              width={70}
              height={70}
              priority
            />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="cursor-pointer opacity-75 transition hover:opacity-100">
          Product
        </a>
        <a className="cursor-pointer opacity-75 transition hover:opacity-100">
          Explore
        </a>
        <a className="cursor-pointer opacity-75 transition hover:opacity-100">
          Support
        </a>
        <a className="cursor-pointer opacity-75 transition hover:opacity-100">
          Business
        </a>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <SearchIcon className="h-6 w-6 cursor-pointer opacity-75 transition hover:opacity-100" />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
              6
            </span>

            <ShoppingBagIcon className="h-6 w-6 cursor-pointer opacity-75 transition hover:opacity-100" />
          </div>
        </Link>

        <UserIcon
          className="h-6 w-6 cursor-pointer opacity-75 transition hover:opacity-100"
          onClick={() => {}}
        />
      </div>
    </header>
  );
};

export default Header;
