import PartnerTemplate from "./PartnerTemplate";

export default function Sanjoanense() {
  const data = {
    name: "Cursinho Popular Edson Luís (CPEL)",
    description: "Projeto de extensão da UFSJ em São João del-Rei, oferecendo educação popular e crítica.",
    fullDescription: [
      "O Cursinho Popular Edson Luís (CPEL) é um projeto de extensão da Universidade Federal de São João del-Rei (UFSJ).",
      "Inspirado na luta do movimento estudantil, o CPEL oferece aulas preparatórias gratuitas para o ENEM e vestibulares, voltadas para a comunidade de baixa renda de São João del-Rei e região.",
      "Nossa proposta pedagógica vai além do conteúdo tradicional, incentivando o pensamento crítico e a participação social dos estudantes."
    ],
    location: "UFSJ - Campus Dom Bosco - Praça Dom Helvécio, 74 - Fábricas, São João del Rei - MG",
    contact: {
      email: "cpel@ufsj.edu.br",
      instagram: "https://www.instagram.com/cursinhoedsonluis/"
    },
    stats: {
      students: "Vagas anuais"
    },
    colorTheme: "#8E44AD" // Roxo
  };

  return <PartnerTemplate data={data} />;
}
