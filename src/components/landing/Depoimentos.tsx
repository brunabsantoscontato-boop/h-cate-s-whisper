import { motion } from "framer-motion";

type Msg = { from: "client" | "lucy"; text: string };

const conversas: { name: string; messages: Msg[] }[] = [
  {
    name: "Ana · Reconciliação",
    messages: [
      { from: "client", text: "Lucy, ele me ligou ontem 😭 exatamente como você disse!" },
      { from: "client", text: "Estou sem palavras, voltamos a conversar." },
      { from: "lucy", text: "As cartas nunca mentem. Que Hécate continue iluminando vocês ✨" },
    ],
  },
  {
    name: "Marina · Carreira",
    messages: [
      { from: "client", text: "Recebi a proposta!! 🙌" },
      { from: "client", text: "Você previu até o mês certo, é impressionante." },
      { from: "lucy", text: "Que orgulho de você! Sua coragem fez metade do trabalho 🌙" },
    ],
  },
  {
    name: "Bia · Clareza",
    messages: [
      { from: "client", text: "Saí da consulta outra pessoa." },
      { from: "client", text: "Finalmente entendi por que estava travada." },
      { from: "lucy", text: "Esse era o objetivo, querida. Te abraço com luz 💜" },
    ],
  },
  {
    name: "Júlia · Espiritualidade",
    messages: [
      { from: "client", text: "Comecei o ritual que você indicou e mudou TUDO." },
      { from: "client", text: "Me sinto protegida pela primeira vez em anos." },
      { from: "lucy", text: "Sua intuição estava te chamando há tempos. Agora é só caminhar 🔮" },
    ],
  },
  {
    name: "Camila · Amor próprio",
    messages: [
      { from: "client", text: "Decidi terminar. As cartas mostraram quem ele realmente era." },
      { from: "client", text: "Doeu, mas estou livre. Obrigada por ser tão honesta." },
      { from: "lucy", text: "Você se escolheu. Isso é o ato mais bruxo que existe 🌹" },
    ],
  },
  {
    name: "Renata · Decisão",
    messages: [
      { from: "client", text: "Aceitei a mudança de cidade!" },
      { from: "client", text: "Sua leitura foi o empurrão que faltava." },
      { from: "lucy", text: "Novos portais se abrindo. Boa jornada, minha querida ✨" },
    ],
  },
];

export function Depoimentos() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="uppercase tracking-[0.4em] text-xs text-gold">Vozes da tribo</span>
          <h2 className="font-display text-4xl md:text-6xl mt-3">
            <span className="text-gradient-gold">Depoimentos</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Conversas reais de quem deixou as cartas falarem.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conversas.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="bg-gradient-card border border-gold/20 rounded-2xl p-5 shadow-mystic"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gold/15">
                <p className="text-sm font-medium text-gold-soft">{c.name}</p>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  WhatsApp
                </span>
              </div>
              <div className="space-y-2">
                {c.messages.map((m, j) => (
                  <div
                    key={j}
                    className={`max-w-[85%] text-sm leading-relaxed px-3 py-2 rounded-2xl ${
                      m.from === "client"
                        ? "bg-secondary/60 text-foreground/90 rounded-bl-sm"
                        : "bg-gold/15 text-gold-soft ml-auto rounded-br-sm border border-gold/20"
                    }`}
                  >
                    {m.text}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
