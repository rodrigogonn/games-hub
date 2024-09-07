
import { Case } from "./_components/ShowcaseCard";

export const cases: Case[] = [
  {
    title: "Faça seu currículo",
    description: 'Site para criar currículos de forma simples e rápida',
    preview: require("./_previews/faca-seu-curriculo.gif").default,
    website: "https://facaseucurriculo-79fc3.web.app/",
    source: "https://github.com/Oosasukel/facaseucurriculo",
    tags: ["react", "typescript", "firebase"],
  },
  {
    title: "Assistente Lexter",
    description: 'Assistente para ajudar advogados utilizando inteligência artificial',
    preview: require("./_previews/lexter.png").default,
    website: "https://lexter.ai/assistentelexter",
    source: "",
    tags: ["react", "node.js", "typescript", "python", "sst", "cdk", "lambda", "s3", "dynamodb", "sqs", "firebase", "mongo", "ecs", "rds", "postgres", "web-socket"],
  },
  {
    title: "Among CSS",
    description: 'Personagem e animação feitos somente com CSS',
    preview: require("./_previews/among-css.gif").default,
    website: "https://oosasukel.github.io/AmongUsCss/public/index.html",
    source: "https://github.com/Oosasukel/AmongUsCss",
    tags: ["css", "web-socket"],
  },
  {
    title: "CSS 3D Environment",
    description: 'Ambiente 3D feito com CSS',
    preview: require("./_previews/css-3d-environment.gif").default,
    website: "https://oosasukel.github.io/CSS_3D_Enviroment",
    source: "https://github.com/Oosasukel/CSS_3D_Enviroment",
    tags: ["css"],
  },
  {
    title: "Nav",
    description: "App de telemedicina",
    preview: require("./_previews/nav.png").default,
    website: "https://nav.dasa.com.br/",
    source: "",
    tags: ["react", "node.js", "typescript", "mongo", "firebase", "micro-frontend"],
  },
  {
    title: "Chat",
    description: 'Chat feito com Node.js e Socket.io',
    preview: require("./_previews/chat.gif").default,
    website: "",
    source: "https://github.com/Oosasukel/Real-Time-Chat-Socket.io",
    tags: ["node.js", "web-socket"],
  },
];