import PartnerTemplate from "./PartnerTemplate";

export default function Uftm() {
  const data = {
    name: "CEPOP UFTM",
    description: "Cursinho de Educação Popular da UFTM, preparando estudantes de Uberaba e região desde 2004.",
    fullDescription: [
      "O CEPOP (Cursinho de Educação Popular) é um projeto de extensão vinculado ao CEFORES/UFTM, atuando desde 2004 na preparação de estudantes para o ingresso no ensino superior.",
      "Com uma equipe formada por discentes e docentes da UFTM, o cursinho oferece aulas gratuitas e de qualidade, focadas nas demandas do ENEM e vestibulares.",
      "O projeto tem um forte compromisso social, priorizando o atendimento a estudantes de escolas públicas e em situação de vulnerabilidade socioeconômica."
    ],
    location: "UFTM - Uberaba - MG",
    contact: {
      instagram: "https://www.instagram.com/cepopuftm/"
    },
    stats: {
      students: "Desde 2004",
      founded: "2004"
    },
    colorTheme: "#2ECC71" // Verde UFTM
  };

  return <PartnerTemplate data={data} />;
}
