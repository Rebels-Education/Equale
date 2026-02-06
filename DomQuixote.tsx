import PartnerTemplate from "./PartnerTemplate";

export default function DomQuixote() {
  const data = {
    name: "Cursinho Popular Dom Quixote",
    description: "Projeto de extensão da Faculdade de Letras da UFMG, unindo preparação para o ENEM e formação de professores.",
    fullDescription: [
      "O Cursinho Popular Dom Quixote é um projeto de extensão vinculado à Faculdade de Letras da UFMG. Ele tem um duplo objetivo: preparar estudantes de escolas públicas para o ENEM e contribuir para a formação docente dos graduandos da universidade.",
      "As aulas são ministradas por alunos da UFMG, sob orientação de professores da Faculdade de Letras, garantindo um ensino de qualidade e atualizado.",
      "O projeto oferece material didático próprio e acompanhamento pedagógico individualizado, buscando reduzir as desigualdades no acesso ao ensino superior."
    ],
    location: "Faculdade de Letras da UFMG - Av. Pres. Antônio Carlos, 6627 - Pampulha, Belo Horizonte",
    contact: {
      email: "atendimento2cenex@gmail.com",
      instagram: "https://www.instagram.com/cursinhodomquixote/",
      facebook: "https://www.facebook.com/cursinhopopulardomquixote/"
    },
    stats: {
      students: "Vagas anuais"
    },
    colorTheme: "#E74C3C" // Vermelho/Laranja
  };

  return <PartnerTemplate data={data} />;
}
