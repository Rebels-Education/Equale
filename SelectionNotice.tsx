import { motion } from "framer-motion";
import { Calendar, FileText, CheckCircle, HelpCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SelectionNotice() {
  const notices = [
    {
      name: "Equalizar (UFMG)",
      city: "Belo Horizonte",
      status: "Aberto",
      period: "17/11/2025 a 15/01/2026",
      link: "https://equalizar.org",
      color: "bg-green-500"
    },
    {
      name: "UFV Popular",
      city: "Viçosa",
      status: "Aberto",
      period: "20/01/2026 a 20/02/2026",
      link: "https://www.pre.ufv.br",
      color: "bg-green-500"
    },
    {
      name: "Guimarães Rosa",
      city: "Belo Horizonte",
      status: "Aberto",
      period: "Até 30/01/2026",
      link: "https://guimaraesrosa.org",
      color: "bg-green-500"
    },
    {
      name: "AFIN (UFU)",
      city: "Uberlândia",
      status: "Em Breve",
      period: "Fev/2026",
      link: "https://proexc.ufu.br/programa/afin",
      color: "bg-yellow-500"
    },
    {
      name: "Dom Quixote",
      city: "Belo Horizonte",
      status: "Em Breve",
      period: "Mar/2026",
      link: "https://www.letras.ufmg.br",
      color: "bg-yellow-500"
    },
    {
      name: "Rede Emancipa",
      city: "Vários",
      status: "Em Breve",
      period: "Fev/2026",
      link: "https://emancipa.org.br",
      color: "bg-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16 mb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/20 text-primary bg-primary/5">
              Processo Seletivo 2026
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Edital Unificado de Seleção
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Simplificamos o acesso à informação. Confira as diretrizes gerais, requisitos e o calendário unificado dos processos seletivos dos nossos cursinhos parceiros.
            </p>
            <Button size="lg" className="font-bold gap-2" asChild>
              <a href="/edital-oficial">
                <FileText className="w-5 h-5" /> Ler Edital Oficial Completo
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* General Requirements */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl">Requisitos Gerais</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Embora cada cursinho possa ter suas especificidades, os critérios fundamentais para participação na rede incluem:
                  </p>
                  <ul className="space-y-3 list-disc pl-5">
                    <li>
                      <strong className="text-foreground">Escolaridade:</strong> Ter concluído ou estar cursando o 3º ano do Ensino Médio em escola pública. Bolsistas integrais de escolas particulares também são elegíveis mediante comprovação.
                    </li>
                    <li>
                      <strong className="text-foreground">Renda Socioeconômica:</strong> Comprovação de renda familiar per capita de até 1,5 salário mínimo.
                    </li>
                    <li>
                      <strong className="text-foreground">Disponibilidade:</strong> Ter disponibilidade para frequentar as aulas presenciais nos horários ofertados (noturno ou integral) e participar dos simulados aos sábados.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.section>

            {/* Documentation */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <FileText className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl">Documentação Necessária</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Prepare-se com antecedência! A maioria dos processos exigirá cópias digitais ou físicas dos seguintes documentos:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    {[
                      "RG e CPF (candidato e familiares)",
                      "Comprovante de residência atualizado",
                      "Histórico Escolar ou declaração",
                      "Comprovantes de renda familiar",
                      "Comprovante CadÚnico (se houver)"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 rounded-md bg-muted/50 border border-border/50">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm font-medium text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* FAQ */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <HelpCircle className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl">Dúvidas Frequentes</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Posso me inscrever em mais de um cursinho?</h4>
                    <p className="text-muted-foreground text-sm">
                      Sim! Recomendamos que você se inscreva em todos os cursinhos que sejam viáveis para sua localização e horário, aumentando suas chances de conseguir uma vaga.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">É cobrada alguma taxa?</h4>
                    <p className="text-muted-foreground text-sm">
                      A maioria dos cursinhos da rede é 100% gratuita. Alguns podem cobrar uma taxa simbólica de inscrição (ex: R$ 15,00) para custeio do processo seletivo, mas oferecem isenção para quem não puder pagar.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Como saberei se fui aprovado?</h4>
                    <p className="text-muted-foreground text-sm">
                      Os resultados são divulgados nos sites oficiais e redes sociais de cada cursinho. Mantenha seus contatos (e-mail e telefone) sempre atualizados no momento da inscrição.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

          </div>

          {/* Sidebar - Calendar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <Card className="border-primary/20 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">Calendário 2026</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Datas previstas para os principais processos seletivos.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {notices.map((notice, index) => (
                    <div key={index} className="group p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-all">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                          {notice.name}
                        </h4>
                        <Badge variant="secondary" className={`text-xs ${notice.status === 'Aberto' ? 'bg-green-500/10 text-green-600 border-green-200' : 'bg-yellow-500/10 text-yellow-600 border-yellow-200'}`}>
                          {notice.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                        <span className="font-medium text-foreground">Cidade:</span> {notice.city}
                      </p>
                      <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                        <span className="font-medium text-foreground">Período:</span> {notice.period}
                      </p>
                      <Button variant="outline" size="sm" className="w-full text-xs h-8" asChild>
                        <a href={notice.link} target="_blank" rel="noopener noreferrer">
                          Acessar Edital <ExternalLink className="w-3 h-3 ml-2" />
                        </a>
                      </Button>
                    </div>
                  ))}
                  
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-xs text-center text-muted-foreground">
                      * As datas podem sofrer alterações pelos coordenadores locais sem aviso prévio.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
