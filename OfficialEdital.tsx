import { motion } from "framer-motion";
import { ArrowLeft, Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function OfficialEdital() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header Actions */}
        <div className="flex justify-between items-center mb-8 print:hidden">
          <Link href="/processo-seletivo">
            <Button variant="ghost" className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
              <ArrowLeft className="w-4 h-4" /> Voltar para Processo Seletivo
            </Button>
          </Link>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handlePrint} className="gap-2">
              <Printer className="w-4 h-4" /> Imprimir
            </Button>
            <Button size="sm" className="gap-2">
              <Download className="w-4 h-4" /> Baixar PDF
            </Button>
          </div>
        </div>

        {/* Document Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-background p-8 md:p-12 rounded-xl shadow-sm border border-border print:shadow-none print:border-none print:p-0"
        >
          {/* Header Document */}
          <div className="text-center mb-12 border-b border-border pb-8">
            <img src="/images/logo-equale-main.png" alt="Instituto Equale" className="h-12 mx-auto mb-6" />
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              EDITAL UNIFICADO Nº 01/2026
            </h1>
            <p className="text-muted-foreground uppercase tracking-wide text-sm font-medium">
              Processo Seletivo Rede Equale
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none dark:prose-invert">
            <p className="lead text-justify">
              <strong>SELEÇÃO DE ESTUDANTES PARA CURSOS PRÉ-VESTIBULARES POPULARES DA REDE INSTITUTO EQUALE</strong>
            </p>
            
            <p className="text-justify mb-8">
              O <strong>INSTITUTO EQUALE</strong>, em articulação com sua rede de Cursinhos Populares Parceiros no Estado de Minas Gerais, torna pública a abertura de inscrições para o Processo Seletivo Unificado visando o preenchimento de vagas para as turmas extensivas de 2026, preparatórias para o Exame Nacional do Ensino Médio (ENEM) e vestibulares universitários.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4">1. DAS DISPOSIÇÕES PRELIMINARES</h3>
            <p className="text-justify mb-2">1.1. O presente Edital regulamenta a seleção unificada de estudantes para os cursinhos populares integrantes da Rede Equale.</p>
            <p className="text-justify mb-2">1.2. O processo seletivo será regido por este Edital e executado pelo Comitê de Seleção do Instituto Equale em conjunto com as coordenações locais.</p>
            <p className="text-justify mb-6">1.3. Os cursos ofertados são gratuitos, presenciais ou híbridos, conforme a disponibilidade de cada núcleo parceiro.</p>

            <h3 className="text-xl font-bold mt-8 mb-4">2. DOS OBJETIVOS</h3>
            <p className="text-justify mb-2">2.1. Democratizar o acesso ao ensino superior público de qualidade.</p>
            <p className="text-justify mb-2">2.2. Oferecer preparação acadêmica de excelência para estudantes em situação de vulnerabilidade socioeconômica.</p>
            <p className="text-justify mb-6">2.3. Promover a formação cidadã e crítica dos estudantes.</p>

            <h3 className="text-xl font-bold mt-8 mb-4">3. DOS REQUISITOS PARA INGRESSO</h3>
            <p className="text-justify mb-4">Poderão participar deste processo seletivo os candidatos que preencherem <strong>cumulativamente</strong> os seguintes requisitos:</p>
            <p className="text-justify mb-2"><strong>3.1. Escolaridade:</strong></p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Estar cursando o 3º ano do Ensino Médio em escola da rede pública no ano letivo de 2026; OU</li>
              <li>Ter concluído o Ensino Médio integralmente em escola da rede pública; OU</li>
              <li>Ter cursado o Ensino Médio em escola particular na condição de bolsista integral (100%).</li>
            </ul>
            <p className="text-justify mb-2"><strong>3.2. Socioeconômico:</strong></p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Possuir renda familiar bruta mensal <em>per capita</em> igual ou inferior a 1,5 (um vírgula cinco) salário mínimo vigente.</li>
            </ul>
            <p className="text-justify mb-2"><strong>3.3. Disponibilidade:</strong></p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Ter disponibilidade para frequentar as aulas nos horários estabelecidos pelo cursinho de interesse (noturno, vespertino ou integral).</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">4. DAS VAGAS</h3>
            <p className="text-justify mb-2">4.1. Serão ofertadas vagas distribuídas entre os cursinhos parceiros, conforme quadro de vagas anexo (disponível no ato da inscrição).</p>
            <p className="text-justify mb-2">4.2. O candidato deverá indicar, no momento da inscrição, a unidade/cidade de sua preferência.</p>
            <p className="text-justify mb-6">4.3. Reserva de Vagas: Em conformidade com a política de ações afirmativas, 50% das vagas serão reservadas prioritariamente para candidatos autodeclarados pretos, pardos ou indígenas (PPI).</p>

            <h3 className="text-xl font-bold mt-8 mb-4">5. DAS INSCRIÇÕES</h3>
            <p className="text-justify mb-2">5.1. As inscrições serão realizadas exclusivamente via internet, através do portal do Instituto Equale.</p>
            <p className="text-justify mb-2">5.2. O período de inscrição será unificado, iniciando-se em <strong>01 de fevereiro de 2026</strong> e encerrando-se em <strong>28 de fevereiro de 2026</strong>.</p>
            <p className="text-justify mb-2">5.3. No ato da inscrição, o candidato deverá preencher o Formulário Socioeconômico e anexar cópia digitalizada dos seguintes documentos:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Documento de Identidade (RG) e CPF do candidato e de todos os membros do grupo familiar;</li>
              <li>Comprovante de residência atualizado;</li>
              <li>Histórico Escolar do Ensino Médio ou Declaração de Matrícula;</li>
              <li>Comprovantes de renda de todos os membros do grupo familiar maiores de 18 anos (contracheque, carteira de trabalho, extrato bancário ou declaração de autônomo);</li>
              <li>Comprovante de inscrição no CadÚnico (opcional, mas recomendado).</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">6. DO PROCESSO DE SELEÇÃO</h3>
            <p className="text-justify mb-4">O processo seletivo constará de duas etapas:</p>
            <p className="text-justify mb-2"><strong>6.1. Etapa 1: Análise Socioeconômica (Eliminatória e Classificatória)</strong></p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Será atribuída pontuação baseada no Índice de Vulnerabilidade Social (IVS), calculado a partir da renda <em>per capita</em>, moradia, escolaridade dos pais e raça/cor.</li>
              <li>Candidatos com menor renda <em>per capita</em> terão prioridade na classificação.</li>
            </ul>
            <p className="text-justify mb-2"><strong>6.2. Etapa 2: Sorteio Público ou Entrevista (Classificatória)</strong></p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Caso o número de candidatos aptos na Etapa 1 supere o número de vagas da unidade escolhida, poderá ser realizado sorteio público ou entrevista social para desempate, a critério da coordenação local.</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">7. DO RESULTADO E MATRÍCULA</h3>
            <p className="text-justify mb-2">7.1. O resultado preliminar será divulgado no dia <strong>10 de março de 2026</strong> no site do Instituto Equale.</p>
            <p className="text-justify mb-6">7.2. Os candidatos aprovados deverão comparecer à unidade escolhida para efetivação da matrícula entre os dias <strong>15 e 20 de março de 2026</strong>, munidos dos documentos originais para conferência.</p>

            <h3 className="text-xl font-bold mt-8 mb-4">8. DAS DISPOSIÇÕES FINAIS</h3>
            <p className="text-justify mb-2">8.1. A inscrição do candidato implica a aceitação das normas contidas neste Edital.</p>
            <p className="text-justify mb-8">8.2. Os casos omissos serão resolvidos pela Comissão Organizadora do Processo Seletivo Unificado.</p>

            <div className="mt-16 pt-8 border-t border-border text-center">
              <p className="mb-2">Belo Horizonte, 28 de janeiro de 2026.</p>
              <p className="font-bold text-lg">INSTITUTO EQUALE</p>
              <p className="text-muted-foreground">Comissão de Seleção Unificada</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
