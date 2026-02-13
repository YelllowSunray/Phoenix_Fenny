import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["nl", "en", "zh"],
  defaultLocale: "nl",
  localePrefix: "always",
  localeDetection: false,
});
