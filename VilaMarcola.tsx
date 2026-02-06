import PartnerTemplate from "./PartnerTemplate";

export default function VilaMarcola() {
  const data = {
    name: "Pré-Vestibular Vila Marçola",
    description: "Associação Pré-Vestibular Comunitário Vila Marçola, atuando no Aglomerado da Serra.",
    fullDescription: [
      "A Associação Pré-Vestibular Comunitário Vila Marçola é um projeto educacional desenvolvido junto à população do Aglomerado da Serra, em Belo Horizonte.",
      "Nosso objetivo é oferecer oportunidades reais de acesso ao ensino superior para jovens e adultos da comunidade, através de aulas preparatórias de qualidade.",
      "O projeto funciona como um espaço de resistência e transformação social, fortalecendo a identidade comunitária e a luta por direitos."
    ],
    location: "Rua Caraça, 966, 2º andar, Serra - Belo Horizonte - MG",
    contact: {
      email: "pvcvilamarcolabh@gmail.com",
      website: "https://apvcvilamarcola.org.br/",
      phone: "(31) 99498-7763"
    },
    stats: {
      students: "Comunitário"
    },
    colorTheme: "#8E44AD" // Roxo
  };

  return <PartnerTemplate data={data} />;
}
