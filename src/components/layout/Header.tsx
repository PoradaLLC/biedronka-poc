"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Menu", href: "/#menu" },
  { label: "About", href: "/#about" },
  { label: "Hours", href: "/#hours" },
  { label: "Reviews", href: "/#testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "#fff",
      borderBottom: "1px solid rgba(0,0,0,0.10)",
      boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
    }}>
      <div className="wrap" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 72,
      }}>
        {/* Logo */}
        <Link href="/" className="brand">
          <Image
            src="/images/logo.png"
            alt="Biedronka Deli"
            width={180}
            height={52}
            style={{ objectFit: "contain", height: 44, width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="nav-desktop" style={{ display: "flex", gap: 32 }} aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ fontSize: 13.5, fontWeight: 600, color: "var(--charcoal)", letterSpacing: "0.02em" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a href="tel:+15707304464" className="btn-red nav-cta" style={{ marginLeft: 16 }}>
          (570) 730-4464
        </a>

        <button
          onClick={() => setMobileOpen(v => !v)}
          className="nav-toggle"
          aria-label="Toggle menu"
          style={{ background: "transparent", border: "none", color: "var(--black)", display: "none" }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div style={{
          borderTop: "1px solid var(--border)",
          padding: "16px 20px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          background: "#fff",
        }}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{ padding: "12px 4px", fontSize: 15, fontWeight: 600, color: "var(--charcoal)" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+15707304464"
            className="btn-red"
            style={{ marginTop: 12, justifyContent: "center" }}
          >
            Call (570) 730-4464
          </a>
        </div>
      )}

      <style>{`
        .nav-desktop a:hover { color: var(--red) !important; }
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-cta     { display: none !important; }
          .nav-toggle  { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}
