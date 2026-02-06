import PartnerTemplate from "./PartnerTemplate";

export default function Cefet() {
  const data = {
    name: "Pré-Vestibular CEFET-MG",
    description: "Cursinho preparatório gratuito tradicional oferecido pelo CEFET-MG, com décadas de história.",
    fullDescription: [
      "O Cursinho Preparatório Gratuito do CEFET-MG é uma das iniciativas mais tradicionais de inclusão educacional em Belo Horizonte, oferecendo oportunidades há décadas.",
      "Vinculado a uma das instituições de ensino técnico e tecnológico mais respeitadas do país, o cursinho prepara estudantes para o próprio vestibular do CEFET e para o ENEM.",
      "As aulas são ministradas nos campi da instituição, proporcionando aos alunos o contato direto com a infraestrutura e o ambiente acadêmico de excelência do CEFET-MG."
    ],
    location: "CEFET-MG Campus Nova Suíça - Av. Amazonas, 5253 - Nova Suíça, Belo Horizonte - MG",
    contact: {
      website: "https://www.ng.cefetmg.br/",
      instagram: "https://www.instagram.com/cefetmg/",
      phone: "(31) 3319-7000"
    },
    stats: {
      students: "Tradicional",
      founded: "Década de 90"
    },
    colorTheme: "#1F618D" // Azul CEFET
  };

  return <PartnerTemplate data={data} />;
}
