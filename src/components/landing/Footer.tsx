export function Footer() {
  return (
    <footer className="border-t border-gold/15 py-8 text-center">
      <div className="container mx-auto px-6">
        <p className="font-display text-2xl text-gradient-gold mb-2">Tarô das Bruxas</p>
        <p className="text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} Lucy Kandac · Todos os direitos reservados · Sob a luz de Hécate 🌙
        </p>
      </div>
    </footer>
  );
}
