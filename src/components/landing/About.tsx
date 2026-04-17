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
            <span className="text-gradient-gold italic">Lucy Kandac</span>
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Utilizo o tarô como uma ferramenta de autoconhecimento e
              reflexão, sendo cada consulta sensível e profunda. Há anos
              caminho lado a lado com as cartas, aprendendo e
              compartilhando seus ensinamentos.
            </p>
            <p>
              Sou taróloga e também bruxa, tecendo magia nas entrelinhas
              da vida. Após cada consulta, posso indicar benfeitorias,
              rituais e práticas energéticas para harmonizar corpo, mente
              e espírito, tudo conforme a maneira que você estiver vivendo.
            </p>
            <p>
              As consultas são enviadas por áudio ou texto, conforme sua
              preferência, para que você tenha todo o registro. Bem
              sempre as mensagens fazem sentido de imediato, e é natural
              que alguns detalhes se revelem com o tempo, por isso
              acredite que você deve ter a liberdade de ouvir ou rever
              quantas vezes quiser. Confio profundamente no meu trabalho
              e na sabedoria do Tarô.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
