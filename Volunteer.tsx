import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap, Clock, Heart, BookOpen, CheckCircle2, Users, Quote } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import OptimizedImage from "@/components/ui/OptimizedImage";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function Volunteer() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Inscrição enviada com sucesso! Entraremos em contato em breve.");
      // Reset form logic would go here
    }, 1500);
  };

  return (
    <Layout>
      <SEO 
        title="Seja um Voluntário" 
        description="Junte-se à nossa rede de professores voluntários e transforme a vida de estudantes da rede pública através da educação."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <OptimizedImage 
            src="/images/classroom-study.jpg" 
            alt="Sala de aula com estudantes atentos e engajados, representando o ambiente de aprendizado nos cursinhos do Instituto Equale" 
            priority={true}
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="container relative z-10 text-center text-primary-foreground space-y-6">
          <div className="flex justify-center">
            <Breadcrumbs 
              items={[{ label: "Seja um Voluntário" }]} 
              className="mb-4 text-primary-foreground/70"
            />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm">
            <Heart className="w-4 h-4" />
            <span>Chamada para Educadores</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold max-w-4xl mx-auto leading-tight">
            Compartilhe Conhecimento, <br/>Transforme Destinos
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Estamos em busca de <span className="font-bold text-white">professores voluntários</span> apaixonados por ensinar. 
            Se você quer fazer a diferença na vida de estudantes da rede pública, seu lugar é aqui.
          </p>
        </div>
      </section>

      <div className="container py-12 md:py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column: Context & Benefits */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-heading font-bold text-primary">Por que ser um professor voluntário?</h2>
              <p className="text-muted-foreground">
                Além de contribuir diretamente para a democratização do acesso ao ensino superior, você fará parte de uma rede engajada e vibrante.
              </p>
              
              <ul className="space-y-4">
                {[
                  { icon: GraduationCap, text: "Impacto real na aprovação de alunos" },
                  { icon: Users, text: "Networking com outros educadores" },
                  { icon: BookOpen, text: "Experiência docente enriquecedora" },
                  { icon: CheckCircle2, text: "Certificado de horas complementares" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-foreground/80">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="bg-muted/30 border-none">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-bold flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Compromisso Flexível
                </h3>
                <p className="text-sm text-muted-foreground">
                  Sabemos que sua rotina é corrida. Por isso, oferecemos opções flexíveis de voluntariado:
                </p>
                <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Aulas semanais ou quinzenais</li>
                  <li>Plantões de dúvidas</li>
                  <li>Correção de redações</li>
                  <li>Mentoria individual</li>
                </ul>
              </CardContent>
            </Card>

            {/* Testimonials Section */}
            <div className="space-y-6 pt-4">
              <h3 className="font-heading font-bold text-xl text-primary flex items-center gap-2">
                <Users className="w-5 h-5" />
                O que dizem nossos professores
              </h3>
              
              <div className="space-y-4">
                <Card className="bg-background shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
                  <CardContent className="p-5 pt-6">
                    <Quote className="w-6 h-6 text-muted-foreground/20 absolute top-4 right-4" />
                    <p className="italic text-muted-foreground text-sm mb-4 relative z-10">
                      "Ver o brilho nos olhos dos alunos quando entendem a matéria é impagável. O voluntariado renovou minha paixão pela docência e me conectou com pessoas incríveis."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                        MC
                      </div>
                      <div>
                        <p className="font-bold text-sm text-foreground">Mariana Costa</p>
                        <p className="text-xs text-muted-foreground">Professora de História</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
                  <CardContent className="p-5 pt-6">
                    <Quote className="w-6 h-6 text-muted-foreground/20 absolute top-4 right-4" />
                    <p className="italic text-muted-foreground text-sm mb-4 relative z-10">
                      "A flexibilidade de horários me permitiu conciliar as aulas com meu mestrado. É uma troca de experiências que vai muito além do conteúdo acadêmico."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                        CE
                      </div>
                      <div>
                        <p className="font-bold text-sm text-foreground">Carlos Eduardo</p>
                        <p className="text-xs text-muted-foreground">Professor de Matemática</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Ficha de Inscrição para Docentes</CardTitle>
                <p className="text-muted-foreground">Preencha seus dados e nos conte sobre sua disponibilidade.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Personal Info */}
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg border-b pb-2">Dados Pessoais</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo</Label>
                        <Input id="name" placeholder="Seu nome" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input id="email" type="email" placeholder="seu@email.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone / WhatsApp</Label>
                        <Input id="phone" placeholder="(31) 99999-9999" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">Cidade de Residência</Label>
                        <Input id="city" placeholder="Ex: Belo Horizonte" required />
                      </div>
                    </div>
                  </div>

                  {/* Academic Info */}
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg border-b pb-2">Área de Atuação</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="subject">Disciplina de Interesse</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a disciplina" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="matematica">Matemática</SelectItem>
                            <SelectItem value="fisica">Física</SelectItem>
                            <SelectItem value="quimica">Química</SelectItem>
                            <SelectItem value="biologia">Biologia</SelectItem>
                            <SelectItem value="historia">História</SelectItem>
                            <SelectItem value="geografia">Geografia</SelectItem>
                            <SelectItem value="portugues">Português / Literatura</SelectItem>
                            <SelectItem value="redacao">Redação</SelectItem>
                            <SelectItem value="ingles">Inglês / Espanhol</SelectItem>
                            <SelectItem value="sociologia">Sociologia / Filosofia</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Experiência em Sala de Aula</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">Nunca dei aula (quero começar!)</SelectItem>
                            <SelectItem value="junior">Tenho pouca experiência</SelectItem>
                            <SelectItem value="mid">Já atuo como professor</SelectItem>
                            <SelectItem value="senior">Tenho vasta experiência</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Availability - The Key Request */}
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg border-b pb-2">Disponibilidade de Horário</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Marque os períodos em que você tem disponibilidade para dar aulas ou monitorias.
                    </p>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr>
                            <th className="p-2 text-left text-muted-foreground font-medium">Período</th>
                            {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
                              <th key={day} className="p-2 text-center text-muted-foreground font-medium">{day}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { label: 'Manhã', id: 'morning' },
                            { label: 'Tarde', id: 'afternoon' },
                            { label: 'Noite', id: 'night' }
                          ].map(period => (
                            <tr key={period.id} className="border-t border-muted/50">
                              <td className="p-3 font-medium">{period.label}</td>
                              {['seg', 'ter', 'qua', 'qui', 'sex', 'sab'].map(day => (
                                <td key={`${day}-${period.id}`} className="p-2 text-center">
                                  <Checkbox id={`${day}-${period.id}`} className="w-5 h-5" />
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Motivation */}
                  <div className="space-y-2">
                    <Label htmlFor="motivation">Por que você quer ser voluntário?</Label>
                    <Textarea 
                      id="motivation" 
                      placeholder="Conte-nos um pouco sobre sua motivação e expectativas..." 
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button type="submit" className="w-full h-12 text-lg font-bold" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar Inscrição"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
