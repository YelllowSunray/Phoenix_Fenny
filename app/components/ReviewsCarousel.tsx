"use client";

import { useState } from "react";

export type ReviewItem = {
  name: string;
  stars: number;
  date: string;
  text: string;
};

export default function ReviewsCarousel({ reviews }: { reviews: ReviewItem[] }) {
  const [index, setIndex] = useState(0);
  const review = reviews[index] ?? reviews[0];

  const goPrev = () => setIndex((i) => (i === 0 ? reviews.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === reviews.length - 1 ? 0 : i + 1));

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <div className="relative rounded-xl border border-stone-200/80 bg-white/60 px-6 py-8 shadow-sm backdrop-blur-[1px] md:px-10 md:py-10">
        <div className="flex items-center justify-between gap-6">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous review"
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#c1362f] text-white shadow-md transition-all hover:bg-[#a82e28] hover:scale-105 active:scale-95 md:h-14 md:w-14"
          >
            <svg className="h-6 w-6 md:h-7 md:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="min-h-[140px] flex-1 text-center">
            <p className="text-base leading-relaxed text-stone-600 md:text-lg">
              &ldquo;{review.text}&rdquo;
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <span className="text-amber-500">
                {"★".repeat(review.stars)}
                <span className="text-stone-300">{"★".repeat(5 - review.stars)}</span>
              </span>
              <span className="text-sm text-stone-400">— {review.name}</span>
              <span className="text-xs text-stone-400">{review.date}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next review"
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#c1362f] text-white shadow-md transition-all hover:bg-[#a82e28] hover:scale-105 active:scale-95 md:h-14 md:w-14"
          >
            <svg className="h-6 w-6 md:h-7 md:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="mt-4 flex justify-center gap-1.5">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-[#c1362f]/60" : "w-1.5 bg-stone-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
