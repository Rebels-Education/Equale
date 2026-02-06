import PartnerTemplate from "./PartnerTemplate";

export default function ConceicaoEvaristo() {
  const data = {
    name: "Cursinho Popular Conceição Evaristo",
    description: "Cursinho popular atuante na região Leste de Belo Horizonte, promovendo desenvolvimento social e cultural através da educação.",
    fullDescription: [
      "O Cursinho Popular Conceição Evaristo é uma iniciativa educacional localizada no bairro Horto, em Belo Horizonte. O projeto homenageia em seu nome a grande escritora mineira, refletindo seu compromisso com a valorização da cultura e da identidade negra.",
      "Nosso foco é atender estudantes de escolas públicas da região Leste, oferecendo preparação de qualidade para o ENEM e vestibulares.",
      "Além das aulas regulares, buscamos promover a formação crítica e cidadã dos estudantes, debatendo temas relevantes para a sociedade e para a comunidade local."
    ],
    location: "Escola Municipal Professor Domiciano Vieira - Rua Maria Gregória, 100 - Horto, Belo Horizonte - MG",
    contact: {
      email: "cursinhopopularce@gmail.com",
      instagram: "https://www.instagram.com/cursinhopopularce/",
      facebook: "https://www.facebook.com/cursinhopopularce/",
      website: "https://forms.gle/UhzoAqmYM1PRnvo99"
    },
    stats: {
      students: "90 alunos/ano"
    },
    colorTheme: "#8E44AD" // Roxo
  };

  return <PartnerTemplate data={data} />;
}
