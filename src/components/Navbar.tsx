
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <img src="/hydra-logo.png" alt="Hydra Marketing" className="h-8 w-auto" />
            <span className="text-2xl font-bold text-blue-900">
              <span className="text-orange-500">Hydra</span> Marketing
            </span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-gray-700 hover:text-blue-500 transition-colors"
          >
            Servicios
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-500 transition-colors"
          >
            Acerca de
          </a>
          <a
            href="#blog"
            className="text-gray-700 hover:text-blue-500 transition-colors"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-500 transition-colors"
          >
            Contacto
          </a>
          <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:opacity-90 text-white px-6 py-2">
            Comenzar
          </Button>
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="flex flex-col px-4 pt-2 pb-4 space-y-4">
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-500 px-3 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Servicios
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-500 px-3 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Acerca de
            </a>
            <a
              href="#blog"
              className="text-gray-700 hover:text-blue-500 px-3 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-500 px-3 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </a>
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:opacity-90 text-white w-full">
              Comenzar
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
