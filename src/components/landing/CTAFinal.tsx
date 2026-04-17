import { motion } from "framer-motion";

const WHATSAPP = "https://wa.me/5511999999999?text=Ol%C3%A1%20Lucy%2C%20quero%20agendar%20minha%20consulta";

export function CTAFinal() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--wine)]/15 to-transparent" />
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gold/10 blur-3xl animate-glow-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 text-center relative z-10 max-w-3xl"
      >
        <span className="uppercase tracking-[0.4em] text-xs text-gold">Última encruzilhada</span>
        <h2 className="font-display text-5xl md:text-7xl my-6 leading-tight">
          Agende sua{" "}
          <span className="text-gradient-gold italic">consulta</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Tire suas dúvidas sobre amor, futuro, decisões e espiritualidade.
          Saiba o que as cartas têm a dizer e busque o caminho da felicidade
          e paz interior.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mystic inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground font-semibold px-8 py-4 rounded-full shadow-gold w-full sm:w-auto justify-center"
          >
            💬 WhatsApp
          </a>
          <a
            href="mailto:lucykandac@taro.com"
            className="btn-mystic inline-flex items-center gap-3 bg-transparent border border-gold/60 text-gold-soft font-semibold px-8 py-4 rounded-full w-full sm:w-auto justify-center hover:bg-gold/10"
          >
            ✉ E-mail
          </a>
        </div>

        <p className="mt-10 text-xs text-muted-foreground/70 italic">
          🌙 Atendimento todos os dias · Sigilo absoluto
        </p>
      </motion.div>
    </section>
  );
}
