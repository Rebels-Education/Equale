import PartnerTemplate from "./PartnerTemplate";

export default function Consciencia() {
  const data = {
    name: "Núcleo de Consciência Negra",
    description: "Projeto de extensão da UFMG focado na preparação para vestibulares e na valorização da cultura negra.",
    fullDescription: [
      "O Cursinho do Núcleo de Consciência Negra é um projeto de extensão da UFMG que alia a preparação para o vestibular à luta antirracista.",
      "Localizado na FAFICH, o cursinho oferece aulas gratuitas para o ENEM e vestibulares, priorizando o atendimento a estudantes negros e de escolas públicas.",
      "Além do conteúdo acadêmico, o espaço promove debates, eventos culturais e formação política, fortalecendo a identidade negra e a luta por cotas e permanência na universidade."
    ],
    location: "FAFICH UFMG - Sala 1058 - Av. Pres. Antônio Carlos, 6627 - Pampulha, Belo Horizonte",
    contact: {
      email: "centrodeconvivencianegra@gmail.com",
      facebook: "https://www.facebook.com/consciencianegranaufmg/",
      instagram: "https://www.instagram.com/ccnufmg/"
    },
    stats: {
      students: "Vagas anuais"
    },
    colorTheme: "#000000" // Preto
  };

  return <PartnerTemplate data={data} />;
}
