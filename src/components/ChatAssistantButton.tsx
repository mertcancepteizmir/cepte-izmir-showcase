import { MessageCircle } from "lucide-react";

const ChatAssistantButton = () => {
  const handleClick = () => {
    const toggle = document.querySelector(".n8n-chat .chat-toggle") as HTMLElement | null;
    toggle?.click();
  };

  return (
    <button
      onClick={handleClick}
      aria-label="İletişim asistanı"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full gradient-primary opacity-75 animate-ping" />
      <span className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full gradient-primary text-primary-foreground shadow-glow transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      </span>
    </button>
  );
};

export default ChatAssistantButton;
