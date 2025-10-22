'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../../public/logo.svg"
import Link from "next/link";
import Image from "next/image";
import NavButton from "./NavButton";
import { useContact } from '@/contexts/ContactContext';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger shrink after scrolling 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const { openContact } = useContact();

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-neutral-white shadow-md transition-all duration-300 ${isScrolled ? 'h-14 py-1.5 px-4 md:h-16 md:pl-3 md:pr-8' : 'h-16 py-2 px-4 md:h-24 md:py-2.5 md:pl-5 md:pr-10'} 3xl:px-50`}>
        <Link href="/" onClick={closeMobileMenu}>
          <Image
            src={logo}
            width={isScrolled ? 50 : 60}
            height={isScrolled ? 50 : 60}
            alt="No Pool Productions Logo"
            className={`transition-all duration-300 ${isScrolled ? 'md:w-[60px] md:h-[60px]' : 'md:w-[81px] md:h-[81px]'}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex justify-center items-center gap-3.5">
            <li>
              <Link href="/">
                <NavButton text="Home" size={isScrolled ? 'small' : 'normal'} />
              </Link>
            </li>
            <li>
              <Link href="/team">
                <NavButton text="Team" size={isScrolled ? 'small' : 'normal'} />
              </Link>
            </li>
            <li onClick={openContact}>
              <NavButton text="Contact" size={isScrolled ? 'small' : 'normal'} />
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={28} style={{ color: '#0396FF' }} strokeWidth={2.5} />
          ) : (
            <Menu size={28} style={{ color: '#0396FF' }} strokeWidth={2.5} />
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Drawer */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-neutral-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className={`flex flex-col gap-6 ${isScrolled ? 'pt-20' : 'pt-24'} px-6`}>
          <li>
            <Link href="/" onClick={closeMobileMenu}>
              <NavButton text="Home" size="small" />
            </Link>
          </li>
          <li>
            <Link href="/team" onClick={closeMobileMenu}>
              <NavButton text="Team" size="small" />
            </Link>
          </li>
          <li onClick={() => {
            openContact();
            closeMobileMenu();
          }}>
            <NavButton text="Contact" size="small" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;