import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Globe, GraduationCap, Users, FileText, Facebook, Instagram } from "lucide-react";
import { Link } from "wouter";

interface PartnerProps {
  name: string;
  description: string;
  fullDescription: string[];
  location: string;
  contact: {
    email?: string;
    phone?: string;
    website?: string;
    social?: string;
    cnpj?: string;
    facebook?: string;
    instagram?: string;
  };
  stats: {
    students: string;
    founded?: string;
  };
  colorTheme: string; // hex color for header
}

export default function PartnerTemplate({ data }: { data: PartnerProps }) {
  return (
    <Layout>
      <section 
        className="relative py-20 text-white overflow-hidden"
        style={{ background: `linear-gradient(to right, ${data.colorTheme}, #1a1a1a)` }}
      >
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4 backdrop-blur-sm">
              <GraduationCap className="w-4 h-4" />
              <span>Parceiro da Rede Equale</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">{data.name}</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-primary">Sobre o Projeto</h2>
              <div className="prose prose-lg text-muted-foreground">
                {data.fullDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-none shadow-md bg-muted/30">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Alunos Atendidos</p>
                    <p className="text-xl font-bold">{data.stats.students}</p>
                  </div>
                </CardContent>
              </Card>
              
              {data.stats.founded && (
                <Card className="border-none shadow-md bg-muted/30">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Fundação</p>
                      <p className="text-xl font-bold">{data.stats.founded}</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="sticky top-24">
              <Card className="border-2 border-primary/10 shadow-xl overflow-hidden">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" /> Localização
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {data.location}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    {data.contact.cnpj && (
                      <div className="flex items-center gap-3 text-sm">
                        <FileText className="h-4 w-4 text-primary shrink-0" />
                        <div>
                          <span className="block text-xs text-muted-foreground">CNPJ</span>
                          <span className="font-mono text-xs">{data.contact.cnpj}</span>
                        </div>
                      </div>
                    )}
                    
                    {data.contact.email && (
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="h-4 w-4 text-primary shrink-0" />
                        <span className="truncate" title={data.contact.email}>{data.contact.email}</span>
                      </div>
                    )}
                    
                    {data.contact.phone && (
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="h-4 w-4 text-primary shrink-0" />
                        <span>{data.contact.phone}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 space-y-3">
                    {data.contact.website && (
                      <Button className="w-full rounded-full font-bold" onClick={() => window.open(data.contact.website, '_blank')}>
                        <Globe className="mr-2 h-4 w-4" /> Visitar Site Oficial
                      </Button>
                    )}
                    
                    {data.contact.instagram && (
                      <Button variant="outline" className="w-full rounded-full" onClick={() => window.open(data.contact.instagram, '_blank')}>
                        <Instagram className="mr-2 h-4 w-4" /> Instagram
                      </Button>
                    )}
                    
                    {data.contact.facebook && (
                      <Button variant="outline" className="w-full rounded-full" onClick={() => window.open(data.contact.facebook, '_blank')}>
                        <Facebook className="mr-2 h-4 w-4" /> Facebook
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 bg-accent/20 p-6 rounded-2xl text-center">
                <h4 className="font-bold text-accent-foreground mb-2">Quer ser voluntário aqui?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Este projeto faz parte da nossa rede. Inscreva-se e indique seu interesse!
                </p>
                <Link href="/voluntario">
                  <Button variant="outline" className="w-full rounded-full border-accent text-accent-foreground hover:bg-accent">
                    Inscrever-se na Rede
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
