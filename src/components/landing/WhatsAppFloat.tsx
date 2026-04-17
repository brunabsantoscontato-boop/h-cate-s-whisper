export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Ol%C3%A1%20Lucy%2C%20quero%20uma%20consulta"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-gold/40 blur-xl group-hover:bg-gold/60 transition" />
      <span className="relative flex items-center gap-2 bg-gradient-gold text-primary-foreground font-semibold pl-4 pr-5 py-3 rounded-full shadow-gold animate-glow-pulse">
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
          <path d="M20.52 3.48A11.93 11.93 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.86 11.86 0 0 0 5.64 1.44h.01c6.54 0 11.84-5.3 11.84-11.84a11.8 11.8 0 0 0-3.37-8.44ZM12.05 21.5h-.01a9.6 9.6 0 0 1-4.9-1.34l-.35-.21-3.8 1 1.02-3.7-.23-.38a9.6 9.6 0 1 1 17.84-5.04 9.6 9.6 0 0 1-9.57 9.67Zm5.27-7.2c-.29-.15-1.71-.85-1.97-.94-.27-.1-.46-.15-.65.14-.2.29-.75.94-.92 1.13-.17.2-.34.22-.63.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.43-1.71-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.2.05-.36-.02-.51-.07-.14-.65-1.57-.9-2.15-.23-.56-.47-.48-.65-.49l-.55-.01a1.05 1.05 0 0 0-.76.36c-.26.29-1 .98-1 2.4 0 1.41 1.03 2.78 1.17 2.97.14.2 2.02 3.08 4.9 4.32.69.3 1.22.47 1.63.6.69.22 1.31.19 1.8.12.55-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.2-.55-.34Z"/>
        </svg>
        <span className="hidden sm:inline">WhatsApp</span>
      </span>
    </a>
  );
}
