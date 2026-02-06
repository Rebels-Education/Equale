import PartnerTemplate from "./PartnerTemplate";

export default function DoarEduca() {
  const data = {
    name: "Doar Educa",
    description: "Iniciativa autônoma e voluntária com mais de 10 anos de experiência, atuando em múltiplas unidades em BH e região.",
    fullDescription: [
      "Criado em 2016, o projeto é uma iniciativa autônoma e totalmente voluntária de professores e amigos da cidade de Belo Horizonte, reunidos para oferecer uma preparação consciente e cidadã para o ENEM.",
      "O projeto contempla jovens e adultos que buscam melhores condições de vida por meio da educação e formação superior.",
      "Com experiência de 10 anos com gerenciamento de iniciativas de voluntariado, formou-se uma rede de cursinhos, com unidades na Serra, Morro Alto, Dandara e Vila Dias."
    ],
    location: "Múltiplas Unidades: Serra, Nova Pampulha, Santa Tereza e Morro Alto (Vespasiano)",
    contact: {
      email: "doareduca@gmail.com",
      website: "https://www.facebook.com/doareduca/",
      cnpj: "17.349.899/0001-55"
    },
    stats: {
      students: "100 a 150 alunos/ano"
    },
    colorTheme: "#F0AD4E" // Laranja/Amarelo
  };

  return <PartnerTemplate data={data} />;
}
