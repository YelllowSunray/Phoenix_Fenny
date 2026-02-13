import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import AnimateSection from "../../components/AnimateSection";
import CtaButton from "../../components/CtaButton";

type Props = { params: Promise<{ locale: string }> };

const DAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;

export function generateStaticParams() {
  return [{ locale: "nl" }, { locale: "en" }, { locale: "zh" }];
}

export default async function BookPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("bookPage");
  const tContact = await getTranslations("contactPage");

  const serif = { fontFamily: "'Times New Roman', Times, serif" };

  return (
    <div className="min-h-screen bg-stone-50/50">
      {/* Header */}
      <section className="px-6 pt-16 pb-10 md:pt-24 md:pb-12">
        <AnimateSection className="mx-auto max-w-5xl">
          <h1
            className="text-center text-3xl tracking-tight text-stone-800 sm:text-4xl"
            style={serif}
          >
            {t("title")}
          </h1>
          <div className="mx-auto mt-2 h-0.5 w-12 bg-[#c1362f]" />
        </AnimateSection>
      </section>

      {/* Hero image with centered call CTA */}
      <section className="px-6 pb-10 md:pb-14">
        <AnimateSection delay={0.05} className="mx-auto max-w-5xl">
          <div className="relative aspect-[21/9] overflow-hidden rounded-xl md:rounded-2xl">
            <Image
              src="/images/pictures/lobby2.jpg"
              alt={t("imageAlt")}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
              <p
                className="text-sm font-medium uppercase tracking-[0.2em] text-white/95 sm:text-base"
                style={serif}
              >
                {t("callTitle")}
              </p>
              <CtaButton
                href="tel:+31687349250"
                variant="primary"
                className="shadow-xl"
              >
                {t("phone")}
              </CtaButton>
            </div>
          </div>
        </AnimateSection>
      </section>

      {/* Opening hours card */}
      <section className="px-6 pb-14 md:pb-20">
        <AnimateSection delay={0.1} className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200/60 md:p-8">
            <p
              className="text-xs font-medium uppercase tracking-widest text-[#c1362f]"
              style={serif}
            >
              {tContact("openingHoursTitle")}
            </p>
            <ul className="mt-4 space-y-2.5 text-stone-600" role="list">
              {DAYS.map((day) => (
                <li
                  key={day}
                  className="flex justify-between gap-4 text-sm md:text-base"
                >
                  <span style={serif}>{tContact(day)}</span>
                  <span className="tabular-nums text-stone-500">
                    {tContact("hours")}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-stone-500" style={serif}>
              {tContact("closedOnHolidays")}
            </p>
          </div>
        </AnimateSection>
      </section>
    </div>
  );
}
