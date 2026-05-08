import { Heart } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Header() {
  const [location, navigate] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo e título */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
            <Heart className="w-6 h-6 text-white" fill="white" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-foreground">Segurança Odontológica</h1>
            <p className="text-xs text-muted-foreground">Guia para Pacientes</p>
            <p className="text-xs text-primary font-semibold">Ética e Odontologia Legal</p>
          </div>
        </button>

        {/* Navegação */}
        <nav className="flex items-center gap-6">
          <button
            onClick={() => navigate('/')}
            className={`text-sm font-medium transition-colors ${
              location === '/' 
                ? 'text-primary' 
                : 'text-foreground hover:text-primary'
            }`}
          >
            Início
          </button>
          <button
            onClick={() => navigate('/#historia')}
            className={`text-sm font-medium transition-colors text-foreground hover:text-primary`}
          >
            História de Maria
          </button>
          <button
            onClick={() => navigate('/#seguranca')}
            className={`text-sm font-medium transition-colors text-foreground hover:text-primary`}
          >
            Segurança
          </button>
          <button
            onClick={() => navigate('/#faq')}
            className={`text-sm font-medium transition-colors text-foreground hover:text-primary`}
          >
            Dúvidas
          </button>
        </nav>
      </div>
    </header>
  );
}
