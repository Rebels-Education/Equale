import { Link } from "wouter";
import { ArrowRight, Megaphone } from "lucide-react";

export default function AnnouncementBanner() {
  return (
    <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-3 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.2)_1px,transparent_0)] bg-[length:20px_20px]" />
      
      <div className="container relative flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2 font-bold animate-pulse">
          <Megaphone className="w-5 h-5" />
          <span className="uppercase tracking-wider text-sm">Atenção</span>
        </div>
        
        <p className="text-sm sm:text-base font-medium">
          Processo Seletivo 2026 para Cursinho Popular está aberto!
        </p>

        <Link href="/programas">
          <a className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white text-xs sm:text-sm font-bold py-1.5 px-4 rounded-full transition-all duration-300 backdrop-blur-sm group ml-0 sm:ml-2">
            Inscreva-se Agora
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Link>
      </div>
    </div>
  );
}
