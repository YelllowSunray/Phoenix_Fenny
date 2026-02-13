"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";

const navLinks = [
  { key: "home" as const, href: "/" },
  { key: "services" as const, href: "/services" },
  { key: "contact" as const, href: "/contact" },
  { key: "bookNow" as const, href: "/book", cta: true },
];

const locales = [
  { code: "nl" as const, label: "NL" },
  { code: "en" as const, label: "EN" },
  { code: "zh" as const, label: "中文" },
];

export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkHref = (href: string) => (href.startsWith("#") ? href : `/${locale}${href === "/" ? "" : href}`);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 shadow-sm backdrop-blur-md"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href={`/${locale}`}>
          <Image
            src="/images/ Logo-without-white.png"
            alt="Phoenix Health & Wellness logo"
            width={160}
            height={48}
            className="h-12 w-auto transition-transform duration-300 hover:scale-105"
            priority
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const href = linkHref(link.href);
              const className = link.cta
                ? "rounded-full bg-[#c1362f] px-6 py-2.5 text-lg font-normal text-white transition-all duration-200 hover:bg-[#a82e28] hover:scale-105 active:scale-100"
                : "nav-link-underline text-lg font-normal text-[#c1362f] transition-colors hover:text-[#a82e28]";
              return (
                <li key={link.key}>
                  <a href={href} className={className}>
                    {t(link.key)}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-2 border-l border-stone-200 pl-6">
            {locales.map((loc) => (
              <Link
                key={loc.code}
                href={pathname}
                locale={loc.code}
                className="rounded px-2 py-1 text-sm font-normal text-stone-500 transition-all duration-200 hover:bg-stone-100 hover:text-[#c1362f] hover:scale-110"
              >
                {loc.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <div className="flex gap-1">
            {locales.map((loc) => (
              <Link
                key={loc.code}
                href={pathname}
                locale={loc.code}
                className="rounded px-2 py-1 text-sm text-stone-500 hover:text-[#c1362f]"
              >
                {loc.label}
              </Link>
            ))}
          </div>
          <button
            aria-label="Toggle menu"
            className="flex flex-col gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className={`block h-0.5 w-6 bg-[#c1362f] transition-transform ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#c1362f] transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#c1362f] transition-transform ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-stone-100 bg-white px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => {
              const href = linkHref(link.href);
              const className = link.cta
                ? "inline-block rounded-full bg-[#c1362f] px-6 py-2.5 text-lg font-normal text-white transition-colors hover:bg-[#a82e28]"
                : "text-lg font-normal text-[#c1362f] transition-colors hover:text-[#a82e28]";
              return (
                <li key={link.key}>
                  <a
                    href={href}
                    className={className}
                    onClick={() => setMobileOpen(false)}
                  >
                    {t(link.key)}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
