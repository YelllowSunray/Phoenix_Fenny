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
              <p className="mt-4 text-sm text-stone-500" style={serif}>
                {t("closedOnHolidays")}
              </p>
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
                <a
                  href="https://wa.me/31687349250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-stone-600 hover:text-[#c1362f] hover:underline"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t("whatsapp")}
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
