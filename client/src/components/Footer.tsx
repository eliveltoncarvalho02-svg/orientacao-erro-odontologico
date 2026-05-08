import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white mt-20">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="text-lg font-bold mb-4">Sobre Este Site</h3>
            <p className="text-sm opacity-90">
              Um guia educativo sobre segurança na odontologia, desenvolvido para orientar pacientes sobre seus direitos e a importância da prevenção de erros.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#historia" className="hover:underline">História de Maria</a></li>
              <li><a href="#seguranca" className="hover:underline">Checklist de Segurança</a></li>
              <li><a href="#prevencao" className="hover:underline">Estratégias de Prevenção</a></li>
              <li><a href="#faq" className="hover:underline">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4">Informações</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contato@segurancaodontologica.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(11) 3000-0000</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 space-y-4">
          <div className="text-center text-sm opacity-90">
            <p className="font-semibold mb-2">Desenvolvido por:</p>
            <p>Elivelton • Matheus • Lucas • Rafaela • Edvan</p>
          </div>
          <p className="text-center text-xs opacity-80">
            © 2026 Segurança Odontológica. Trabalho da Disciplina de Ética e Odontologia Legal. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
