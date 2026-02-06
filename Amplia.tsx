import PartnerTemplate from "./PartnerTemplate";

export default function Amplia() {
  const data = {
    name: "Amplia Educação",
    description: "Cursinho popular gratuito pré-Enem transformando vidas através da educação na região Norte de BH.",
    fullDescription: [
      "O Projeto Amplia Educação tem como missão atender os estudantes das comunidades periféricas fomentando a educação através de uma área tida como prioritária: o acesso ao ensino superior.",
      "Visto que atualmente o Exame Nacional do Ensino Médio é a principal porta de entrada para o ensino superior no Brasil, o Amplia Educação Pré-ENEM foi pensado e desenhado com o objetivo de preparar os estudantes que serão submetidos ao exame por meio de classes focalizadas ao estilo da prova.",
      "O projeto visa reduzir as disparidades existentes entre estudantes que não possuem recursos financeiros para arcar com os custos dos cursos pré-vestibulares convencionais."
    ],
    location: "Escola Municipal Professora Acidália Lott - Bairro Paulo VI, Belo Horizonte - MG",
    contact: {
      email: "amplia.educacao@gmail.com",
      instagram: "https://www.instagram.com/ampliaeducacao/",
      facebook: "https://www.facebook.com/ampliaeducacao/"
    },
    stats: {
      students: "Turmas anuais"
    },
    colorTheme: "#FF9F1C" // Laranja Vibrante
  };

  return <PartnerTemplate data={data} />;
}
