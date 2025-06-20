"use client";
import { useGender } from "@/context/GenderContext"; // ✅ import

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Search,
  User,
  Heart,
  ShoppingCart,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const { gender, setGender } = useGender(); // ✅ use global gender

  const toggleDropdown = (section: string) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 py-4 max-w-8xl mx-auto">
        {/* Left: Hamburger + Toggle */}
        <div className="flex items-center gap-8">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Men/Women toggle (desktop only) */}
          <div className="hidden md:flex border border-gray-300 rounded-full overflow-hidden">
            <button
              onClick={() => setGender("men")}
              className={`px-4 py-1.5 text-lg ${
                gender === "men" ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              Men
            </button>
            <button
              onClick={() => setGender("women")}
              className={`px-4 py-1.5 text-lg ${
                gender === "women"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              Women
            </button>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="text-xl font-bold text-black">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-12 h-12"
            />
          </Link>
        </div>

        {/* Right: Search Bar + Icons */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center border border-gray-300 rounded-full px-4 py-1 w-80 focus-within:ring-2 focus-within:ring-black">
            <Search className="h-4 w-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-grow outline-none bg-transparent text-sm placeholder-gray-500"
            />
          </div>

          <User className="w-6 h-6 text-gray-700 cursor-pointer hidden md:inline" />
          <Heart className="w-6 h-6 text-gray-700 cursor-pointer" />
          <ShoppingCart className="w-6 h-6 text-gray-700 cursor-pointer" />
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 py-2">
        <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 w-full">
          <Search className="h-4 w-4 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow outline-none bg-transparent text-sm placeholder-gray-500"
          />
        </div>
      </div>

      {/* Mobile Men/Women Toggle */}
      <div className="md:hidden border-t border-gray-200 px-4 py-2 flex justify-center gap-4">
        <button
          onClick={() => setGender("men")}
          className={`px-4 py-1.5 rounded-full text-sm border ${
            gender === "men" ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          Men
        </button>
        <button
          onClick={() => setGender("women")}
          className={`px-4 py-1.5 rounded-full text-sm border ${
            gender === "women" ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          Women
        </button>
      </div>

      {/* Sidebar Hamburger Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-md transition-transform transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } w-100 z-50`}
      >
        <div className="p-4 flex justify-between items-center">
          <span className="text-lg font-extrabold">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-12 h-12"
            />
          </span>
          <button onClick={() => setMenuOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col divide-y divide-gray-200 text-black py-2">
          {/* Topwear */}
          <div>
            <button
              className="w-full flex justify-between items-center font-bold px-2 py-2"
              onClick={() => toggleDropdown("Topwear")}
            >
              Topwear{" "}
              {openDropdown === "Topwear" ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openDropdown === "Topwear" && (
              <div className="ml-8 mb-2 flex flex-col text-md">
                <Link href="#">T-Shirts</Link>
                <Link href="#">Shirts</Link>
              </div>
            )}
          </div>

          {/* Bottomwear */}
          <div>
            <button
              className="w-full flex justify-between items-center font-bold px-2 py-2"
              onClick={() => toggleDropdown("Bottomwear")}
            >
              Bottomwear{" "}
              {openDropdown === "Bottomwear" ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openDropdown === "Bottomwear" && (
              <div className="ml-10 mb-2 flex flex-col text-md">
                <Link href="#">Jeans</Link>
                <Link href="#">Pants</Link>
              </div>
            )}
          </div>

          {/* Footwear */}
          <div>
            <button
              className="w-full flex justify-between items-center font-bold px-2 py-2"
              onClick={() => toggleDropdown("Footwear")}
            >
              Footwear{" "}
              {openDropdown === "Footwear" ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openDropdown === "Footwear" && (
              <div className="ml-10 mb-2 flex flex-col text-md">
                <Link href="#">Sneakers</Link>
                <Link href="#">Slides</Link>
              </div>
            )}
          </div>

          {/* Track Order */}
          <Link href="/track-order" className="block font-bold px-2 py-2">
            Track My Order
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
