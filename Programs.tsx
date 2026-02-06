import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Users, School, MapPin, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import ProgramsMap from "@/components/ProgramsMap";
import { partnersData } from "@/data/partners";
import OptimizedImage from "@/components/ui/OptimizedImage";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function Programs() {
  // Convert partnersData object to array for mapping
  const cursinhos = Object.values(partnersData).map(partner => ({
    name: partner.name,
    location: partner.location.split("-")[0].trim(), // Simplifies location for card
    students: partner.stats?.students || "Vagas Variáveis",
    description: partner.description,
    tags: [partner.stats?.since || "Parceiro", partner.stats?.students || "MG"], // Generate tags from stats
    link: `/parceiros/${partner.id}`
  }));

  return (
    <Layout>
      {/* Header */}
      <section className="bg-muted/30 py-20">
        <div className="container text-center space-y-6">
          <div className="flex justify-center">
            <Breadcrumbs 
              items={[{ label: "Programas" }]} 
              className="mb-4"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">Nossos Programas</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça as iniciativas que estão transformando a educação em Minas Gerais através da união e colaboração.
          </p>
        </div>
      </section>

      {/* Rede de Cursinhos - Destaque */}
      <section className="py-20 bg-background">
        <div className="container space-y-16">
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Users className="w-4 h-4" />
                <span>Maior Rede de MG</span>
              </div>
              <h2 className="text-3xl font-heading font-bold">Rede de Cursinhos Populares</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Desde 2018, o Instituto Equale atua como o elo conector de mais de 20 cursinhos populares na Região Metropolitana de BH e interior de Minas. Antes isoladas, hoje essas iniciativas trocam experiências e potencializam seu impacto.
              </p>
              
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="bg-muted/50 p-4 rounded-xl text-center">
                  <h3 className="text-3xl font-bold text-primary">+1.500</h3>
                  <p className="text-sm text-muted-foreground">Alunos atendidos/ano</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-xl text-center">
                  <h3 className="text-3xl font-bold text-primary">{cursinhos.length}</h3>
                  <p className="text-sm text-muted-foreground">Cursinhos Mapeados</p>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  "Unificação de simulados e materiais",
                  "Formação continuada de voluntários",
                  "Eventos de integração entre alunos",
                  "Suporte jurídico e administrativo"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl bg-muted">
              <OptimizedImage 
                src="/images/hero-students.jpg" 
                alt="Grupo de estudantes da Rede de Cursinhos Populares de MG reunidos em evento de integração" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mapa de Localização */}
          <div className="py-12">
            <div className="text-center mb-8 space-y-2">
              <h3 className="text-2xl font-heading font-bold">Encontre o Cursinho mais Próximo</h3>
              <p className="text-primary font-medium text-lg">
                Atualmente, nossa rede conta com <span className="font-bold text-2xl">{cursinhos.length}</span> cursinhos populares em toda Minas Gerais.
              </p>
            </div>
            <ProgramsMap />
          </div>

          {/* Grid de Cursinhos Parceiros */}
          <div className="pt-12">
            <h3 className="text-2xl font-heading font-bold mb-8 text-center">Conheça nossos parceiros</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cursinhos.map((cursinho, index) => (
                <Card key={index} className="hover:shadow-lg transition-all border-muted group flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <School className="h-5 w-5" />
                      </div>
                      <Badge variant="secondary" className="font-normal truncate max-w-[120px]">
                        {cursinho.students}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl line-clamp-1" title={cursinho.name}>{cursinho.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1 line-clamp-1" title={cursinho.location}>
                      <MapPin className="h-3 w-3 shrink-0" /> {cursinho.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground text-sm mb-4 min-h-[60px] line-clamp-3">
                      {cursinho.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cursinho.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground font-medium truncate max-w-[100px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-auto">
                      <Link href={cursinho.link}>
                        <Button variant="outline" className="w-full rounded-full group-hover:bg-primary group-hover:text-primary-foreground border-primary/20">
                          Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-10">
              <p className="text-muted-foreground mb-4">E muitos outros parceiros em processo de integração.</p>
              <Link href="/seja-parceiro">
                <Button size="lg" className="font-bold px-8">
                  Cadastre seu Cursinho
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
