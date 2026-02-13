"use client";

import { motion } from "motion/react";

export default function AnimateBlockquote({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.blockquote
      className={`relative pl-6 border-l-2 border-[#c1362f]/30 ${className}`}
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.blockquote>
  );
}
