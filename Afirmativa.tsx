import PartnerTemplate from "./PartnerTemplate";

export default function Afirmativa() {
  const data = {
    name: "Cursinho Afirmativa",
    description: "Cursinho popular autogerido em parceria com o Espaço Comum Luiz Estrela.",
    fullDescription: [
      "O Cursinho Afirmativa é mobilizado pelo MOB (Movimento de Organização de Base) em parceria com o Espaço Comum Luiz Estrela. É uma cooperativa de pessoas ligadas à área de educação, moradores da comunidade do São Lucas e demais interessados.",
      "A iniciativa já colheu frutos desde 2018 com aprovações de alunas e alunos com apenas três meses de curso, inclusive na UFMG.",
      "O Cursinho está presente no Espaço de segunda à sexta-feira, às 19 horas, oferecendo preparação de qualidade para vestibulares e ENEM."
    ],
    location: "Espaço Comum Luiz Estrela - R. Manaus, 348. Sta Efigênia, Belo Horizonte - MG",
    contact: {
      email: "luizestrela.comunicacao@gmail.com",
      website: "https://espacocomumluizestrela.org/afirmativa/",
      facebook: "https://www.facebook.com/ftamobmg/"
    },
    stats: {
      students: "Vagas anuais limitadas",
      founded: "2018"
    },
    colorTheme: "#E63946" // Vermelho
  };

  return <PartnerTemplate data={data} />;
}
