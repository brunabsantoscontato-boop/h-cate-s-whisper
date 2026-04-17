import { motion } from "framer-motion";
import cardBack from "@/assets/card-back.png";

const WHATSAPP_BASE = "https://wa.me/5511999999999?text=";

type Consulta = {
  title: string;
  desc: string;
  price?: string;
};

const tempo: Consulta[] = [
  { title: "30 Minutos", desc: "Leitura objetiva para uma dúvida específica", price: "R$ 80" },
  { title: "1 Hora", desc: "Mergulho completo em vários temas da sua vida", price: "R$ 150" },
  { title: "1 Hora e 30 Minutos", desc: "Sessão profunda com ritual e orientação espiritual", price: "R$ 220" },
];

const perguntas: Consulta[] = [
  { title: "Vida Geral + 6 Perguntas", desc: "Panorama completo da sua jornada atual", price: "R$ 120" },
  { title: "Vida Amorosa + 6 Perguntas", desc: "Relacionamento, paixões, terceiros e reconciliação", price: "R$ 120" },
  { title: "5 Perguntas Diretas", desc: "Respostas certeiras, sem rodeios", price: "R$ 90" },
  { title: "Leitura Mensal + 6 Perguntas", desc: "Energia do mês e os caminhos que se abrem", price: "R$ 120" },
  { title: "Leitura Semanal + 6 Perguntas", desc: "Foco e direção para os próximos 7 dias", price: "R$ 100" },
  { title: "Caminho Espiritual + 6 Perguntas", desc: "Missão da alma, guias e proteção", price: "R$ 140" },
  { title: "Vida Material + 6 Perguntas", desc: "Trabalho, dinheiro e prosperidade", price: "R$ 130" },
  { title: "Tiragem dos Portais", desc: "Os ciclos que se abrem e fecham na sua vida", price: "R$ 160" },
  { title: "Vida Amorosa Profunda", desc: "Análise extensa do amor e seus mistérios", price: "R$ 150" },
  { title: "Tiragem Anual", desc: "12 meses revelados carta por carta", price: "R$ 250" },
  { title: "Cruz Celta", desc: "A leitura clássica e mais completa do tarô", price: "R$ 180" },
];

function TarotCard({ c, index }: { c: Consulta; index: number }) {
  const message = encodeURIComponent(`Olá Lucy, quero a consulta: ${c.title}`);
  return (
    <motion.a
      href={`${WHATSAPP_BASE}${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
      className="tarot-card block aspect-[3/4] max-w-[210px] w-full mx-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-xl"
      aria-label={`Agendar ${c.title}`}
    >
      <div className="tarot-card-inner">
        {/* Frente */}
        <div className="tarot-face bg-gradient-card border border-gold/30 flex flex-col items-center justify-center p-5 text-center">
          <img src={cardBack} alt="" className="h-32 md:h-40 w-auto opacity-90 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]" loading="lazy" />
          <h3 className="font-display text-lg md:text-xl text-gold-soft mt-4 leading-tight">
            {c.title}
          </h3>
          {c.price && (
            <p className="mt-2 text-xs text-muted-foreground tracking-wider">
              {c.price}
            </p>
          )}
        </div>
        {/* Verso */}
        <div className="tarot-face tarot-face-back bg-gradient-to-br from-[var(--purple-deep)] to-[var(--wine)] border border-gold flex flex-col items-center justify-center p-5 text-center">
          <h3 className="font-display text-xl text-gold mb-3 leading-tight">{c.title}</h3>
          <p className="text-sm text-foreground/85 mb-4 leading-relaxed">{c.desc}</p>
          {c.price && <p className="text-gold-soft font-semibold mb-4">{c.price}</p>}
          <span className="inline-flex items-center gap-2 bg-gold text-primary-foreground font-medium px-4 py-2 rounded-full text-sm shadow-gold">
            Agendar agora →
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export function Consultas() {
  return (
    <section
      id="consultas"
      className="relative py-24 md:py-32 bg-gradient-mystic"
    >
      {/* Decorative top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="uppercase tracking-[0.4em] text-xs text-gold">Rituais</span>
          <h2 className="font-display text-4xl md:text-6xl mt-3 mb-4">
            <span className="text-gradient-gold">Consultas</span>
          </h2>
          <p className="text-muted-foreground">
            Escolha o caminho que mais ressoa com sua alma. Cada carta é uma porta.
          </p>
        </motion.div>

        {/* Tempo */}
        <div className="mb-20">
          <h3 className="font-display text-2xl md:text-3xl text-gold-soft mb-2">
            Consultas agendadas por áudio
          </h3>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Atendimento por WhatsApp em horário marcado. Tire quantas perguntas quiser dentro do tempo escolhido.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {tempo.map((c, i) => (
              <TarotCard key={c.title} c={c} index={i} />
            ))}
          </div>
        </div>

        {/* Perguntas */}
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-gold-soft mb-2">
            Consultas sem agendamento
          </h3>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Receba a leitura por áudio ou texto. Perfeita para temas específicos e tiragens completas.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {perguntas.map((c, i) => (
              <TarotCard key={c.title} c={c} index={i} />
            ))}
          </div>
        </div>

        {/* CTA intermediário */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-lg md:text-xl font-display italic text-foreground/85 mb-6">
            Precisa de respostas <span className="text-gradient-gold">agora</span>?
          </p>
          <a
            href={`${WHATSAPP_BASE}${encodeURIComponent("Olá Lucy, quero atendimento imediato")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mystic inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground font-semibold px-8 py-4 rounded-full shadow-gold"
          >
            ⚡ Atendimento imediato
          </a>
        </motion.div>
      </div>
    </section>
  );
}
