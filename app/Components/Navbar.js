"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FadeUp from "./FadeUp";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // current route

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    ["HOME", "/"],
    ["ABOUT US", "/about"],
    ["SERVICES", "/services"],
    ["PROJECTS", "/projects"],
    ["REVIEWS", "/reviews"],
    ["CONTACT US", "/contact"],
    ["GET A FREE QUOTE", "/getaquote"],
  ];

  return (
    <>
      <FadeUp>
        <div className="w-full h-2 bg-green-600 "></div>

        <nav className="bg-white sticky top-0 z-50 border-gray-200 shadow h-[120px] flex items-center justify-between px-10">
          {/* Logo */}
          <div className="flex items-center h-full">
            <Link href="/">
              <Image
                className="h-[150px] mt-5 w-[150px]"
                width={150}
                height={100}
                alt="Logo"
                src="/Logo.webp"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-[15px] font-semibold text-gray-700">
            {navLinks.map(([name, link]) => (
              <Link key={name} href={link}>
                <li className="hover:text-green-600 cursor-pointer transition">{name}</li>
              </Link>
            ))}
          </ul>

          {/* Hamburger & Mobile Menu */}
          <div className="flex items-center gap-6 md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Right Side Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="https://www.tiktok.com/" target="_blank" className="h-8 w-8 border hover:bg-green-500 cursor-pointer border-gray-400 rounded-md flex items-center justify-center hover:border-green-600 transition p-1">
                <Image src="/Tiktok.webp" alt="TikTok" width={20} height={20} className="object-contain" />
              </a>

              <a href="https://www.facebook.com/" target="_blank" className="h-8 w-8 cursor-pointer hover:bg-green-500 border border-gray-400 rounded-md flex items-center justify-center hover:border-green-600 transition p-1">
                <Image src="/Facebook.webp" alt="Facebook" width={20} height={20} className="object-contain" />
              </a>

              <a href="https://www.instagram.com/" target="_blank" className="h-8 w-8 border cursor-pointer border-gray-400 rounded-md flex items-center justify-center hover:bg-green-500 hover:border-green-600 transition p-1">
                <Image src="/Insta.webp" alt="Instagram" width={20} height={20} className="object-contain" />
              </a>
            </div>

            {/* Call Now Button */}
            <button className="bg-green-600 cursor-pointer text-white font-semibold px-5 py-2 rounded-md hover:bg-green-700 transition">
              <a href="tel:+19283283629">Call Now</a>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white w-full shadow-lg absolute top-[120px] left-0 z-40">
            <ul className="flex flex-col gap-6 px-5 py-6 text-gray-700 font-semibold">
              {navLinks.map(([name, link]) => (
                <Link key={name} href={link} onClick={() => setIsOpen(false)}>
                  <li
                    className={`cursor-pointer transition px-3 py-1 rounded-md ${
                      pathname === link ? "bg-green-600 text-white" : "hover:bg-green-100"
                    }`}
                  >
                    {name}
                  </li>
                </Link>
              ))}

              {/* Socials in mobile */}
              <div className="flex items-center gap-3 mt-4">
                <a href="https://www.tiktok.com/" target="_blank" className="h-8 w-8 border hover:bg-green-500 cursor-pointer border-gray-400 rounded-md flex items-center justify-center hover:border-green-600 transition p-1">
                  <Image src="/Tiktok.webp" alt="TikTok" width={20} height={20} className="object-contain" />
                </a>

                <a href="https://www.facebook.com/" target="_blank" className="h-8 w-8 cursor-pointer hover:bg-green-500 border border-gray-400 rounded-md flex items-center justify-center hover:border-green-600 transition p-1">
                  <Image src="/Facebook.webp" alt="Facebook" width={20} height={20} className="object-contain" />
                </a>

                <a href="https://www.instagram.com/" target="_blank" className="h-8 w-8 border cursor-pointer border-gray-400 rounded-md flex items-center justify-center hover:bg-green-500 hover:border-green-600 transition p-1">
                  <Image src="/Insta.webp" alt="Instagram" width={20} height={20} className="object-contain" />
                </a>
              </div>

              {/* Call Now Button */}
              <button className="bg-green-600 cursor-pointer text-white font-semibold px-5 py-2 rounded-md hover:bg-green-700 transition mt-4 w-full">
                <a href="tel:+19283283629">Call Now</a>
              </button>
            </ul>
          </div>
        )}
      </FadeUp>
    </>
  );
};

export default Navbar;
