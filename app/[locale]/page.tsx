import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import AnimateHero, { AnimateHeroItem } from "../components/AnimateHero";
import AnimateSection from "../components/AnimateSection";
import AnimateFadeIn from "../components/AnimateFadeIn";
import AnimatedDivider from "../components/AnimatedDivider";
import AnimateStagger, { AnimateStaggerItem } from "../components/AnimateStagger";
import AnimateHeading from "../components/AnimateHeading";
import AnimateBlockquote from "../components/AnimateBlockquote";
import CtaButton from "../components/CtaButton";
import ReviewsCarousel from "../components/ReviewsCarousel";
import ScrollIndicator from "../components/ScrollIndicator";

type Props = { params: Promise<{ locale: string }> };

const REVIEW_COUNT = 11;

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const tReviews = await getTranslations("reviews");

  const reviews = Array.from({ length: REVIEW_COUNT }, (_, i) => ({
    name: tReviews(`item${i}Name`),
    stars: 5,
    date: tReviews(`item${i}Date`),
    text: tReviews(`item${i}Text`),
  }));

  return (
    <div>
      {/* Hero Section — Video Background */}
      <section className="relative h-screen w-full overflow-hidden">
        <AnimateFadeIn className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source
              src="/images/Phoenix Massage_720_compressed.mp4"
              type="video/mp4"
            />
          </video>
        </AnimateFadeIn>

        <div className="absolute inset-0 bg-black/40" />

        <AnimateHero>
          <AnimateHeroItem>
            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              style={{ fontFamily: "var(--font-trajan)" }}
            >
              {t("hero.title")}
            </h1>
          </AnimateHeroItem>
          <AnimateHeroItem className="mt-4">
            <p className="max-w-xl text-lg text-white/85 sm:text-xl">
              {t("hero.tagline")}
            </p>
          </AnimateHeroItem>
          <AnimateHeroItem className="mt-6">
            <p className="text-sm font-medium uppercase tracking-widest text-white/90">
              {t("hero.callHint")}
            </p>
          </AnimateHeroItem>
          <AnimateHeroItem className="mt-4">
            <CtaButton href="tel:+31687349250" variant="primary">
              {t("hero.callButton")}
            </CtaButton>
          </AnimateHeroItem>
        </AnimateHero>
        <ScrollIndicator label={t("hero.scrollLabel")} />
      </section>

      {/* Philosophy Section — A Healing Touch */}
      <section id="about" className="bg-white px-6 py-24">
        <AnimateSection className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-14">
            <div className="flex-1 text-center md:text-left">
              <AnimateHeading>
                <h2
                  className="text-3xl tracking-tight text-stone-800 sm:text-4xl"
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                >
                  {t("healing.title")}
                </h2>
              </AnimateHeading>
              <AnimatedDivider className="mx-auto mt-2 h-0.5 w-16 bg-[#c1362f] md:mx-0" />
              <AnimateStagger className="mt-8" staggerDelay={0.1}>
                <AnimateStaggerItem className="text-lg leading-relaxed text-stone-600">
                  {t("healing.p1")}
                </AnimateStaggerItem>
                <AnimateStaggerItem className="mt-6 text-lg leading-relaxed text-stone-600">
                  {t("healing.p2")}
                </AnimateStaggerItem>
              </AnimateStagger>
            </div>
            <div className="relative w-full flex-shrink-0 overflow-hidden rounded-lg shadow-lg md:w-[380px] lg:w-[420px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/pictures/massagephoto.jpg"
                alt="Massage therapy"
                className="h-auto w-full object-cover"
                width={420}
                height={560}
              />
            </div>
          </div>
        </AnimateSection>
      </section>

      {/* Chinese Wisdom Section */}
      <section className="bg-stone-50 px-6 py-24">
        <AnimateSection className="mx-auto max-w-3xl text-center" delay={0.1}>
          <AnimateBlockquote className="text-left">
            <span
              className="text-2xl italic leading-relaxed text-stone-700 sm:text-3xl"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              &ldquo;{t("proverb.quote")}&rdquo;
            </span>
          </AnimateBlockquote>
          <AnimateStagger className="mt-4" staggerDelay={0.08}>
            <AnimateStaggerItem>
              <p className="text-sm uppercase tracking-widest text-stone-400">
                {t("proverb.label")}
              </p>
            </AnimateStaggerItem>
            <AnimateStaggerItem className="mt-8 text-lg leading-relaxed text-stone-600">
              {t("proverb.body")}
            </AnimateStaggerItem>
          </AnimateStagger>
        </AnimateSection>
      </section>

      {/* My Story Section */}
      <section className="bg-white px-6 py-24">
        <AnimateSection className="mx-auto max-w-6xl" delay={0.05}>
          <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-14">
            <div className="relative order-2 w-full flex-shrink-0 overflow-hidden rounded-lg shadow-lg md:order-1 md:w-[380px] lg:w-[420px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/pictures/eastern.jpg"
                alt=""
                className="h-auto w-full object-cover"
                width={420}
                height={560}
              />
            </div>
            <div className="order-1 flex-1 md:order-2">
              <AnimateHeading>
                <h2
                  className="text-center text-3xl tracking-tight text-stone-800 sm:text-4xl md:text-left"
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                >
                  {t("story.title")}
                </h2>
              </AnimateHeading>
              <AnimatedDivider className="mx-auto mt-2 h-0.5 w-16 bg-[#c1362f] md:mx-0" />

              <AnimateStagger className="mt-12 space-y-8" staggerDelay={0.12}>
                <AnimateStaggerItem className="text-lg leading-relaxed text-stone-600">
                  {t("story.p1")}
                </AnimateStaggerItem>
                <AnimateStaggerItem className="text-lg leading-relaxed text-stone-600">
                  {t("story.p2")}
                </AnimateStaggerItem>
                <AnimateStaggerItem className="text-lg leading-relaxed text-stone-600">
                  {t("story.p3")}
                </AnimateStaggerItem>
              </AnimateStagger>
            </div>
          </div>
        </AnimateSection>
      </section>

      {/* Why "Phoenix" Section */}
      <section className="bg-stone-50 px-6 py-24">
        <AnimateSection className="mx-auto max-w-6xl" delay={0.1}>
          <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-14">
            <div className="flex-1 text-center md:text-left">
              <AnimateHeading>
                <h2
                  className="text-3xl tracking-tight text-stone-800 sm:text-4xl"
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                >
                  {t("phoenix.title")}
                </h2>
              </AnimateHeading>
              <AnimatedDivider className="mx-auto mt-2 h-0.5 w-16 bg-[#c1362f] md:mx-0" />
              <AnimateStagger className="mt-8" staggerDelay={0.1}>
                <AnimateStaggerItem className="text-lg leading-relaxed text-stone-600">
                  {t("phoenix.p1")}
                </AnimateStaggerItem>
                <AnimateStaggerItem className="mt-6 text-lg leading-relaxed text-stone-600">
                  {t("phoenix.p2")}
                </AnimateStaggerItem>
              </AnimateStagger>
            </div>
            <div className="relative w-full flex-shrink-0 overflow-hidden rounded-lg shadow-lg md:w-[380px] lg:w-[420px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Phoenix_upscaled.png"
                alt="Phoenix"
                className="h-auto w-full object-cover"
                width={420}
                height={560}
              />
            </div>
          </div>
        </AnimateSection>
      </section>

      {/* Google Reviews */}
      <section className="border-t border-stone-100 bg-stone-50/80 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2
            className="mb-6 text-center text-xl font-medium tracking-tight text-stone-500 sm:text-2xl"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            {t("reviews.title")}
          </h2>
          <ReviewsCarousel reviews={reviews} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#c1362f] px-6 py-20 text-center text-white">
        <AnimateSection className="mx-auto max-w-3xl" delay={0.05}>
          <AnimateHeading>
            <h2
              className="text-3xl tracking-tight sm:text-4xl"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              {t("cta.title")}
            </h2>
          </AnimateHeading>
          <AnimateStagger staggerDelay={0.1}>
            <AnimateStaggerItem>
              <p className="mt-4 text-lg text-white/90">{t("cta.subtitle")}</p>
            </AnimateStaggerItem>
            <AnimateStaggerItem>
              <div className="mt-8">
                <CtaButton href="tel:+31687349250" variant="secondary">
                  {t("cta.callButton")}
                </CtaButton>
              </div>
            </AnimateStaggerItem>
          </AnimateStagger>
        </AnimateSection>
      </section>
    </div>
  );
}
