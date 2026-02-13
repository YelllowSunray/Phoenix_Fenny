import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import AnimateSection from "../../components/AnimateSection";

type Props = { params: Promise<{ locale: string }> };

const MASSAGE_ROWS: {
  nameKey: string;
  minutes: number;
  price: number;
  showName: boolean;
}[] = [
  { nameKey: "fullBody", minutes: 60, price: 55, showName: true },
  { nameKey: "fullBody", minutes: 90, price: 85, showName: false },
  { nameKey: "back", minutes: 30, price: 40, showName: true },
  { nameKey: "back", minutes: 45, price: 50, showName: false },
  { nameKey: "feet", minutes: 30, price: 40, showName: true },
];

const TREATMENT_ROWS: { nameKey: string; price: number }[] = [
  { nameKey: "acupuncture", price: 75 },
  { nameKey: "hotstone", price: 75 },
  { nameKey: "moxa", price: 75 },
  { nameKey: "cupping", price: 40 },
  { nameKey: "pedicure", price: 45 },
];

export function generateStaticParams() {
  return [{ locale: "nl" }, { locale: "en" }, { locale: "zh" }];
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("servicesPage");

  const tableHead =
    "text-left text-sm font-medium uppercase tracking-wider text-stone-500";
  const serif = { fontFamily: "'Times New Roman', Times, serif" };

  return (
    <div className="min-h-screen bg-stone-50/50">
      <section className="px-6 py-16 md:py-24">
        <AnimateSection className="mx-auto max-w-4xl">
          <h1
            className="text-center text-3xl tracking-tight text-stone-800 sm:text-4xl"
            style={serif}
          >
            {t("title")}
          </h1>
          <div className="mx-auto mt-2 h-0.5 w-16 bg-[#c1362f]" />

          <AnimateSection delay={0.05} className="relative mt-10 aspect-[21/9] overflow-hidden rounded-xl md:rounded-2xl">
            <Image
              src="/images/pictures/lobby.jpg"
              alt="Phoenix Health & Wellness lobby"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </AnimateSection>

          <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-10">
            {/* Massage */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200/60 md:p-8">
              <h2
                className="text-lg font-medium text-stone-800"
                style={serif}
              >
                {t("sectionMassage")}
              </h2>
              <div className="mt-1 h-px w-10 bg-[#c1362f]" />
              <div className="mt-6">
                <table className="w-full text-base text-stone-600">
                  <thead>
                    <tr className={tableHead}>
                      <th className="pb-3 pr-4" style={serif}>
                        {t("columnService")}
                      </th>
                      <th className="pb-3 text-right" style={serif}>
                        {t("columnMinutes")}
                      </th>
                      <th className="pb-3 text-right tabular-nums" style={serif}>
                        {t("columnPrice")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {MASSAGE_ROWS.map((row, i) => (
                      <tr
                        key={i}
                        className="border-t border-stone-100 first:border-t-0"
                      >
                        <td className="py-3 pr-4" style={serif}>
                          {row.showName ? t(row.nameKey) : "\u00A0"}
                        </td>
                        <td className="py-3 text-right text-stone-500" style={serif}>
                          {row.minutes} min
                        </td>
                        <td className="py-3 text-right tabular-nums font-medium text-stone-600" style={serif}>
                          €{row.price},-
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Treatments */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200/60 md:p-8">
              <h2
                className="text-lg font-medium text-stone-800"
                style={serif}
              >
                {t("sectionTreatment")}
              </h2>
              <div className="mt-1 h-px w-10 bg-[#c1362f]" />
              <div className="mt-6">
                <table className="w-full text-base text-stone-600">
                  <thead>
                    <tr className={tableHead}>
                      <th className="pb-3 pr-4" style={serif}>
                        {t("columnService")}
                      </th>
                      <th className="pb-3 text-right tabular-nums" style={serif}>
                        {t("columnPrice")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {TREATMENT_ROWS.map((row, i) => (
                      <tr
                        key={i}
                        className="border-t border-stone-100 first:border-t-0"
                      >
                        <td className="py-3 pr-4" style={serif}>
                          {t(row.nameKey)}
                        </td>
                        <td className="py-3 text-right tabular-nums font-medium text-stone-600" style={serif}>
                          €{row.price},-
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </AnimateSection>
      </section>
    </div>
  );
}
