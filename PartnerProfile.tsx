import { useRoute } from "wouter";
import Layout from "@/components/layout/Layout";
import { partnersData } from "@/data/partners";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Globe, 
  Facebook, 
  FileText, 
  Users, 
  Calendar,
  Quote,
  ArrowRight,
  ExternalLink,
  Building2,
  ArrowLeft
} from "lucide-react";
import { Link } from "wouter";
import NotFound from "./NotFound";
import OptimizedImage from "@/components/ui/OptimizedImage";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function PartnerProfile() {
  const [match, params] = useRoute("/parceiro/:id");
  const partnerId = match ? params?.id : null;
  const partner = partnerId ? partnersData[partnerId] : null;

  if (!partner) return <NotFound />;

  return (
    <Layout>
      {/* Hero Header */}
      <div className="relative bg-muted/30 border-b overflow-hidden">
        {/* Decorative background element */}
        <div 
          className="absolute -right-20 -top-20 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ backgroundColor: partner.colorTheme }}
        />
        
        <div className="container py-12 md:py-20 relative z-10">
          <div className="flex justify-between items-center mb-8">
             <Link href="/programas">
              <Button variant="ghost" className="hover:bg-background/50 -ml-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Programas
              </Button>
            </Link>
            <Breadcrumbs 
              items={[
                { label: "Programas", href: "/programas" },
                { label: partner.name }
              ]} 
              className="mb-0 hidden md:flex"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-6">
              <div className="flex flex-wrap gap-3">
                <div 
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-white shadow-sm"
                  style={{ backgroundColor: partner.colorTheme }}
                >
                  <Users className="w-4 h-4" />
                  <span>Parceiro Equale</span>
                </div>
                {partner.stats?.since && (
                  <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5 px-3 py-1 text-sm">
                    Desde {partner.stats.since}
                  </Badge>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
                {partner.name}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                {partner.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                {partner.editalUrl && (
                  <a href={partner.editalUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="gap-2 font-bold shadow-md hover:shadow-lg transition-all rounded-full h-12 px-6">
                      <FileText className="w-5 h-5" />
                      Ver Edital de Seleção
                    </Button>
                  </a>
                )}
                
                {partner.contact.website && (
                  <a href={partner.contact.website} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="gap-2 bg-background rounded-full h-12 px-6">
                      <Globe className="w-5 h-5" />
                      Visitar Site Oficial
                    </Button>
                  </a>
                )}
              </div>
            </div>

            {/* Quick Stats Card */}
            <Card className="bg-background shadow-lg border-t-4 sticky top-24" style={{ borderTopColor: partner.colorTheme }}>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">Localização</h3>
                      <p className="text-sm text-muted-foreground leading-snug">{partner.location}</p>
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(partner.location)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline mt-1 inline-block"
                      >
                        Ver no mapa
                      </a>
                    </div>
                  </div>

                  {partner.stats.students && (
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-muted-foreground shrink-0" />
                      <div>
                        <h3 className="font-semibold">Público-Alvo</h3>
                        <p className="text-sm text-muted-foreground">{partner.stats.students}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-muted-foreground shrink-0" />
                    <div>
                      <h3 className="font-semibold">Tipo</h3>
                      <p className="text-sm text-muted-foreground">Cursinho Popular</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t space-y-3">
                  <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Contatos</h3>
                  <div className="flex flex-wrap gap-2">
                    {partner.contact.instagram && (
                      <a href={partner.contact.instagram} target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary" size="sm" className="gap-2">
                          <Instagram className="w-4 h-4" /> Instagram
                        </Button>
                      </a>
                    )}
                    {partner.contact.facebook && (
                      <a href={partner.contact.facebook} target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary" size="sm" className="gap-2">
                          <Facebook className="w-4 h-4" /> Facebook
                        </Button>
                      </a>
                    )}
                    {partner.contact.email && (
                      <a href={`mailto:${partner.contact.email}`}>
                        <Button variant="secondary" size="sm" className="gap-2">
                          <Mail className="w-4 h-4" /> Email
                        </Button>
                      </a>
                    )}
                    {partner.contact.phone && (
                      <a href={`tel:${partner.contact.phone.replace(/\D/g, '')}`}>
                        <Button variant="secondary" size="sm" className="gap-2">
                          <Phone className="w-4 h-4" /> {partner.contact.phone}
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="container py-12 md:py-20 space-y-20">
        {/* About Section */}
        <section className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <h2 className="text-3xl font-heading font-bold flex items-center gap-3">
              <div className="h-8 w-2 rounded-full" style={{ backgroundColor: partner.colorTheme }} />
              Sobre o Cursinho
            </h2>
            <div className="prose prose-lg text-muted-foreground max-w-none">
              {partner.fullDescription.map((paragraph, index) => (
                <p key={index} className="leading-relaxed mb-6">{paragraph}</p>
              ))}
            </div>
          </div>
          
          {/* Gallery Preview (if available) */}
          {partner.gallery && partner.gallery.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-bold text-xl flex items-center gap-2">
                <div className="h-1 w-6 rounded-full bg-primary" />
                Galeria
              </h3>
              <div className="grid gap-4">
                {partner.gallery.map((img, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden shadow-md aspect-video relative group">
                    <OptimizedImage 
                      src={img} 
                      alt={`Foto da galeria do ${partner.name}, mostrando atividades e espaços do cursinho - Imagem ${idx + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Testimonials Section (if available) */}
        {partner.testimonials && partner.testimonials.length > 0 && (
          <section className="bg-secondary/20 -mx-4 px-4 py-16 md:rounded-3xl md:mx-0 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">O que dizem nossos alunos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Histórias reais de quem transformou sonhos em realidade através da educação popular.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {partner.testimonials.map((testimonial, idx) => (
                <Card key={idx} className="bg-background border-none shadow-sm relative overflow-visible h-full flex flex-col">
                  <div className="absolute -top-4 -left-2 text-primary/20">
                    <Quote className="w-12 h-12" />
                  </div>
                  <CardContent className="p-8 pt-10 flex-1 flex flex-col justify-between">
                    <p className="text-lg text-foreground/80 italic mb-6 relative z-10">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-4 border-t pt-4 mt-auto">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground leading-tight">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* CTA Footer */}
        <section className="text-center py-12 border-t">
          <h2 className="text-2xl font-bold mb-6">Ficou interessado?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {partner.editalUrl ? (
              <a href={partner.editalUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full px-8 h-12 text-lg shadow-lg hover:shadow-xl transition-all">
                  Inscreva-se Agora <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            ) : (
              <a href={partner.contact.instagram || partner.contact.website || "#"} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full px-8 h-12 text-lg shadow-lg hover:shadow-xl transition-all">
                  Entrar em Contato <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </a>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
}
