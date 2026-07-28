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

export default function Navbar2() {
    const pathname = usePathname() || "/";
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 overflow-visible bg-[var(--brand-navy)] text-white">
            <div className="max-w-6xl mx-auto overflow-visible px-4 sm:px-6 lg:px-4">
                <div className="flex h-15 items-center justify-between overflow-visible">
                    {/* Left: logo + text */}
                    <div className="flex items-center gap-3 self-stretch overflow-visible">
                        {/* Width-only slot — logo hangs past navbar height */}
                        <div className="relative hidden w-24 shrink-0 self-stretch overflow-visible md:block">
                            <div className="absolute top-0 left-0 z-50 rounded-md border-2 border-[var(--brand-navy)] bg-white px-1 pb-1 pt-0 shadow-md pointer-events-auto">
                                <Link href="/" aria-label="Hameed & Azra Awards home">
                                    <Image
                                        src="/logo.jpg"
                                        alt="Hameed & Azra Awards logo"
                                        width={112}
                                        height={203}
                                        className="block h-auto w-24"
                                    />
                                </Link>
                            </div>
                        </div>

                        <Link href="/" className="font-semibold text-white text-lg">
                            Hameed & Azra Awards
                        </Link>
                    </div>

                    {/* Right: nav options */}
                    <nav className="hidden md:flex items-center gap-6">
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