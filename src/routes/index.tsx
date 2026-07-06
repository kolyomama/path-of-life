import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Пътят не е само за хора" },
      { name: "description", content: "Младежка кампания за пътна екология и опазване на земноводни и влечуги — костенурки, жаби, гущери и змии." },
    ],
  }),
  component: Index,
});

function scrollToSection(id: string) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function Index() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="nachalo"
        className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.png"
            alt="Илюстрация на костенурка, пресичаща полски път"
            className="h-full w-full object-cover object-center"
            width={1344}
            height={768}
          />
          {/* Soft overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center md:px-6">
          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-graphite md:text-6xl lg:text-7xl drop-shadow-sm">
            Пътят не е само за хора.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-graphite/85 md:text-xl md:leading-relaxed drop-shadow-sm">
            Понякога по него преминава нечий живот. Всяка пролет и лято костенурки,
            жаби, гущери и змии тръгват през пътя — към вода, към дом, към живот.
            Малка промяна в скоростта ни може да означава голяма разлика за тях.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <button
              onClick={() => scrollToSection("zashcho")}
              className="inline-flex items-center justify-center rounded-full bg-forest px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-forest/20 transition-all hover:-translate-y-0.5 hover:bg-forest-light hover:shadow-xl hover:shadow-forest/25 focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
            >
              Научи повече
            </button>

            <button
              onClick={() => scrollToSection("vkluchi-se")}
              className="inline-flex items-center justify-center rounded-full bg-sun px-8 py-3.5 text-base font-semibold text-graphite shadow-lg shadow-sun/20 transition-all hover:-translate-y-0.5 hover:bg-sun/90 hover:shadow-xl hover:shadow-sun/25 focus:outline-none focus:ring-2 focus:ring-sun focus:ring-offset-2"
            >
              Включи се
            </button>

            <button
              onClick={() => scrollToSection("glasat-na-zhivotnite")}
              className="inline-flex items-center justify-center rounded-full border-2 border-forest/30 bg-white/80 px-8 py-3.5 text-base font-semibold text-forest backdrop-blur-sm shadow-md transition-all hover:-translate-y-0.5 hover:bg-white hover:border-forest/50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
            >
              Виж историите
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
