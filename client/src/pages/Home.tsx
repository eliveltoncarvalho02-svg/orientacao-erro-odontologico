import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertCircle, CheckCircle, Heart, Shield, Users, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20 overflow-hidden">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    Sua Segurança é Nossa Prioridade
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Aprenda sobre segurança na odontologia e conheça seus direitos como paciente
                  </p>
                </div>
                <p className="text-lg text-foreground leading-relaxed">
                  Este guia educativo apresenta informações essenciais sobre prevenção de erros odontológicos, baseado em casos reais e desenvolvido para orientar pacientes.
                </p>
                <div className="flex gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white"
                    onClick={() => document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Conheça a História de Maria
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => document.getElementById('seguranca')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Checklist de Segurança
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663192280899/BCLLviXCguamVxEAhkGaQ4/hero-dental-safety-aVACnYmdT4sGbGyKs5Y6Ra.webp" 
                  alt="Segurança Odontológica" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção: História de Maria */}
        <section id="historia" className="py-20 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">A História de Maria</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Um exemplo real de como um erro odontológico pode impactar a vida de um paciente
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-12">
              {/* Antes */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <img 
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663192280899/BCLLviXCguamVxEAhkGaQ4/maria-story-before-ftP3o3CXoeywHaTwVLXhkr.webp" 
                    alt="Maria antes do procedimento" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="order-1 lg:order-2 space-y-4">
                  <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full font-semibold">
                    Antes do Procedimento
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Maria, 35 anos</h3>
                  <p className="text-foreground leading-relaxed">
                    Maria procurou um dentista para realizar um tratamento de canal em um molar inferior que estava causando dor. Ela tinha esperança de resolver o problema e voltar à sua vida normal.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Infelizmente, durante o procedimento, o dentista cometeu erros graves por falta de atenção e pressa (imprudência).
                  </p>
                </div>
              </div>

              {/* O Erro */}
              <div className="bg-accent/50 border-l-4 border-primary p-8 rounded-lg">
                <div className="flex gap-4">
                  <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-3">O Que Aconteceu?</h4>
                    <ul className="space-y-2 text-foreground">
                      <li>• Não isolou adequadamente o dente</li>
                      <li>• Utilizou a broca de forma incorreta, perfurando a raiz</li>
                      <li>• Atingiu o osso adjacente</li>
                      <li>• A obturação do canal foi feita de maneira incompleta</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Consequências */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full font-semibold">
                    Consequências
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">O Impacto na Vida de Maria</h3>
                  <p className="text-foreground leading-relaxed">
                    O erro resultou em uma série de problemas que afetaram profundamente a saúde física, emocional e financeira de Maria.
                  </p>
                </div>
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663192280899/BCLLviXCguamVxEAhkGaQ4/maria-story-consequences-GCvDPQh2RJMQXHtxjsx.webp" 
                  alt="Consequências do erro" 
                  className="rounded-lg shadow-lg"
                />
              </div>

              {/* Danos Detalhados */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 border-l-4 border-primary card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-foreground">Danos Físicos</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• Dor crônica intensa</li>
                    <li>• Infecção bacteriana grave</li>
                    <li>• Perda do dente permanente</li>
                    <li>• Necessidade de implante dentário</li>
                    <li>• Custos adicionais altos</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-primary card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-foreground">Danos Estéticos</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• Alteração no contorno facial</li>
                    <li>• Preocupação com a aparência</li>
                    <li>• Impacto na autoestima</li>
                    <li>• Dificuldade em sorrir com confiança</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-primary card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-foreground">Danos Psicológicos</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• Ansiedade e estresse severos</li>
                    <li>• Perda de confiança nos dentistas</li>
                    <li>• Frustração e depressão</li>
                    <li>• Medo de novos tratamentos</li>
                    <li>• Qualidade de vida afetada</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Checklist de Segurança */}
        <section id="seguranca" className="py-20 bg-accent/30">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Checklist de Segurança</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pontos importantes para garantir sua segurança como paciente
              </p>
            </div>

            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663192280899/BCLLviXCguamVxEAhkGaQ4/dental-safety-checklist-SCCsXoNSBsiWGHKPcRqbMk.webp" 
              alt="Checklist de Segurança Odontológica" 
              className="rounded-lg shadow-lg w-full mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white card-hover">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Faça Perguntas</h4>
                    <p className="text-sm text-muted-foreground">
                      Não hesite em questionar o dentista sobre o procedimento, riscos, benefícios e alternativas. Você tem direito a informações claras.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white card-hover">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Entenda Tudo</h4>
                    <p className="text-sm text-muted-foreground">
                      Peça explicações em linguagem simples. Se não entender algo, peça para o dentista explicar novamente.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white card-hover">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Consentimento Informado</h4>
                    <p className="text-sm text-muted-foreground">
                      Exija um termo de consentimento claro e documentado antes de qualquer procedimento invasivo.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white card-hover">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Registros Completos</h4>
                    <p className="text-sm text-muted-foreground">
                      Solicite cópias de seus registros dentários, incluindo diagnósticos, tratamentos realizados e exames.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white card-hover">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Profissionalismo</h4>
                    <p className="text-sm text-muted-foreground">
                      Verifique as credenciais do profissional e se ele mantém-se atualizado com as práticas atuais.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white card-hover">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Confiança e Comunicação</h4>
                    <p className="text-sm text-muted-foreground">
                      Escolha um dentista com quem você se sinta confortável e que ouça suas preocupações.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Seção: Estratégias de Prevenção */}
        <section id="prevencao" className="py-20 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Estratégias de Prevenção</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Como os profissionais podem evitar erros e garantir sua segurança
              </p>
            </div>

            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663192280899/BCLLviXCguamVxEAhkGaQ4/prevention-strategies-HS2VQEBDT39vjDeG3FWcox.webp" 
              alt="Estratégias de Prevenção" 
              className="rounded-lg shadow-lg w-full mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-accent/50 card-hover">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Planejamento Rigoroso</h4>
                    <p className="text-sm text-foreground">
                      Diagnóstico preciso, exames complementares quando necessário, e elaboração de plano de tratamento detalhado.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-accent/50 card-hover">
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Atualização Profissional</h4>
                    <p className="text-sm text-foreground">
                      Participação em cursos, congressos e leitura de literatura científica para manter-se atualizado.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-accent/50 card-hover">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Comunicação Eficaz</h4>
                    <p className="text-sm text-foreground">
                      Explicações claras aos pacientes, alinhamento de expectativas e estabelecimento de relacionamento de confiança.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-accent/50 card-hover">
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Trabalho em Equipe</h4>
                    <p className="text-sm text-foreground">
                      Colaboração com outros profissionais, busca de segunda opinião em casos complexos e compartilhamento de conhecimento.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-accent/50 card-hover">
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Documentação Completa</h4>
                    <p className="text-sm text-foreground">
                      Prontuário detalhado, termo de consentimento claro e documentação arquivada adequadamente.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-accent/50 card-hover">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Ética Profissional</h4>
                    <p className="text-sm text-foreground">
                      Compromisso com a excelência, respeito aos direitos do paciente e responsabilidade profissional.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Seção: FAQ */}
        <section id="faq" className="py-20 bg-accent/30">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Perguntas Frequentes</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dúvidas comuns sobre segurança odontológica
              </p>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              <Card className="p-6 bg-white card-hover">
                <h4 className="font-bold text-foreground mb-2">O que é considerado um erro odontológico?</h4>
                <p className="text-sm text-muted-foreground">
                  Um erro odontológico é uma conduta inadequada que resulta em prejuízo ao paciente, decorrente de falhas no processo de diagnóstico, planejamento ou execução de tratamentos.
                </p>
              </Card>

              <Card className="p-6 bg-white">
                <h4 className="font-bold text-foreground mb-2">Qual é a diferença entre erro e intercorrência?</h4>
                <p className="text-sm text-muted-foreground">
                  Uma intercorrência é uma complicação esperada e aceitável dentro dos riscos inerentes ao procedimento. Um erro é uma falha evitável que representa desvio do padrão de cuidado esperado.
                </p>
              </Card>

              <Card className="p-6 bg-white">
                <h4 className="font-bold text-foreground mb-2">Posso processar um dentista por erro?</h4>
                <p className="text-sm text-muted-foreground">
                  Sim. Se você sofreu danos comprovados por um erro odontológico, tem direito a buscar indenização através de ações judiciais. Recomenda-se consultar um advogado especializado.
                </p>
              </Card>

              <Card className="p-6 bg-white">
                <h4 className="font-bold text-foreground mb-2">Como posso proteger meus direitos como paciente?</h4>
                <p className="text-sm text-muted-foreground">
                  Faça perguntas, exija consentimento informado documentado, mantenha cópias de seus registros dentários, e escolha profissionais qualificados e de confiança.
                </p>
              </Card>

              <Card className="p-6 bg-white">
                <h4 className="font-bold text-foreground mb-2">O que fazer se suspeitar de um erro?</h4>
                <p className="text-sm text-muted-foreground">
                  Procure uma segunda opinião com outro profissional, mantenha registros de todos os sintomas e procedimentos, e considere consultar um advogado especializado em direito odontológico.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Sua Segurança é Nossa Responsabilidade</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Pacientes informados e profissionais comprometidos com a excelência criam um ambiente de segurança e confiança na odontologia.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100"
            >
              Compartilhe Este Guia
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
