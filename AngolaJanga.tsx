import PartnerTemplate from "./PartnerTemplate";

export default function AngolaJanga() {
  const data = {
    name: "Angola Janga",
    description: "Um cursinho popular voltado majoritariamente para a população negra e periférica, vinculado ao Bloco Angola Janga.",
    fullDescription: [
      "O pré-ENEM Angola Janga é um cursinho popular voltado, majoritariamente, para a população negra e periférica. Vinculado ao Bloco Angola Janga, que busca levar a conscientização racial através da música.",
      "São ofertadas todas as matérias cobradas no ENEM, além de monitorias, simulados e atendimento psicológico.",
      "Para além de um espaço que visa a inserção de jovens negros na universidade como ato político, o Angola Janga busca ser um espaço de acolhimento, troca de experiência e resistência."
    ],
    location: "Centro de Referência da Juventude (CRJ) - Rua Guaicurus, 50 - Centro, Belo Horizonte - MG",
    contact: {
      email: "angolajanga.edu@gmail.com",
      instagram: "https://www.instagram.com/angolajanga/",
      website: "https://www.facebook.com/cursinhoangolajanga"
    },
    stats: {
      students: "70 alunos/ano"
    },
    colorTheme: "#D9534F" // Vermelho/Terracota
  };

  return <PartnerTemplate data={data} />;
}
