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

      {/* Защо е важно? */}
      <section
        id="zashcho"
        className="relative bg-sand/20 py-20 md:py-28"
      >
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="font-display text-3xl font-bold leading-tight text-graphite md:text-4xl lg:text-5xl">
            Малък път за нас. Дълго и опасно пътуване за тях.
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-graphite/85 md:text-xl md:leading-relaxed">
            <p>
              Всяка пролет и лято хиляди земноводни и влечуги тръгват на път —
              търсят храна, партньор, място за размножаване или ново
              местообитание. За да стигнат дотам, много от тях трябва да пресекат
              нещо, което ние почти не забелязваме: пътя.
            </p>
            <p>
              За човек това е няколко секунди зад волана. За костенурка — минути
              на открито, без прикритие. За жаба след дъжд — единственият начин
              да стигне до водата, в която трябва да остави поколението си. За
              гущер или змия — момент на голяма уязвимост, в който често биват
              подминавани… или умишлено премазвани, просто защото будят страх и
              неразбиране.
            </p>
            <p>
              Повечето от тези животни не са опасни. Те не пресичат пътя, за да
              ни притесняват — правят го, защото пътят е пресякъл техния свят, а
              не обратното.
            </p>
            <p>
              Тази страница съществува, за да можем да го видим и да реагираме
              с малко повече внимание.
            </p>
          </div>
        </div>
      </section>

      {/* Какво правим? */}
      <section
        id="kakvo-pravim"
        className="relative bg-background py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-display text-3xl font-bold leading-tight text-graphite md:text-4xl lg:text-5xl">
            Кампания, направена от млади хора — с помощта на наука, изкуство и
            доброволчество.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-graphite/85 md:text-xl">
            „Пътят не е само за хора“ съчетава няколко неща, които рядко вървят
            заедно, но тук работят като едно цяло:
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
                ),
                text: "Младежко творчество — истории, илюстрации и послания, създадени от деца и младежи.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /><path d="M8 7h8" /><path d="M8 11h6" /><path d="M8 15h4" /></svg>
                ),
                text: "Експертно знание — факти и съвети, проверени от специалисти по опазване на природата.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                ),
                text: "Доброволчество — младежи, които участват активно във всеки етап от кампанията.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>
                ),
                text: "Интервюта и подкаст — разговори с експерти на достъпен и интересен език.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></svg>
                ),
                text: "Печатни и дигитални материали — флаери, картички, постери, образователни карти.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                ),
                text: "Публично информационно събитие — среща на живо с местната общност.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                ),
                text: "Онлайн кампания — истории и съвети, споделени в дигиталното пространство.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14a9 3 0 0 0 18 0V5" /><path d="M3 12a9 3 0 0 0 18 0" /></svg>
                ),
                text: "Дългосрочна дигитална библиотека — материали, достъпни и след края на проекта.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mt-0.5 shrink-0 text-forest">{item.icon}</div>
                <p className="text-base leading-relaxed text-graphite/85">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-sand/30 p-6 md:p-8">
            <p className="text-center text-lg font-medium leading-relaxed text-graphite md:text-xl">
              Целта не е да изплашим никого. Целта е да покажем, че малко повече
              внимание на пътя може да спаси нечий живот — и че това внимание
              може да тръгне именно от младите хора.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
