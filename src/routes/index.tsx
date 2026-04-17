import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Consultas } from "@/components/landing/Consultas";
import { Depoimentos } from "@/components/landing/Depoimentos";
import { CTAFinal } from "@/components/landing/CTAFinal";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tarô das Bruxas · Lucy Kandac — Leituras Místicas Online" },
      {
        name: "description",
        content:
          "Consultas de tarô online com Lucy Kandac. Respostas profundas sobre amor, dinheiro e espiritualidade guiadas pela energia de Hécate.",
      },
      { property: "og:title", content: "Tarô das Bruxas · Lucy Kandac" },
      {
        property: "og:description",
        content:
          "Descubra os caminhos da sua alma através do antigo Tarô das Bruxas.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <About />
      <Consultas />
      <Depoimentos />
      <CTAFinal />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
