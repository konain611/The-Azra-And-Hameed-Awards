"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/eligibility", label: "Eligibility" },
  { href: "/how-to-apply", label: "How to Apply" },
  { href: "/winners", label: "Awardies" },
];

export default function Navbar() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[var(--brand-navy)] text-white border-b border-white/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex items-center justify-end h-15">
          {/* <div className="flex items-center gap-4">
            <div className="bg-white rounded-md p-1">
              <Link href="/" aria-label="Hameed & Azra Awards home">
                <Image
                  src="/logo.jpg"
                  alt="Hameed & Azra Awards logo"
                  width={48}
                  height={48}
                  className="block"
                />
              </Link>
            </div>
            <Link href="/" className="font-semibold text-white text-lg">
              Hameed & Azra Awards
            </Link>
          </div> */}

          <nav className="hidden md:flex items-end gap-6">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm relative ${active ? "opacity-95" : "opacity-90"} hover:opacity-100 underline-grow`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="p-2 rounded-md bg-white/10 hover:bg-white/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[var(--brand-navy)]/95">
          <div className="px-4 pb-4 pt-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
