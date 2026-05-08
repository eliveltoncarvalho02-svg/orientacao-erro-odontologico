import { Heart } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Header() {
  const [location, navigate] = useLocation();

  return (
    <>
      {/* Top Bar com Logo da Faculdade e Créditos */}
      <div className="bg-black text-white py-3 border-b border-black/80">
        <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/manus-storage/logo-faculdade-serra-dourada_ac4fa23f.webp" alt="Faculdade Serra Dourada" className="h-12" />
            <div className="text-sm">
              <p className="font-semibold">Desenvolvido por:</p>
              <p className="text-xs opacity-90">Elivelton • Matheus • Lucas • Rafaela • Edvan</p>
            </div>
          </div>
          <p className="text-xs opacity-75 hidden md:block">Disciplina: Ética e Odontologia Legal</p>
        </div>
      </div>

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
    </>
  );
}
