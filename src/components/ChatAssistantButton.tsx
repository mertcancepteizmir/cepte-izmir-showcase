import { Headphones } from "lucide-react";

const ChatAssistantButton = () => {
  const handleClick = () => {
    const toggle = document.querySelector(".n8n-chat .chat-toggle") as HTMLElement | null;
    toggle?.click();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group">
      {/* Hover label */}
      <div className="hidden md:flex items-center opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
        <div className="glass shadow-card rounded-full pl-4 pr-5 py-2.5 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-semibold text-foreground">Canlı Destek</span>
            <span className="text-[10px] text-muted-foreground">Genellikle dakikalar içinde yanıtlar</span>
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleClick}
        aria-label="Canlı destek asistanını aç"
        className="relative"
      >
        {/* Soft glow */}
        <span className="absolute -inset-2 rounded-full bg-primary/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Main circle */}
        <span className="relative flex items-center justify-center w-14 h-14 rounded-full gradient-primary text-primary-foreground shadow-card-hover ring-1 ring-white/30 transition-all duration-300 group-hover:scale-105 group-active:scale-95">
          <Headphones className="w-6 h-6" strokeWidth={2.25} />
        </span>

        {/* Online indicator */}
        <span className="absolute bottom-0.5 right-0.5 flex h-3.5 w-3.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
          <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-background" />
        </span>
      </button>
    </div>
  );
};

export default ChatAssistantButton;
