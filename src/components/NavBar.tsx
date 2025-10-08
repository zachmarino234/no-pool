'use client';

import { useEffect, useState } from 'react';
import logo from "../../public/logo.svg"
import Link from "next/link";
import Image from "next/image";
import NavButton from "./NavButton";
import { useContact } from '@/contexts/ContactContext';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger shrink after scrolling 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { openContact } = useContact();

  return (
    <header className={`3xl:px-50 fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-neutral-white shadow-md transition-all duration-300 ${isScrolled ? 'h-16 py-1.5 pl-3 pr-8' : 'h-24 py-2.5 pl-5 pr-10'
      }`}>
      <Link href="/">
        <Image
          src={logo}
          width={isScrolled ? 60 : 81}
          height={isScrolled ? 60 : 81}
          alt="No Pool Productions Logo"
          className="transition-all duration-300"
        />
      </Link>
      <nav>
        <ul className="flex justify-center items-center gap-3.5">
          <li>
            <Link href="/">
              <NavButton text="Home" size={isScrolled ? 'small' : 'normal'} />
            </Link>
          </li>
          <li>
            <Link href="/work" hidden>
              <NavButton text="Work" size={isScrolled ? 'small' : 'normal'} />
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
    </header>
  );
};

export default NavBar;