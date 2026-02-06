import PartnerTemplate from "./PartnerTemplate";

export default function Ufv() {
  const data = {
    name: "Cursinho Popular UFV",
    description: "Cursinho Pré-ENEM 100% gratuito da UFV em Viçosa, promovendo acesso à educação superior desde 1998.",
    fullDescription: [
      "O Cursinho Popular da UFV é um projeto de extensão histórico, atuando desde 1998 na preparação de estudantes de Viçosa e região para o vestibular.",
      "Com aulas noturnas ministradas no campus da universidade, o projeto oferece uma oportunidade única de imersão no ambiente acadêmico.",
      "Totalmente gratuito, o cursinho conta com o apoio da Pró-Reitoria de Ensino (PRE) e é gerido por estudantes da UFV, mantendo vivo o ideal de educação pública e de qualidade para todos."
    ],
    location: "UFV - Viçosa - MG",
    contact: {
      email: "cursinhopopular@ufv.br",
      instagram: "https://www.instagram.com/cursinhopopularufv/"
    },
    stats: {
      students: "Desde 1998",
      founded: "1998"
    },
    colorTheme: "#E74C3C" // Vermelho/Laranja
  };

  return <PartnerTemplate data={data} />;
}
