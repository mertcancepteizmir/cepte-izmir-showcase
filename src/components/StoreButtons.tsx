import { motion } from "framer-motion";

const APP_STORE_URL = "https://apps.apple.com/app/cepte-izmir/id6760907669";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.cepteizmircompany.cepteizmir";

interface StoreButtonsProps {
  className?: string;
  align?: "center" | "start";
}

const StoreButtons = ({ className = "", align = "center" }: StoreButtonsProps) => {
  const justify = align === "center" ? "justify-center" : "justify-start";

  return (
    <div className={`flex flex-col sm:flex-row items-center gap-3 ${justify} ${className}`}>
      {/* App Store */}
      <motion.a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="App Store'dan indir"
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex items-center gap-3 bg-foreground text-background rounded-xl px-5 py-3 shadow-lg hover:shadow-xl transition-shadow min-w-[180px]"
      >
        <svg viewBox="0 0 384 512" className="w-7 h-7 fill-current" aria-hidden="true">
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM256.4 84.5c30.1-35.8 27.4-68.4 26.5-80.5-26.6 1.5-57.4 18.1-74.9 38.5-19.3 21.9-30.6 49-28.2 79.9 28.8 2.2 55.1-12.6 76.6-37.9z" />
        </svg>
        <div className="flex flex-col leading-tight text-left">
          <span className="text-[10px] opacity-80">Şuradan İndirin</span>
          <span className="text-base font-semibold">App Store</span>
        </div>
      </motion.a>

      {/* Google Play */}
      <motion.a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Play'den indir"
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex items-center gap-3 bg-foreground text-background rounded-xl px-5 py-3 shadow-lg hover:shadow-xl transition-shadow min-w-[180px]"
      >
        <svg viewBox="0 0 512 512" className="w-7 h-7" aria-hidden="true">
          <path fill="#00d7fe" d="M99.8 12.7C92 17.4 87.5 25.9 87.5 36.6v438.7c0 10.7 4.5 19.2 12.3 23.9l253-249.6L99.8 12.7z" />
          <path fill="#ffce00" d="M412.3 220.3l-59.5-33.4-66.4 65.5 66.4 65.5 60.6-34c18.1-13.7 18.1-49.5-1.1-63.6z" />
          <path fill="#ff3a44" d="M352.8 325.9l-66.4-67.5-186.6 240c8 4.7 18.7 5.3 30.7-1.3l222.3-171.2z" />
          <path fill="#08a14b" d="M99.8 12.7l186.6 240 66.4-67.5L130.5 13.9c-5.6-3.1-10.9-4.5-15.8-4.5-5.5 0-10.4 1.5-14.9 3.3z" />
        </svg>
        <div className="flex flex-col leading-tight text-left">
          <span className="text-[10px] opacity-80">Şuradan İndirin</span>
          <span className="text-base font-semibold">Google Play</span>
        </div>
      </motion.a>
    </div>
  );
};

export default StoreButtons;
