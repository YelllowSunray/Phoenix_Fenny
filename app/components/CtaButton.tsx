"use client";

import { motion } from "motion/react";

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5 shrink-0"
    aria-hidden
  >
    <path
      fillRule="evenodd"
      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C2.95 22.5 0 19.55 0 16.125V6.375a3 3 0 013-3H1.5z"
      clipRule="evenodd"
    />
  </svg>
);

export default function CtaButton({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const isPrimary = variant === "primary";
  const isCall = href.startsWith("tel:");
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-colors ";
  const styles = isPrimary
    ? "bg-white text-stone-900 hover:bg-white/90 shadow-lg"
    : "bg-white text-[#c1362f] hover:bg-white/90 shadow-lg";

  return (
    <motion.a
      href={href}
      className={`${base} ${styles} ${className}`}
      whileHover={{ scale: 1.03, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.25)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {isCall && <PhoneIcon />}
      {children}
    </motion.a>
  );
}
