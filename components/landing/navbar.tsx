"use client";

import Link from "next/link";
import { GitBranch } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "#features", label: "features" },
  { href: "#how-it-works", label: "how-it-works" },
  { href: "#pricing", label: "pricing" },
  { href: "#faq", label: "faq" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-[#131316]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo9.svg"
            alt="RepoMindsAI"
            width={28}
            height={28}
            className="h-35 w-35"
            priority
          />
    
        </Link>

        {/* Desktop Navigation — styled as file paths, not generic labels */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 font-mono text-[13px] text-[#8D8D97] transition hover:bg-white/[0.04] hover:text-[#F5B942]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com"
            target="_blank"
            className="hidden rounded-lg border border-white/10 p-2 text-[#8D8D97] transition hover:border-white/20 hover:text-[#EDEDEF] md:flex"
          >
            <GitBranch size={17} />
          </Link>

          <Link
            href="/sign-in"
            className="rounded-lg bg-[#EDEDEF] px-4 py-2 text-[13px] font-semibold text-[#131316] transition hover:bg-white"
          >
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}