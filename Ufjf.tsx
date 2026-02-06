import PartnerTemplate from "./PartnerTemplate";

export default function Ufjf() {
  const data = {
    name: "GARRA - Cursinho Popular",
    description: "Cursinho popular da UFJF com foco na democratização do acesso à universidade em Juiz de Fora.",
    fullDescription: [
      "O GARRA é um cursinho popular vinculado à Universidade Federal de Juiz de Fora (UFJF), criado com o objetivo de ampliar o acesso ao ensino superior público.",
      "O projeto oferece 70 vagas anuais, com reserva para candidatos de escolas públicas, pretos, pardos, indígenas e pessoas com mais de 30 anos.",
      "As aulas são ministradas por estudantes da UFJF, promovendo uma troca rica de experiências e conhecimentos entre a universidade e a comunidade."
    ],
    location: "UFJF - Juiz de Fora - MG",
    contact: {
      email: "contato.projetogarra@gmail.com",
      instagram: "https://www.instagram.com/garra.cursinho/"
    },
    stats: {
      students: "70 vagas/ano"
    },
    colorTheme: "#F1C40F" // Amarelo/Dourado
  };

  return <PartnerTemplate data={data} />;
}
