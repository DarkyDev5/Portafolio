"use client";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../ThemeContext";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Usa useTheme para obtener el tema y la función para cambiar el tema
  const { theme, setTheme } = useTheme();

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setIsScrolled(isScrolled);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-200 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:w-full">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className={`text-sm font-medium transition-all duration-200 ${
                    pathname === "/"
                      ? "text-indigo-600"
                      : "text-gray-700 hover:text-indigo-600"
                  }`}
                >
                  Inicio
                </Link>
                <Link
                  href="/about"
                  className={`text-sm font-medium transition-all duration-200 ${
                    pathname === "/about"
                      ? "text-indigo-600"
                      : "text-gray-700 hover:text-indigo-600"
                  }`}
                >
                  Sobre mí
                </Link>
                <Link
                  href="/projects"
                  className={`text-sm font-medium transition-all duration-200 ${
                    pathname === "/projects"
                      ? "text-indigo-600"
                      : "text-gray-700 hover:text-indigo-600"
                  }`}
                >
                  Proyectos
                </Link>
                  
                <Link
                href="/contact"
                className="px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Contáctame
              </Link>

              <div className="flex items-center space-x-4">
             
              <button
                onClick={toggleTheme}
                className="text-gray-500 hover:text-indigo-600"
              >
                {theme === "light" ? (
                  <Image
                    src="/moon.svg"
                    alt="Dark Mode Icon"
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    src="/sun.png"
                    alt="Light Mode Icon"
                    width={24}
                    height={24}
                  />
                )}
              </button>
              </div>
            </div>
          </div>
  
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === "/"
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                Inicio
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === "/about"
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                Sobre mí
              </Link>
              <Link
                href="/projects"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === "/projects"
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                Proyectos
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === "/contact"
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
