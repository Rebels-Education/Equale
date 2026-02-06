import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, CreditCard, HandHeart, Gift } from "lucide-react";
import { Link } from "wouter";

export default function Donate() {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/abstract-bg.jpg" alt="" className="w-full h-full object-cover mix-blend-overlay" />
        </div>
        <div className="container relative z-10 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold">Faça a Diferença</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Sua contribuição transforma sonhos em realidade. Escolha como você quer apoiar a educação.
          </p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* PIX */}
            <Card className="border-2 border-primary/10 shadow-lg hover:border-primary transition-colors">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <div className="font-bold text-2xl">PIX</div>
                </div>
                <CardTitle className="text-2xl font-heading font-bold">Doação via PIX</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground">
                  A forma mais rápida e direta de apoiar. Qualquer valor faz a diferença.
                </p>
                <div className="p-4 bg-muted rounded-lg border border-dashed border-primary/30">
                  <p className="text-sm text-muted-foreground mb-2">Chave PIX (CNPJ)</p>
                  <p className="font-mono font-bold text-lg select-all">00.000.000/0001-00</p>
                </div>
                <Button className="w-full rounded-full font-bold">Copiar Chave</Button>
              </CardContent>
            </Card>

            {/* Cartão de Crédito */}
            <Card className="border-2 border-primary/10 shadow-lg hover:border-primary transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-bl-lg">
                RECORRENTE
              </div>
              <CardHeader className="text-center pb-2">
                <div className="mx-auto h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center text-accent-foreground mb-4">
                  <CreditCard className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-heading font-bold">Seja um Padrinho</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground">
                  Contribua mensalmente e garanta a continuidade dos estudos de um aluno.
                </p>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full rounded-full hover:bg-accent hover:text-accent-foreground">R$ 30,00 / mês</Button>
                  <Button variant="outline" className="w-full rounded-full hover:bg-accent hover:text-accent-foreground">R$ 50,00 / mês</Button>
                  <Button variant="outline" className="w-full rounded-full hover:bg-accent hover:text-accent-foreground">Outro Valor</Button>
                </div>
              </CardContent>
            </Card>

            {/* Transferência */}
            <Card className="border-2 border-primary/10 shadow-lg hover:border-primary transition-colors">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Gift className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-heading font-bold">Transferência</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground">
                  Para doações maiores ou corporativas, utilize nossa conta bancária.
                </p>
                <div className="text-sm text-left space-y-2 bg-muted p-4 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Banco:</span>
                    <span className="font-medium">000 - Banco X</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Agência:</span>
                    <span className="font-medium">0000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Conta:</span>
                    <span className="font-medium">00000-0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Favorecido:</span>
                    <span className="font-medium">Instituto Equale</span>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <HandHeart className="w-4 h-4" />
                <span>Voluntariado</span>
              </div>
              <h2 className="text-3xl font-heading font-bold">Doe seu Tempo e Talento</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Não pode contribuir financeiramente? Sem problemas! Precisamos de voluntários em diversas áreas: professores, mentores, psicólogos, designers, administrativo e muito mais.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Aulas presenciais ou online</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Mentoria de carreira e estudos</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Apoio em eventos e logística</span>
                </li>
              </ul>
              <Link href="/voluntario">
                <Button size="lg" className="rounded-full px-8 mt-4">Quero ser Voluntário</Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="/images/hero-students.jpg" 
                alt="Voluntários e alunos" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
