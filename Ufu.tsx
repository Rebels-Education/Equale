import PartnerTemplate from "./PartnerTemplate";

export default function Ufu() {
  const data = {
    name: "Programa AFIN - UFU",
    description: "Ações Formativas Integradas da UFU, oferecendo preparação gratuita em Uberlândia e Patos de Minas.",
    fullDescription: [
      "O Programa AFIN (Ações Formativas Integradas) é uma iniciativa de extensão da Universidade Federal de Uberlândia (UFU) que visa democratizar o acesso ao ensino superior.",
      "Com unidades em Uberlândia e Patos de Minas, o projeto oferece aulas preparatórias gratuitas para o ENEM e vestibulares, além de atividades culturais e de formação cidadã.",
      "Coordenado pela Pró-Reitoria de Extensão e Cultura (PROEXC), o AFIN conta com a participação ativa de estudantes e servidores da UFU."
    ],
    location: "UFU - Uberlândia e Patos de Minas - MG",
    contact: {
      email: "cidasatto@ufu.br",
      website: "https://proexc.ufu.br/programa/afin",
      instagram: "https://www.instagram.com/afinpatos/"
    },
    stats: {
      students: "Múltiplos Campi"
    },
    colorTheme: "#3498DB" // Azul UFU
  };

  return <PartnerTemplate data={data} />;
}
