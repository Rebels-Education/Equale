import PartnerTemplate from "./PartnerTemplate";

export default function Comunica() {
  const data = {
    name: "ComunICA",
    description: "Cursinho Comunitário do ICA-UFMG em Montes Claros, preparando a população carente do entorno para o ENEM.",
    fullDescription: [
      "Criado em 2018, na cidade de Montes Claros, com o objetivo principal de atender a população carente do entorno do campus, preparando-os para o ENEM.",
      "Baseado no voluntariado, conta com um corpo docente composto principalmente por alunos de graduação da UFMG.",
      "As aulas acontecem no turno da noite, de segunda a sexta-feira, facilitando o acesso para quem trabalha."
    ],
    location: "Instituição de Ciências Agrárias da UFMG - Av. Universitária, 1000, Bairro Universitário, Montes Claros/MG",
    contact: {
      email: "cursinhoicaufmg@gmail.com",
      website: "https://cursinhoicaufmg.wixsite.com/comunica"
    },
    stats: {
      students: "75 alunos/ano"
    },
    colorTheme: "#5BC0DE" // Azul Claro
  };

  return <PartnerTemplate data={data} />;
}
