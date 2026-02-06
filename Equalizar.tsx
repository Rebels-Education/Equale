import PartnerTemplate from "./PartnerTemplate";

export default function Equalizar() {
  const data = {
    name: "Equalizar - UFMG",
    description: "Organização estudantil da UFMG dedicada a promover igualdade, diversidade e inclusão através da educação popular.",
    fullDescription: [
      "O Equalizar é uma organização estudantil da Universidade Federal de Minas Gerais (UFMG) que nasceu da convicção de que a educação é uma poderosa ferramenta para transformar realidades e construir uma sociedade mais justa.",
      "Oferecemos dois cursos principais gratuitos e presenciais: o Pré-Técnico, focado em vestibulares como CEFET e COLTEC, e o Pré-ENEM, voltado para o ingresso no ensino superior.",
      "Nossa equipe é composta inteiramente por voluntários, desde a área pedagógica (professores e monitores) até a gestão administrativa, que inclui diretorias de Presidência, Comunicação, RH e Pedagógica.",
      "Além das aulas, contamos com um Núcleo de Atenção Psicopedagógico para acompanhar os alunos, reforçando nosso compromisso com a permanência e o bem-estar estudantil."
    ],
    location: "Escola de Engenharia da UFMG - Av. Pres. Antônio Carlos, 6627 - Pampulha, Belo Horizonte",
    contact: {
      website: "https://equalizar.eng.ufmg.br/",
      social: "@cpequalizar"
    },
    stats: {
      students: "Vagas Variáveis (Pré-Técnico e Pré-ENEM)"
    },
    colorTheme: "#003B5C" // Azul Escuro Institucional
  };

  return <PartnerTemplate data={data} />;
}
