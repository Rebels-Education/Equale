import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Lightbulb, Users, Calendar, History } from "lucide-react";
import { Link } from "wouter";
import OptimizedImage from "@/components/ui/OptimizedImage";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-muted/30 py-20">
        <div className="container text-center space-y-6">
          <div className="flex justify-center">
            <Breadcrumbs 
              items={[{ label: "Quem Somos" }]} 
              className="mb-4"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">Quem Somos</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça a história e as pessoas por trás do Instituto Equale.
          </p>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-20 bg-background">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-primary">Nossa História</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                O Instituto Equale nasceu com um propósito claro: transformar a realidade educacional de Minas Gerais. Fundado em 2017, percebemos que havia uma força latente na educação popular que precisava ser canalizada.
              </p>
              <p>
                Até aquele momento, diversos cursinhos populares existiam na Região Metropolitana de Belo Horizonte — alguns desde as décadas de 80 e 90 — mas atuavam de forma isolada, sem conhecer a trajetória uns dos outros.
              </p>
              <p className="font-medium text-foreground">
                O grande ponto de virada aconteceu em 2018.
              </p>
              <p>
                Foi nesse ano que o Instituto Equale assumiu o papel de articulador, conectando essas iniciativas dispersas. Promovemos os primeiros encontros, onde voluntários puderam finalmente trocar experiências e dores. Desse movimento nasceu a <span className="text-primary font-bold">Rede de Cursinhos Populares de MG</span>.
              </p>
              <p>
                Hoje, somos uma associação sem fins lucrativos consolidada, que não apenas mantém seus próprios projetos, mas fortalece um ecossistema inteiro que atende mais de 1.000 estudantes todos os anos.
              </p>
            </div>
          </div>
          <div className="space-y-6">
             <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <OptimizedImage 
                src="/images/mentorship.jpg" 
                alt="Sessão de mentoria acadêmica do Instituto Equale, com mentores orientando estudantes em um ambiente colaborativo" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Timeline simples */}
            <div className="bg-muted/30 p-6 rounded-2xl border border-muted">
              <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
                <History className="h-5 w-5 text-primary" /> Marcos Importantes
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="font-bold text-primary w-12 shrink-0">2017</div>
                  <div className="text-sm text-muted-foreground">Fundação do Instituto Equale com foco em apoio a estudantes de baixa renda.</div>
                </li>
                <li className="flex gap-4">
                  <div className="font-bold text-primary w-12 shrink-0">2018</div>
                  <div className="text-sm text-muted-foreground">Criação da Rede de Cursinhos Populares MG e início da articulação entre iniciativas.</div>
                </li>
                <li className="flex gap-4">
                  <div className="font-bold text-primary w-12 shrink-0">2019</div>
                  <div className="text-sm text-muted-foreground">Expansão da rede e consolidação de parcerias com mais de 15 cursinhos.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Nossos Pilares</h2>
            <p className="text-muted-foreground">
              Os valores que guiam cada decisão e projeto do Instituto Equale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Missão",
                text: "Proporcionar qualidade e equidade na educação brasileira, contribuindo para um mundo com igualdade de oportunidades."
              },
              {
                icon: Lightbulb,
                title: "Visão",
                text: "Ser referência nacional em transformação social através da educação, criando pontes para o ensino superior."
              },
              {
                icon: Heart,
                title: "Paixão",
                text: "Acreditamos verdadeiramente no potencial de cada estudante e trabalhamos com amor para desenvolvê-lo."
              },
              {
                icon: Users,
                title: "Rede",
                text: "Nossa força está na união. Acreditamos que conectar iniciativas potencializa o impacto social."
              }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-heading font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl font-heading font-bold">Junte-se a Nós</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            O Instituto Equale é feito por pessoas apaixonadas pela educação. Quer fazer parte dessa história?
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/voluntario">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold rounded-full px-8">
                Seja Voluntário
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
