"use client";

import { useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";

const PHONE_NUMBER = "0687349250";

export default function PhoneButton() {
  const t = useTranslations("phoneButton");
  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  return (
    <div className="fixed bottom-6 right-6 z-40" ref={popoverRef}>
      {open && (
        <div
          className="absolute bottom-full right-0 mb-3 w-64 rounded-xl bg-white px-4 py-3 shadow-lg ring-1 ring-stone-200/80"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          <p className="text-sm text-stone-600">{t("toMakeAppointment")}</p>
          <a
            href={`tel:+31${PHONE_NUMBER.replace(/\s/g, "")}`}
            className="mt-1 block text-lg font-medium text-[#c1362f] hover:underline"
          >
            {t("number")}
          </a>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#c1362f] text-white shadow-lg transition-all hover:bg-[#a82e28] hover:scale-110 active:scale-95 md:h-20 md:w-20"
        aria-label={t("toMakeAppointment")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-8 w-8 md:h-9 md:w-9"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C2.95 22.5 0 19.55 0 16.125V6.375a3 3 0 013-3H1.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
