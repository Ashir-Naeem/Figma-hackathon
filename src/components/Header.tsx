import React from "react";
import {
  IoCartOutline,
  IoHeartOutline,
  IoSearch,
  IoPersonOutline,
} from "react-icons/io5";

import Link from "next/link";

import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export const Header = () => {
  return (
    <div className="bg-white">
      <header className="text-black">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <div className="hidden lg:flex gap-4 items-center">
            <Link
              target="_blank"
              href={"/"}
              className="header_top__icon_wrapper"
            >
              <BsFacebook className="text-xl hover:text-accent transition duration-200" />
            </Link>
            <Link
              target="_blank"
              href={"https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"}
              className="header_top__icon_wrapper"
            >
              <SiGmail className="text-xl hover:text-accent transition duration-200" />
            </Link>
          </div>

          <nav className="flex flex-col md:flex-row items-center md:items-end text-base justify-between gap-4 md:gap-9 ml-auto">
            <div className="hidden lg:block">
              <div className="container">
                <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
                  <Link className="navbar__link relative" href={"/"}>
                    Home
                  </Link>
                  <Link className="navbar__link relative" href="/shop">
                    Our Shop
                  </Link>
                  <Link className="navbar__link relative" href="/about">
                    About
                  </Link>
                  <Link className="navbar__link relative" href="/contact">
                    Contact Us
                  </Link>
                  <Link className="navbar__link relative" href="/blog">
                    BLOG
                  </Link>
                </div>
              </div>
            </div>
          </nav>




          <div className="flex items-center gap-3 ml-auto">
            <ul className="flex gap-4">
              <li>
                <Link href="/shop">
                  <IoSearch className="text-black text-xl" />
                </Link>
              </li>
              <li>
                <Link href="/favorites">
                  <IoHeartOutline className="text-black text-xl" size={24} />
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <IoCartOutline className="text-black text-xl" size={24} />
                </Link>
              </li>
              <li>
                <Link href="/account">
                  <IoPersonOutline className="text-black text-xl" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};
