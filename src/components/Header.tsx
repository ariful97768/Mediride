"use client";
import React, { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isWhoWeServeOpen, setIsWhoWeServeOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navy hover:text-teal focus:outline-none hidden sm:block lg:hidden"
            >
              {isMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </div>
            <div className="shrink-0 flex items-center">
              <Link href="#" className="flex flex-col">
                <span className="text-2xl font-bold text-navy tracking-tight">
                  MEDIRIDE
                </span>
                <span className="text-xs text-navy uppercase tracking-widest hidden sm:block">
                  Care in Every Mile
                </span>
              </Link>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-5 xl:space-x-8 items-center">
            <div className="relative group cursor-pointer">
              <span className="text-dark-blue-gray hover:text-navy font-medium flex items-center">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </span>
              <div className="absolute left-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 hidden group-hover:block">
                <Link
                  href="#service-1"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Service 1
                </Link>
                <Link
                  href="#service-2"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Service 2
                </Link>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <span className="text-dark-blue-gray hover:text-navy font-medium flex items-center">
                Who We Serve <ChevronDown className="ml-1 w-4 h-4" />
              </span>
              <div className="absolute left-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 hidden group-hover:block">
                <Link
                  href="#service-1"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Service 1
                </Link>
                <Link
                  href="#service-2"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Service 2
                </Link>
              </div>
            </div>
            <Link
              href="#service-area"
              className="text-dark-blue-gray hover:text-navy font-medium"
            >
              Service Areas
            </Link>
            <Link
              href="#about"
              className="text-dark-blue-gray hover:text-navy font-medium"
            >
              About
            </Link>
            <Link
              href="#blog"
              className="text-dark-blue-gray hover:text-navy font-medium"
            >
              Blog
            </Link>
          </nav>

          {/* Contact & CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            <Link
              href="tel:5551234567"
              className="flex items-center text-navy font-bold text-lg hover:text-teal transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              (555) 123-4567
            </Link>
            <Link
              href="#book"
              className="bg-teal text-white px-6 py-2.5 rounded-md font-semibold hover:bg-opacity-90 transition-all shadow-sm"
            >
              BOOK RIDE
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <Link href="tel:5551234567" className="mr-4 sm:hidden text-navy">
              <Phone className="w-6 h-6" />
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navy hover:text-teal focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-100 pb-6">
          <div className="px-4 pt-4 pb-4 space-y-3 flex flex-col">
            <div className="cursor-pointer">
              <div
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="px-3 py-2 text-base font-medium text-dark-blue-gray flex items-center gap-3 hover:text-navy hover:bg-light-gray rounded-md"
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </div>
              <div
                className={
                  isServicesOpen
                    ? "bg-light-gray border border-gray-200 rounded-md py-2"
                    : "hidden"
                }
              >
                <Link
                  href="#service-1"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Service 1
                </Link>
                <Link
                  href="#service-2"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Service 2
                </Link>
              </div>
            </div>
            <div className="cursor-pointer">
              <div
                onClick={() => setIsWhoWeServeOpen(!isWhoWeServeOpen)}
                className="px-3 py-2 text-base font-medium text-dark-blue-gray flex items-center gap-3 hover:text-navy hover:bg-light-gray rounded-md"
              >
                Who We Serve <ChevronDown className="ml-1 w-4 h-4" />
              </div>
              <div
                className={
                  isWhoWeServeOpen
                    ? "bg-light-gray border border-gray-200 rounded-md py-2"
                    : "hidden"
                }
              >
                <Link
                  href="#service-1"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Service 1
                </Link>
                <Link
                  href="#service-2"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Service 2
                </Link>
              </div>
            </div>
            <Link
              href="#service-areas"
              className="block px-3 py-2 text-base font-medium text-dark-blue-gray hover:text-navy hover:bg-light-gray rounded-md"
            >
              Service Areas
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 text-base font-medium text-dark-blue-gray hover:text-navy hover:bg-light-gray rounded-md"
            >
              About Us
            </Link>

            <div className="pt-4 border-t border-gray-100 mt-2 space-y-3">
              <Link
                href="tel:5551234567"
                className="block text-center w-full border-2 border-navy text-navy font-bold py-3 rounded-md"
              >
                Call Now: (555) 123-4567
              </Link>
              <Link
                href="#book"
                className="block text-center w-full bg-teal text-white font-bold py-3 rounded-md"
              >
                BOOK YOUR RIDE
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
