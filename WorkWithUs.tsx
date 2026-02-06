import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Clock, DollarSign, Upload, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function WorkWithUs() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Candidatura enviada!",
        description: "Recebemos seu currículo com sucesso. Entraremos em contato em breve.",
      });
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="container py-16 md:py-24 flex flex-col items-center text-center animate-in fade-in duration-500">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-bold font-heading mb-4">Candidatura Enviada!</h1>
        <p className="text-muted-foreground max-w-md mb-8">
          Obrigado pelo seu interesse em fazer parte do Instituto Equale. 
          Nossa equipe de RH analisará seu perfil e entrará em contato caso haja compatibilidade com a vaga.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline">
          Enviar outra candidatura
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Job Details Section */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold font-heading mb-4 text-primary">Trabalhe Conosco</h1>
            <p className="text-lg text-muted-foreground">
              Junte-se a nós na missão de transformar a educação. Estamos sempre em busca de talentos 
              apaixonados por impacto social.
            </p>
          </div>

          <Card className="border-primary/20 shadow-lg bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Briefcase className="w-6 h-6 text-primary" />
                Vaga Disponível: Assistente Administrativo/Projetos
              </CardTitle>
              <CardDescription>
                Oportunidade para atuar diretamente no suporte às operações do Instituto.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 bg-background p-3 rounded-lg border shadow-sm flex-1">
                  <div className="p-2 bg-green-100 text-green-700 rounded-full">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase">Bolsa Auxílio</p>
                    <p className="font-bold text-lg">R$ 900,00</p>
                    <p className="text-xs text-muted-foreground">por mês</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-background p-3 rounded-lg border shadow-sm flex-1">
                  <div className="p-2 bg-blue-100 text-blue-700 rounded-full">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase">Carga Horária</p>
                    <p className="font-bold text-lg">5 Horas</p>
                    <p className="text-xs text-muted-foreground">por dia (seg a sex)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Requisitos:</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Ensino Superior em andamento (Administração, Pedagogia, Gestão Pública ou áreas afins).</li>
                  <li>Boa comunicação escrita e verbal.</li>
                  <li>Proatividade e vontade de aprender.</li>
                  <li>Identificação com a causa da educação popular.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Application Form Section */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Envie seu Currículo</CardTitle>
            <CardDescription>
              Preencha o formulário abaixo para se candidatar à vaga.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" placeholder="Seu nome" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone / WhatsApp</Label>
                  <Input id="phone" placeholder="(00) 00000-0000" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="seu@email.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="area">Área de Interesse / Curso</Label>
                <Input id="area" placeholder="Ex: Administração, Pedagogia..." required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Carta de Apresentação (Opcional)</Label>
                <Textarea 
                  id="message" 
                  placeholder="Conte-nos brevemente por que você quer trabalhar no Equale." 
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume">Currículo (PDF)</Label>
                <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-muted/50 transition-colors bg-muted/20">
                  <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                  <p className="text-sm font-medium text-foreground">Clique para fazer upload</p>
                  <p className="text-xs text-muted-foreground">PDF até 5MB</p>
                  <input 
                    id="resume" 
                    type="file" 
                    accept=".pdf" 
                    className="hidden" 
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        toast({
                          title: "Arquivo selecionado",
                          description: file.name,
                        });
                      }
                    }}
                  />
                  {/* Overlay input for better UX simulation since we can't style file input easily */}
                  <label htmlFor="resume" className="absolute inset-0 cursor-pointer opacity-0" />
                </div>
              </div>

              <Button type="submit" className="w-full font-bold" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Candidatura"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
