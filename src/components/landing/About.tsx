import { motion } from "framer-motion";
import portrait from "@/assets/lucy-portrait.jpg";

export function About() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative mx-auto md:mx-0 max-w-md"
        >
          <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-full" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-mystic border border-gold/30">
            <img src={portrait} alt="Lucy Kandac, taróloga e bruxa moderna" className="w-full h-auto" loading="lazy" width={768} height={960} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-card/90 backdrop-blur-sm border border-gold/30 px-6 py-3 rounded-2xl shadow-gold">
            <p className="text-xs uppercase tracking-widest text-gold">Sacerdotisa</p>
            <p className="font-display text-xl">Lucy Kandac</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <span className="inline-block uppercase tracking-[0.4em] text-xs text-gold mb-4">
            Quem sou
          </span>
          <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
            Bruxa moderna,{" "}
            <span className="text-gradient-gold italic">sensitiva</span> e
            guardiã das cartas
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Há mais de uma década caminho ao lado de Hécate, a deusa das
              encruzilhadas. O Tarô das Bruxas é minha linguagem para traduzir
              os sussurros do invisível em respostas claras para a sua vida.
            </p>
            <p>
              Cada consulta é um ritual. Acendo velas, invoco proteção e me
              conecto à sua energia para revelar verdades que sua alma já sabe —
              mas que sua mente ainda não ousou ouvir.
            </p>
            <p>
              Não prometo previsões mágicas. Entrego{" "}
              <span className="text-gold-soft">clareza</span>,{" "}
              <span className="text-gold-soft">direção</span> e{" "}
              <span className="text-gold-soft">poder</span> para você decidir o
              próximo passo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
