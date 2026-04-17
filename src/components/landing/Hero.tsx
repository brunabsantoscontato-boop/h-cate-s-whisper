import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import card1 from "@/assets/card-1.png";
import card2 from "@/assets/card-2.png";
import card3 from "@/assets/card-3.png";

const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=Ol%C3%A1%20Lucy%2C%20quero%20agendar%20uma%20leitura%20de%20tar%C3%B4";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      setPos({ x, y });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  const cards = [
    { src: card1, baseX: -180, baseY: 20, rot: -18, depth: 30, delay: 0 },
    { src: card3, baseX: 0, baseY: -10, rot: 4, depth: 50, delay: 0.15 },
    { src: card2, baseX: 180, baseY: 30, rot: 16, depth: 30, delay: 0.3 },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{
        backgroundImage: `linear-gradient(180deg, oklch(0.10 0.02 300 / 0.85), oklch(0.13 0.03 310 / 0.92)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Smoke overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-[var(--purple-deep)]/30 blur-3xl animate-smoke" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[var(--wine)]/30 blur-3xl animate-smoke" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center lg:text-left"
        >
          <span className="inline-block uppercase tracking-[0.4em] text-xs text-gold mb-6">
            Tarô das Bruxas · Lucy Kandac
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
            O destino está tentando{" "}
            <span className="text-gradient-gold italic">falar</span> com você…{" "}
            <br className="hidden md:block" />
            <span className="text-foreground/90">você vai ouvir?</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Descubra respostas profundas sobre <span className="text-gold-soft">amor</span>,{" "}
            <span className="text-gold-soft">dinheiro</span> e{" "}
            <span className="text-gold-soft">caminhos espirituais</span> através do
            antigo Tarô das Bruxas — guiado pela energia de Hécate.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mystic inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground font-semibold px-8 py-4 rounded-full text-base md:text-lg shadow-gold"
          >
            🔮 Quero minha leitura agora
          </a>
          <p className="mt-4 text-xs text-muted-foreground/70 italic">
            Atendimento online · Brasil inteiro
          </p>
        </motion.div>

        {/* Right: floating cards */}
        <div className="relative h-[480px] md:h-[560px] flex items-center justify-center">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, rotate: c.rot }}
              animate={{ opacity: 1, y: 0, rotate: c.rot }}
              transition={{ duration: 1.2, delay: c.delay, ease: [0.22, 1, 0.36, 1] }}
              className="absolute"
              style={{
                transform: `translate3d(${c.baseX + pos.x * c.depth}px, ${c.baseY + pos.y * c.depth}px, 0) rotate(${c.rot + pos.x * 4}deg)`,
                transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <div
                className="w-[180px] md:w-[230px] aspect-[2/3] rounded-2xl overflow-hidden shadow-mystic animate-float-slow"
                style={{ animationDelay: `${i * 0.7}s`, ["--rot" as string]: `${c.rot}deg` }}
              >
                <img
                  src={c.src}
                  alt="Carta de tarô mística"
                  className="w-full h-full object-cover"
                  width={460}
                  height={690}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
          {/* Glow behind cards */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-72 w-72 rounded-full bg-gold/20 blur-3xl animate-glow-pulse" />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 text-xs tracking-[0.3em] uppercase">
        ↓ desça e descubra
      </div>
    </section>
  );
}
