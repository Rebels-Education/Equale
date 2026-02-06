import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CheckCircle2, School, Users, Rocket } from "lucide-react";
import { useLocation } from "wouter";

export default function BePartner() {
  const [, setLocation] = useLocation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    courseName: "",
    responsibleName: "",
    email: "",
    phone: "",
    city: "",
    description: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria a integração com backend ou serviço de email (ex: Formspree, EmailJS)
    // Por enquanto, simulamos o envio com sucesso
    console.log("Formulário enviado:", formData);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="container py-20 min-h-[60vh] flex items-center justify-center">
          <Card className="max-w-md w-full border-none shadow-xl bg-primary/5">
            <CardContent className="pt-10 pb-10 text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-primary">Cadastro Recebido!</h2>
              <p className="text-muted-foreground text-lg">
                Obrigado pelo interesse em fazer parte da nossa rede. Nossa equipe analisará seus dados e entrará em contato em breve.
              </p>
              <Button onClick={() => setLocation("/")} size="lg" className="mt-4 rounded-full px-8">
                Voltar para o Início
              </Button>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Junte-se à Nossa Rede de <span className="text-primary">Transformação</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Se você coordena ou representa um cursinho popular, venha somar forças conosco. Juntos, podemos ampliar o impacto da educação pública e de qualidade.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Benefits Side */}
            <div className="space-y-8 lg:sticky lg:top-24">
              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold">Por que ser um parceiro?</h2>
                <p className="text-muted-foreground text-lg">
                  Ao integrar a rede do Instituto Equale, seu cursinho passa a fazer parte de um ecossistema de apoio mútuo e fortalecimento institucional.
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="border-none shadow-md bg-muted/20">
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                      <School className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Fortalecimento Institucional</h3>
                      <p className="text-muted-foreground">Acesso a mentorias, materiais de gestão e suporte pedagógico para estruturar melhor seu cursinho.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md bg-muted/20">
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Rede de Conexões</h3>
                      <p className="text-muted-foreground">Troca de experiências com outros coordenadores e acesso a parceiros estratégicos como Bernoulli e O Tempo.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md bg-muted/20">
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                      <Rocket className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Visibilidade e Apoio</h3>
                      <p className="text-muted-foreground">Divulgação das suas atividades em nossos canais e apoio na mobilização de recursos e voluntários.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Form Side */}
            <Card className="border-muted shadow-lg">
              <CardHeader className="space-y-4 pb-6">
                <CardTitle className="text-2xl font-bold">Formulário de Interesse</CardTitle>
                <CardDescription className="text-base">
                  Preencha os dados abaixo para iniciarmos nossa conversa. É rápido e sem compromisso.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="courseName">Nome do Cursinho</Label>
                      <Input 
                        id="courseName" 
                        name="courseName" 
                        placeholder="Ex: Cursinho Popular Esperança" 
                        required 
                        value={formData.courseName}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="responsibleName">Nome do Responsável</Label>
                      <Input 
                        id="responsibleName" 
                        name="responsibleName" 
                        placeholder="Seu nome completo" 
                        required 
                        value={formData.responsibleName}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email">E-mail de Contato</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="contato@exemplo.com" 
                          required 
                          value={formData.email}
                          onChange={handleChange}
                          className="h-12"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Telefone / WhatsApp</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          placeholder="(00) 00000-0000" 
                          required 
                          value={formData.phone}
                          onChange={handleChange}
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="city">Cidade / Estado</Label>
                      <Input 
                        id="city" 
                        name="city" 
                        placeholder="Ex: Belo Horizonte - MG" 
                        required 
                        value={formData.city}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="description">Breve descrição do cursinho</Label>
                      <Textarea 
                        id="description" 
                        name="description" 
                        placeholder="Conte um pouco sobre a história, público-alvo e atividades do cursinho..." 
                        className="min-h-[120px] resize-none"
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold rounded-xl mt-4">
                    Enviar Cadastro
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Ao enviar, você concorda com o contato da nossa equipe para fins de parceria. Seus dados estão seguros.
                  </p>
                </form>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </Layout>
  );
}
