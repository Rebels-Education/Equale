import { LucideIcon, GraduationCap, Users, MapPin, Building2, BookOpen } from "lucide-react";

export interface Partner {
  id: string;
  name: string;
  description: string;
  fullDescription: string[];
  location: string;
  contact: {
    phone?: string;
    email?: string;
    instagram?: string;
    website?: string;
    facebook?: string;
    cnpj?: string;
  };
  editalUrl?: string;
  gallery?: string[];
  testimonials?: {
    name: string;
    role: string;
    text: string;
    avatar?: string;
  }[];
  stats: {
    students: string;
    since?: string;
  };
  colorTheme: string;
  coordinates: [number, number] | null; // [latitude, longitude]
}

export const partnersData: Record<string, Partner> = {
  "equalizar-ufmg": {
    id: "equalizar-ufmg",
    name: "Equalizar UFMG",
    description: "Cursinho popular da Escola de Engenharia da UFMG.",
    fullDescription: [
      "O Equalizar é um cursinho pré-vestibular gratuito e sem fins lucrativos, vinculado à Escola de Engenharia da UFMG.",
      "Fundado em 2013, o projeto tem como objetivo democratizar o acesso ao ensino superior de qualidade.",
      "As aulas são ministradas por graduandos da UFMG e o material didático é próprio."
    ],
    location: "Escola de Engenharia da UFMG - Av. Pres. Antônio Carlos, 6627 - Pampulha, Belo Horizonte - MG",
    contact: {
      email: "contato@equalizar.org.br",
      instagram: "https://www.instagram.com/cpequalizar",
      website: "https://equalizar.eng.ufmg.br/"
    },
    editalUrl: "https://www.ufmg.br/comunicacao/noticias/cursos/cursinho-popular-da-escola-de-engenharia-recebe-inscricoes-para-formacao-de-turmas-para-2026/",
    gallery: [
      "/images/equalizar-banner.jpg",
      "/images/equalizar-logo-shirt.jpg"
    ],
    testimonials: [
      {
        name: "Silvana da Silva",
        role: "Ex-aluna Aprovada",
        text: "O Equalizar foi fundamental na minha jornada. Os professores são incríveis e o material didático me preparou de verdade para o ENEM."
      },
      {
        name: "Ester",
        role: "Aprovada em Fisioterapia UFMG",
        text: "Gratidão eterna a esse projeto que abriu as portas da universidade para mim. O apoio vai muito além da sala de aula."
      }
    ],
    stats: {
      students: "UFMG Pampulha",
      since: "2013"
    },
    colorTheme: "#E63946",
    coordinates: [-19.8691, -43.9664]
  },
  "cursinho-humanizar": {
    id: "cursinho-humanizar",
    name: "Humanizar (Fafich UFMG)",
    description: "Projeto de extensão da FAFICH/UFMG com foco em Humanidades.",
    fullDescription: [
      "O Humanizar é um curso pré-vestibular popular sediado na Faculdade de Filosofia e Ciências Humanas (FAFICH) da UFMG.",
      "O foco do cursinho é oferecer uma formação crítica e humanista, além da preparação para o ENEM.",
      "Destina-se prioritariamente a estudantes de escolas públicas e em vulnerabilidade socioeconômica."
    ],
    location: "FAFICH UFMG - Av. Pres. Antônio Carlos, 6627 - Pampulha, Belo Horizonte - MG",
    contact: {
      instagram: "https://www.instagram.com/cphumanizar/"
    },
    editalUrl: "https://www.facebook.com/cphumanizar/",
    gallery: [
      "/images/humanizar-classroom.jpg"
    ],
    testimonials: [
      {
        name: "Egresso do Humanizar",
        role: "Estudante Universitário",
        text: "O Humanizar não só me ensinou conteúdos, mas me formou como cidadão crítico. A abordagem humanista faz toda a diferença."
      }
    ],
    stats: {
      students: "FAFICH UFMG",
      since: "2015"
    },
    colorTheme: "#F4A261",
    coordinates: [-19.8691, -43.9664]
  },
  "cursinho-guimaraes-rosa": {
    id: "cursinho-guimaraes-rosa",
    name: "Guimarães Rosa",
    description: "Cursinho da Faculdade de Medicina da UFMG.",
    fullDescription: [
      "O Cursinho Popular Guimarães Rosa é um projeto de extensão da Faculdade de Medicina da UFMG.",
      "O objetivo é preparar estudantes de baixa renda para o ENEM, com foco especial na área de saúde.",
      "As aulas ocorrem no campus Saúde da UFMG, na região central de Belo Horizonte."
    ],
    location: "Faculdade de Medicina UFMG - Av. Prof. Alfredo Balena, 190 - Santa Efigênia, Belo Horizonte - MG",
    contact: {
      website: "https://guimaraesrosa.org/",
      instagram: "https://www.instagram.com/cursinhoguimaraesrosa/"
    },
    editalUrl: "https://guimaraesrosa.org/aluno/",
    testimonials: [
      {
        name: "Victor Gabriel",
        role: "Ex-aluno (2023)",
        text: "O curso foi muito bom para mim, pois tem uma didática bem legal. Se precisasse usar apenas uma palavra para definir, seria gratidão."
      }
    ],
    stats: {
      students: "Medicina UFMG",
      since: "Extensão UFMG"
    },
    colorTheme: "#2A9D8F",
    coordinates: [-19.9248, -43.9284]
  },
  "cursinho-saberes": {
    id: "cursinho-saberes",
    name: "Cursinho Saberes",
    description: "Projeto de extensão da UNIFAL em Poços de Caldas.",
    fullDescription: [
      "O Cursinho Saberes é uma iniciativa da UNIFAL-MG, campus Poços de Caldas.",
      "Oferece aulas gratuitas para a comunidade local, visando o ingresso no ensino superior.",
      "O projeto conta com a colaboração de discentes e docentes da universidade."
    ],
    location: "UNIFAL Poços de Caldas - Rodovia José Aurélio Vilela, 11999 - Cidade Universitária, Poços de Caldas - MG",
    contact: {
      instagram: "https://www.instagram.com/cursinhosaberes/"
    },
    stats: {
      students: "Poços de Caldas"
    },
    colorTheme: "#457B9D",
    coordinates: [-21.7988, -46.5623]
  },
  "educa-pet": {
    id: "educa-pet",
    name: "Educa PET",
    description: "Cursinho do Programa de Educação Tutorial da UFOP.",
    fullDescription: [
      "O Educa PET é um cursinho pré-vestibular organizado pelos grupos PET da Universidade Federal de Ouro Preto (UFOP).",
      "O projeto busca atender estudantes de escolas públicas de Ouro Preto e região.",
      "As atividades incluem aulas, monitorias e simulados."
    ],
    location: "UFOP - Campus Morro do Cruzeiro, Ouro Preto - MG",
    contact: {
      instagram: "https://www.instagram.com/educapetufop/"
    },
    stats: {
      students: "Ouro Preto"
    },
    colorTheme: "#D62828",
    coordinates: [-20.3856, -43.5036]
  },
  "cccp-ufjf": {
    id: "cccp-ufjf",
    name: "CCCP (Cursinho Comunitário)",
    description: "Cursinho Comunitário Camponês e Popular da UFJF-GV.",
    fullDescription: [
      "O CCCP é um projeto de extensão da UFJF, campus Governador Valadares.",
      "Voltado para a comunidade camponesa e popular, o cursinho oferece preparação para o vestibular e formação política.",
      "O projeto valoriza os saberes locais e a educação do campo."
    ],
    location: "UFJF Campus Governador Valadares - MG",
    contact: {
      instagram: "https://www.instagram.com/cccp.ufjfgv/"
    },
    stats: {
      students: "Gov. Valadares"
    },
    colorTheme: "#1D3557",
    coordinates: [-18.8546, -41.9426]
  },
  "cursinho-exito": {
    id: "cursinho-exito",
    name: "Cursinho Êxito",
    description: "Cursinho da UNIFAL em Alfenas.",
    fullDescription: [
      "O Cursinho Êxito é um projeto da UNIFAL-MG, campus Alfenas, que prepara estudantes para o ENEM.",
      "O curso é gratuito e destinado a alunos de escolas públicas da região.",
      "As aulas são ministradas por acadêmicos da universidade, sob supervisão docente."
    ],
    location: "UNIFAL Alfenas - Rua Gabriel Monteiro da Silva, 700 - Centro, Alfenas - MG",
    contact: {
      instagram: "https://www.instagram.com/cursinhoexito/"
    },
    stats: {
      students: "Alfenas"
    },
    colorTheme: "#003049",
    coordinates: [-21.4267, -45.9478]
  },
  "cursinho-arandu": {
    id: "cursinho-arandu",
    name: "Cursinho Popular Arandu",
    description: "Projeto de extensão da UFVJM em Diamantina.",
    fullDescription: [
      "O Cursinho Popular Arandu é uma iniciativa da UFVJM em Diamantina.",
      "O projeto visa democratizar o acesso à universidade para a população do Vale do Jequitinhonha.",
      "Oferece aulas preparatórias e atividades culturais."
    ],
    location: "UFVJM - Campus JK, Rodovia MGT 367 - Km 583, 5000 - Alto da Jacuba, Diamantina - MG",
    contact: {
      instagram: "https://www.instagram.com/cursinhoarandu/"
    },
    stats: {
      students: "Diamantina"
    },
    colorTheme: "#F77F00",
    coordinates: [-18.2335, -43.6025]
  },
  "abmjovem-pre-enem": {
    id: "abmjovem-pre-enem",
    name: "ABMJovem Pré ENEM",
    description: "Cursinho popular em Justinópolis, Ribeirão das Neves.",
    fullDescription: [
      "O ABMJovem Pré ENEM é uma iniciativa da Associação Beneficente Menino Jesus, localizada em Justinópolis.",
      "O projeto visa preparar jovens da região para o ENEM, oferecendo aulas presenciais e suporte educacional.",
      "Atuando na comunidade de Nossa Senhora da Piedade, o cursinho busca transformar a realidade local através da educação."
    ],
    location: "Rua Samambaias, 62 - Nossa Senhora da Piedade, Justinópolis - Ribeirão das Neves/MG",
    contact: {
      instagram: "https://www.instagram.com/associacaomeninojesus/"
    },
    stats: {
      students: "Ribeirão das Neves"
    },
    colorTheme: "#FF9F1C",
    coordinates: [-19.7825, -44.0358]
  },
  "afin-ufu-ituiutaba": {
    id: "afin-ufu-ituiutaba",
    name: "AFIN (UFU) - Ituiutaba",
    description: "Núcleo do projeto AFIN no campus da UFU em Ituiutaba.",
    fullDescription: [
      "O AFIN Ituiutaba é um braço do projeto de extensão Ações Formativas Integradas da UFU no Pontal do Triângulo.",
      "Localizado no campus Tupã, o cursinho atende estudantes de escolas públicas de Ituiutaba e região.",
      "O projeto oferece preparação gratuita e de qualidade para o ingresso no ensino superior."
    ],
    location: "R. Vinte, 1600 - Tupã, Ituiutaba - MG, 38304-402",
    contact: {
      instagram: "https://www.instagram.com/afinpontalitb/"
    },
    stats: {
      students: "Ituiutaba"
    },
    colorTheme: "#003049",
    coordinates: [-18.9698, -49.4647]
  },
  "afin-ufu-monte-carmelo": {
    id: "afin-ufu-monte-carmelo",
    name: "AFIN (UFU) - Monte Carmelo",
    description: "Núcleo do projeto AFIN no campus da UFU em Monte Carmelo.",
    fullDescription: [
      "O AFIN Monte Carmelo é um núcleo do projeto Ações Formativas Integradas da UFU.",
      "Atua no campus da universidade em Monte Carmelo, preparando estudantes locais para o vestibular.",
      "O cursinho é gratuito e conta com a participação de alunos e professores da UFU."
    ],
    location: "LMG-746, Km 1 - Araras, Monte Carmelo - MG, 38500-000",
    contact: {
      instagram: "https://www.instagram.com/afinmontecarmelo/"
    },
    stats: {
      students: "Monte Carmelo"
    },
    colorTheme: "#2A9D8F",
    coordinates: [-18.7297, -47.4975]
  },
  "afin-ufu-patos-de-minas": {
    id: "afin-ufu-patos-de-minas",
    name: "AFIN (UFU) - Patos de Minas",
    description: "Núcleo do projeto AFIN no campus da UFU em Patos de Minas.",
    fullDescription: [
      "O AFIN Patos de Minas leva o projeto de cursinho popular da UFU para a região do Alto Paranaíba.",
      "Sediado no campus Pavony, o curso oferece aulas preparatórias para o ENEM e vestibulares.",
      "Busca atender a demanda de estudantes de escolas públicas da cidade."
    ],
    location: "Av. Getúlio Vargas, 230 - Centro, Patos de Minas - MG, 38700-126",
    contact: {
      instagram: "https://www.instagram.com/afinpatos/"
    },
    stats: {
      students: "Patos de Minas"
    },
    colorTheme: "#E9C46A",
    coordinates: [-18.5878, -46.5137]
  },
  "cursinho-atomo": {
    id: "cursinho-atomo",
    name: "Cursinho Átomo",
    description: "Cursinho popular em Lagoa Santa.",
    fullDescription: [
      "O Cursinho Átomo é uma iniciativa educacional em Lagoa Santa voltada para a preparação pré-vestibular.",
      "O projeto atende estudantes da rede pública local, oferecendo aulas e suporte pedagógico.",
      "Tem como missão facilitar o acesso ao ensino superior para jovens da cidade."
    ],
    location: "R. Mal. Deodoro da Fonseca, 532 - Centro, Lagoa Santa - MG, 33400-000",
    contact: {
      instagram: "https://www.instagram.com/cursinhoatomo/"
    },
    stats: {
      students: "Lagoa Santa"
    },
    colorTheme: "#264653",
    coordinates: [-19.6425, -43.8906]
  },
  "cursinho-cora-coralina": {
    id: "cursinho-cora-coralina",
    name: "Cursinho Cora Coralina",
    description: "Cursinho popular em Ibirité.",
    fullDescription: [
      "O Cursinho Cora Coralina atua na cidade de Ibirité, na Região Metropolitana de Belo Horizonte.",
      "O projeto oferece preparação gratuita para o ENEM e vestibulares, focado em estudantes de baixa renda.",
      "Homenageia a poetisa Cora Coralina, inspirando-se em sua força e simplicidade."
    ],
    location: "Av. São Paulo, 1076 - Vila Rosário, Ibirité - MG, 32400-000",
    contact: {
      instagram: "https://www.instagram.com/cursinhocoracoralina/"
    },
    stats: {
      students: "Ibirité"
    },
    colorTheme: "#F4A261",
    coordinates: [-20.0211, -44.0583]
  },
  "cursinho-popular-ipatinga": {
    id: "cursinho-popular-ipatinga",
    name: "Cursinho Popular (Ipatinga)",
    description: "Cursinho popular na cidade de Ipatinga.",
    fullDescription: [
      "Este Cursinho Popular é uma referência em preparação pré-vestibular gratuita em Ipatinga, no Vale do Aço.",
      "Atende estudantes de escolas públicas da cidade e região, oferecendo aulas e material de apoio.",
      "Busca promover a inclusão social através da educação de qualidade."
    ],
    location: "R. Pedras Bonitas, 355 - Iguaçu, Ipatinga - MG, 35162-086",
    contact: {
      instagram: "https://www.instagram.com/cursinhopopularipatinga/"
    },
    stats: {
      students: "Ipatinga"
    },
    colorTheme: "#E76F51",
    coordinates: [-19.4883, -42.5447]
  },
  "cursinho-popular-libertas": {
    id: "cursinho-popular-libertas",
    name: "Cursinho Popular Libertas",
    description: "Cursinho popular em Santa Luzia.",
    fullDescription: [
      "O Cursinho Popular Libertas atua em Santa Luzia, oferecendo preparação para o vestibular a jovens da cidade.",
      "O projeto é focado na democratização do acesso à universidade e na formação cidadã.",
      "As aulas são gratuitas e ministradas por voluntários engajados com a causa."
    ],
    location: "Av. VIII, 50 - Carreira Comprida, Santa Luzia - MG, 33045-090",
    contact: {
      instagram: "https://www.instagram.com/cplibertas/"
    },
    stats: {
      students: "Santa Luzia"
    },
    colorTheme: "#2A9D8F",
    coordinates: [-19.7694, -43.8517]
  },
  "cursinho-rede-conhecimento": {
    id: "cursinho-rede-conhecimento",
    name: "Cursinho Rede Conhecimento",
    description: "Cursinho popular em Nova Lima.",
    fullDescription: [
      "O Cursinho Rede Conhecimento é uma iniciativa educacional em Nova Lima.",
      "Oferece aulas preparatórias para o ENEM e vestibulares, visando atender a comunidade local.",
      "O projeto busca criar uma rede de apoio e aprendizado para os estudantes."
    ],
    location: "R. Santa Cruz, 362 - Centro, Nova Lima - MG, 34000-000",
    contact: {
      instagram: "https://www.instagram.com/redeconhecimento/"
    },
    stats: {
      students: "Nova Lima"
    },
    colorTheme: "#457B9D",
    coordinates: [-19.9856, -43.8467]
  },
  "cursinho-ubuntu": {
    id: "cursinho-ubuntu",
    name: "Cursinho Ubuntu",
    description: "Cursinho popular em Viçosa.",
    fullDescription: [
      "O Cursinho Ubuntu é um projeto social sediado em Viçosa, inspirado na filosofia 'eu sou porque nós somos'.",
      "Oferece preparação gratuita para vestibulares, com foco em estudantes negros e de baixa renda.",
      "Além das aulas, promove debates sobre questões raciais e sociais."
    ],
    location: "Av. Peter Henry Rolfs, s/n - Campus Universitário, Viçosa - MG, 36570-900",
    contact: {
      instagram: "https://www.instagram.com/cursinhoubuntu/"
    },
    stats: {
      students: "Viçosa"
    },
    colorTheme: "#D62828",
    coordinates: [-20.7606, -42.8708]
  },
  "emancipa-minas": {
    id: "emancipa-minas",
    name: "Emancipa Minas",
(Content truncated due to size limit. Use line ranges to read remaining content)