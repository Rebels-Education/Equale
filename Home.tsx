import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, GraduationCap, Users, Heart, School, BookOpen, Target, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEO from "@/components/SEO";
import OptimizedImage from "@/components/ui/OptimizedImage";

export default function Home() {
  return (
    <Layout>
      <SEO 
        title="Início" 
        description="O Instituto Equale transforma vidas através da educação, oferecendo cursinhos populares gratuitos e apoio a estudantes de escolas públicas."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-background">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Processo Seletivo 2026 Aberto
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-foreground leading-[1.1]">
                Construindo um <span className="text-primary relative inline-block">
                  Futuro
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span> com <br/>
                Oportunidades Iguais
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                O Instituto Equale transforma vidas através da educação. 
                Fortalecemos comunidades e criamos pontes para que estudantes da 
                rede pública alcancem seus sonhos.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/programas">
                  <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 w-full sm:w-auto">
                    Nossos Programas
                  </Button>
                </Link>
                <Link href="/doar">
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-secondary/10 w-full sm:w-auto">
                    Quero Ajudar
                  </Button>
                </Link>
              </div>

              <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>+5.000 Alunos Impactados</span>
                </div>
                <div className="flex items-center gap-2">
                  <School className="w-5 h-5 text-primary" />
                  <span>15 Cursinhos Parceiros</span>
                </div>
              </div>
            </div>

            <div className="flex-1 relative w-full max-w-[600px] lg:max-w-none">
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-muted">
                <OptimizedImage 
                  src="/images/students-group.jpg" 
                  alt="Grupo diversificado de estudantes do Instituto Equale sorrindo e celebrando a aprovação no vestibular" 
                  priority={true} // Critical hero image
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                  <p className="font-bold text-lg">"O cursinho mudou minha perspectiva de vida."</p>
                  <p className="text-sm opacity-90">- Ana Clara, aprovada em Medicina UFMG</p>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">92% de Aprovação</p>
                    <p className="text-xs text-muted-foreground">Em universidades públicas</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "12", label: "Anos de História" },
              { number: "5k+", label: "Vidas Transformadas" },
              { number: "15", label: "Polos de Ensino" },
              { number: "300+", label: "Voluntários Ativos" }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-bold font-heading">{stat.number}</h3>
                <p className="text-primary-foreground/80 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary">Nossos Pilares de Atuação</h2>
            <p className="text-lg text-muted-foreground">
              Trabalhamos em diversas frentes para garantir que a educação de qualidade chegue a quem mais precisa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Cursinhos Populares",
                desc: "Apoio pedagógico e estrutural para cursinhos comunitários em diversas regiões.",
                link: "/programas"
              },
              {
                icon: GraduationCap,
                title: "Mentoria Acadêmica",
                desc: "Acompanhamento individualizado para orientar os estudantes em sua jornada.",
                link: "/programas"
              },
              {
                icon: Heart,
                title: "Apoio Psicossocial",
                desc: "Suporte emocional e social para garantir a permanência e o bem-estar dos alunos.",
                link: "/programas"
              }
            ].map((card, idx) => (
              <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-none shadow-md bg-background">
                <CardContent className="p-8 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <card.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.desc}
                  </p>
                  <Link href={card.link}>
                    <Button variant="link" className="p-0 h-auto font-bold text-primary group-hover:gap-2 transition-all">
                      Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium">
              <HelpCircle className="w-4 h-4" />
              <span>Dúvidas Frequentes</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">Perguntas Comuns</h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre o funcionamento do Instituto Equale e nossos programas.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                question: "Os cursinhos são realmente gratuitos?",
                answer: "Sim! Todos os cursinhos parceiros do Instituto Equale são 100% gratuitos para os estudantes selecionados. Nosso objetivo é democratizar o acesso ao ensino superior."
              },
              {
                question: "Quem pode participar dos processos seletivos?",
                answer: "Nossos programas são voltados prioritariamente para estudantes de escolas públicas, de baixa renda, pretos, pardos e indígenas. Cada edital possui critérios específicos de seleção."
              },
              {
                question: "Como posso me tornar um professor voluntário?",
                answer: "Estamos sempre em busca de novos talentos! Acesse a página 'Seja Voluntário' no menu principal, preencha o formulário com sua disponibilidade e área de interesse. Nossa equipe entrará em contato."
              },
              {
                question: "Onde acontecem as aulas?",
                answer: "Temos polos parceiros em diversas regiões. Alguns cursinhos funcionam em escolas estaduais, outros em centros comunitários ou universidades. Consulte a página de cada programa para ver o endereço específico."
              },
              {
                question: "O Instituto oferece material didático?",
                answer: "Sim, trabalhamos para fornecer material didático de qualidade, além de simulados e acesso a plataformas de apoio, dependendo das parcerias vigentes em cada ano letivo."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4 bg-muted/20">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 container">
        <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-center text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.png')] opacity-10"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">Faça parte dessa transformação</h2>
            <p className="text-xl opacity-90">
              Seja como aluno, voluntário ou doador, sua participação é fundamental para continuarmos mudando histórias.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link href="/voluntario">
                <Button size="lg" variant="secondary" className="h-14 px-8 text-lg rounded-full font-bold text-primary hover:bg-white">
                  Quero ser Voluntário
                </Button>
              </Link>
              <Link href="/doar">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full border-2 border-white bg-transparent hover:bg-white/10">
                  Fazer uma Doação
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
