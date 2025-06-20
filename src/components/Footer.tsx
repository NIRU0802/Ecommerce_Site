// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMoneyBillWave,
  FaUndoAlt,
  FaShieldAlt,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";
import { SiGooglepay, SiPhonepe } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black dark:bg-white-800 dark:bg-gray-700 dark:text-white">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div>
          <Image src="/logo.png" alt="Logo" width={60} height={60} />
          <p className="mt-4 text-sm capitalize">
            Your go-to destination for stylish & affordable fashion.
          </p>
        </div>

        {/* Need Help */}
        <div>
          <h4 className="font-bold mb-3 uppercase text-sm">Need Help</h4>
          <ul className="space-y-2 text-sm capitalize">
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/track-order">Track Order</Link>
            </li>
            <li>
              <Link href="/returns">Returns & Refunds</Link>
            </li>
            <li>
              <Link href="/faqs">FAQs</Link>
            </li>
            <li>
              <Link href="/account">My Account</Link>
            </li>
          </ul>
          <div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <FaMoneyBillWave className="text-green-600" />
              <span>COD Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaUndoAlt className="text-blue-600" />
              <span>30 Days Easy Returns</span>
            </div>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold mb-3 uppercase text-sm">Company</h4>
          <ul className="space-y-2 text-sm capitalize">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
          </ul>
        </div>

        {/* More Info */}
        <div>
          <h4 className="font-bold mb-3 uppercase text-sm">More Info</h4>
          <ul className="space-y-2 text-sm capitalize">
            <li>
              <Link href="/terms">T&amp;C</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Follow & Payment Section */}
      <div className="py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700 dark:text-gray-300">
          {/* FOLLOW US */}
          <div className="flex flex-col items-center">
            <h4 className="font-bold mb-3 uppercase text-sm">Follow Us</h4>
            <div className="flex space-x-4 text-2xl">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-pink-600"
              >
                <FaInstagram />
              </a>
              <a href="#" aria-label="X" className="hover:text-black">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-blue-600">
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* SECURE PAYMENT */}
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2 mb-3">
              <FaShieldAlt className="text-yellow-600 text-lg" />
              <span className="font-semibold">100% Secure Payment</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-2xl text-gray-600 dark:text-gray-400">
              <FaCcVisa title="Visa" className="text-[#1A1F71] dark:bg-white" />
              <FaCcMastercard
                title="MasterCard"
                className="text-[#EB001B] dark:bg-white"
              />
              <FaCcPaypal className="text-[#003087] dark:bg-white" />
              <SiGooglepay
                title="Google Pay"
                className="text-[#4285F4] dark:bg-white"
              />
              <SiPhonepe
                title="PhonePe"
                className="text-[#5F259F] dark:bg-white text-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs text-black-600 dark:text-white-400 py-4 border-t border-black dark:border-e-black">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
