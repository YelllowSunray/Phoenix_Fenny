import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import AnimateSection from "../../components/AnimateSection";

type Props = { params: Promise<{ locale: string }> };

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Stationsstraat+6,+1211+EM+Hilversum&output=embed";

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

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contactPage");

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

      {/* Hero image */}
      <section className="px-6 pb-10 md:pb-14">
        <AnimateSection delay={0.05} className="mx-auto max-w-5xl">
          <div className="relative aspect-[21/9] overflow-hidden rounded-xl md:rounded-2xl">
            <Image
              src="/images/pictures/outside.png"
              alt={t("mapTitle")}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
            />
          </div>
        </AnimateSection>
      </section>

      {/* Unified info card: hours + location */}
      <section className="px-6 pb-14 md:pb-20">
        <AnimateSection delay={0.1} className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200/60 md:flex">
            <div className="border-stone-100 p-6 md:w-[45%] md:border-r md:p-8">
              <p
                className="text-xs font-medium uppercase tracking-widest text-[#c1362f]"
                style={serif}
              >
                {t("openingHoursTitle")}
              </p>
              <ul className="mt-4 space-y-2.5 text-stone-600" role="list">
                {DAYS.map((day) => (
                  <li
                    key={day}
                    className="flex justify-between gap-4 text-sm md:text-base"
                  >
                    <span style={serif}>{t(day)}</span>
                    <span className="tabular-nums text-stone-500">
                      {t("hours")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 md:w-[55%] md:p-8">
              <p
                className="text-xs font-medium uppercase tracking-widest text-[#c1362f]"
                style={serif}
              >
                {t("locationTitle")}
              </p>
              <p
                className="mt-4 text-stone-700"
                style={serif}
              >
                Stationsstraat 6
                <br />
                1211 EM Hilversum
              </p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-sm">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Stationsstraat+6,+1211+EM+Hilversum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c1362f] hover:underline"
                >
                  {t("viewOnMap")}
                </a>
                <a
                  href="tel:+31687349250"
                  className="text-stone-600 hover:text-[#c1362f] hover:underline"
                >
                  {t("phoneLabel")}: 06 8734 9250
                </a>
              </div>
            </div>
          </div>
        </AnimateSection>
      </section>

      {/* Map — same width as hero image */}
      <section className="px-6 pb-16 md:pb-24">
        <AnimateSection delay={0.15} className="mx-auto max-w-5xl">
          <p
            className="mb-3 text-center text-xs font-medium uppercase tracking-widest text-stone-400"
            style={serif}
          >
            {t("mapTitle")}
          </p>
          <div className="mt-0 h-[320px] w-full overflow-hidden rounded-xl md:h-[400px] md:rounded-2xl">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("mapTitle")}
            />
          </div>
        </AnimateSection>
      </section>
    </div>
  );
}
