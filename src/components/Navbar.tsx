"use client";

import Link from "next/link";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaX, FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const user = false;
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "CONTACT", href: "/contact" },
    { name: "ABOUT", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Social Links */}
        <div className="hidden items-center gap-5 text-muted md:flex">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transition hover:text-primary"
          >
            <FaFacebook size={18} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition hover:text-primary"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="transition hover:text-primary"
          >
            <FaX size={18} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="transition hover:text-primary"
          >
            <FaYoutube size={19} />
          </a>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold tracking-tight text-foreground"
        >
          <span className="text-primary">A</span>rtik
          <span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-semibold tracking-wider text-muted transition hover:text-primary"
            >
              {link.name}
            </Link>
          ))}

          {user ? (
            <Link href="/profile" aria-label="Profile">
              <BiUserCircle
                size={27}
                className="text-muted transition hover:text-primary"
              />
            </Link>
          ) : (
            <Link
              href="/login"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-primary-hover"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="text-2xl text-foreground transition hover:text-primary md:hidden"
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border bg-surface px-5 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold tracking-wider text-muted transition hover:text-primary"
              >
                {link.name}
              </Link>
            ))}

            <div className="border-t border-border pt-5">
              {user ? (
                <Link
                  href="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <BiUserCircle size={22} />
                  Profile
                </Link>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-primary-hover"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Social Links */}
            <div className="flex items-center gap-5 border-t border-border pt-5 text-muted">
              <a href="https://www.facebook.com" aria-label="Facebook">
                <FaFacebook size={19} />
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram">
                <FaInstagram size={19} />
              </a>
              <a href="https://www.twitter.com" aria-label="X">
                <FaX size={19} />
              </a>
              <a href="https://www.youtube.com" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
