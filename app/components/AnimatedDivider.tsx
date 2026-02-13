"use client";

import { motion } from "motion/react";

export default function AnimatedDivider({
  className = "mx-auto mt-2 h-0.5 w-16 bg-[#c1362f]",
}: {
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "center" }}
    />
  );
}
