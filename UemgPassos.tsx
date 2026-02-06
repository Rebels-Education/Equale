import PartnerTemplate from "./PartnerTemplate";

export default function UemgPassos() {
  const data = {
    name: "Cursinho Popular UEMG Passos",
    description: "Projeto de extensão da UEMG Unidade Passos, oferecendo aulas noturnas gratuitas.",
    fullDescription: [
      "O Cursinho Popular da UEMG Passos é um projeto de extensão universitária que oferece aulas preparatórias gratuitas para o ENEM e vestibulares.",
      "As aulas acontecem de segunda a sexta-feira, das 18h às 21h, no Bloco 6 da UEMG Passos, facilitando o acesso de estudantes que trabalham durante o dia.",
      "O projeto é conduzido por discentes e docentes da universidade, promovendo a integração entre a academia e a comunidade local."
    ],
    location: "UEMG Passos (Bloco 6) - R. Dr. Carvalho, 1410 - Passos, MG",
    contact: {
      instagram: "https://www.instagram.com/cursinho.popular/"
    },
    stats: {
      students: "Vagas anuais"
    },
    colorTheme: "#C0392B" // Vermelho UEMG
  };

  return <PartnerTemplate data={data} />;
}
