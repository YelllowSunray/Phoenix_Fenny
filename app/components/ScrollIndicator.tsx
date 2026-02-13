"use client";

import { motion } from "motion/react";

type Props = {
  label?: string;
};

export default function ScrollIndicator({ label = "Scroll" }: Props) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center pb-20 sm:pb-24">
      {/* Soft gradient so the cue is readable and suggests more content below */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent"
        aria-hidden
      />
      <motion.div
        className="relative flex flex-col items-center gap-2 text-white/90"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="text-xs font-medium uppercase tracking-[0.2em]">
          {label}
        </span>
        <motion.span
          className="block"
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-hidden
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </motion.span>
      </motion.div>
    </div>
  );
}
