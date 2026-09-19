"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Brand, JoinLink } from "./site";
import { CFP_URL } from "@/lib/data";
const links = [
  ["/events", "Events"],
  ["/our-story", "Our story"],
  ["/partners", "Partners"],
];
export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const cfpLink = (
    <a
      href={CFP_URL}
      target="_blank"
      rel="noreferrer"
      className="cfp-nav"
      onClick={() => setOpen(false)}
    >
      CFP <ArrowUpRight size={12} />
    </a>
  );
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={path.startsWith(href) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
          {cfpLink}
        </nav>
        <div className="header-actions">
          <JoinLink className="button button-blue button-small" />
          <button
            className="mobile-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={path.startsWith(href) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
          {cfpLink}
        </nav>
      )}
      <div className="reading-progress" aria-hidden="true" />
    </header>
  );
}
