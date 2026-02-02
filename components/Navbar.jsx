"use client";
import { useEffect, useRef } from "react";

import Image from "next/image";
export default function Navbar() {
  const sideMenuRef = useRef();
  const navRef = useRef();
  const navLinkRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        navRef.current.classList.add(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20",
        );
        navLinkRef.current.classList.remove(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50",
          "dark:border",
          "dark:border-white/30",
          "dark:bg-transparent",
        );
      } else {
        navRef.current.classList.remove(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20",
        );
        navLinkRef.current.classList.add(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50",
          "dark:border",
          "dark:border-white/30",
          "dark:bg-transparent",
        );
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <img src="/assets/header-bg-color.png" alt="" className="w-full" />
      </div>

      <nav
        ref={navRef}
        className="w-full fixed px-5 z-[1000] lg:px-8 xl:px-[8%] py-4 flex items-center justify-between"
      >
        <a href="#top" className="text-2xl font-bold">
          <span className="font-ovo text-4xl">Rishik</span>
        </a>

        <ul
          ref={navLinkRef}
          className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo dark:border dark:border-white/30 dark:bg-transparent "
        >
          <li>
            <a
              className="hover:text-gray-500 dark:hover:text-gray-300 transition"
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-500 font-Ovo dark:hover:text-gray-300 transition"
              href="#about"
            >
              About me
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-500 dark:hover:text-gray-300 transition"
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-500 dark:hover:text-gray-300 transition"
              href="#work"
            >
              My Work
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/rishik-chowdary-b8b430299/"
            target="_blank"
            className="hidden lg:flex items-center gap-3 px-8 py-1.5 border border-gray-300 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full ml-4 font-Ovo dark:border-white/30"
          >
            Contact
            <Image
              src="/assets/arrow-icon.png"
              alt="Arrow Icon"
              width={12}
              height={12}
              className="w-3 dark:hidden"
            />
            <Image
              src="/assets/arrow-icon-dark.png"
              alt="Arrow Icon"
              width={12}
              height={12}
              className="w-3 hidden dark:block"
            />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src="/assets/menu-black.png"
              alt="Menu Icon"
              width={24}
              height={24}
              className="w-6 dark:hidden"
            />
            <Image
              src="/assets/menu-white.png"
              alt="Menu Icon"
              width={24}
              height={24}
              className="w-6 hidden dark:block"
            />
          </button>
        </div>
        {/* -- ----- mobile menu ------  -- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src="/assets/close-black.png"
              alt="Close Icon"
              width={20}
              height={20}
              className="w-5 cursor-pointer dark:hidden"
            />
            <Image
              src="/assets/close-white.png"
              alt="Close Icon"
              width={20}
              height={20}
              className="w-5 cursor-pointer hidden dark:block"
            />
          </div>

          <li>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu}>
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
