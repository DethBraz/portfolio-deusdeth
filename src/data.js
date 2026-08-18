export const profile = {
  name: 'Deusdeth Braz',
  fullName: 'Deusdeth Neto Braz Carvalho',
  role: 'Desenvolvedor Back-End Java',
  location: 'Gilbués, Piauí, Brasil',
  availability: 'Disponível para remoto',
  email: 'contatodeusdeth@gmail.com',
  phone: '(89) 98150-9164',
  linkedin: 'https://linkedin.com/in/deusdeth-braz',
  github: 'https://github.com/DethBraz',
  resumeUrl: '/Curriculo-Deusdeth-Braz.pdf',
  summary:
    'Desenvolvedor Back-End Java em formação, cursando Análise e Desenvolvimento de Sistemas na UCB, com foco em Java, Spring Boot e construção de APIs REST. Já construí APIs com autenticação JWT, persistência em PostgreSQL, testes automatizados (JUnit, Mockito, AssertJ) e documentação via Swagger/OpenAPI. Atuo profissionalmente como Auxiliar Fiscal/Contábil, o que soma domínio de regras de negócio fiscais e tributárias às habilidades de desenvolvimento — um diferencial para sistemas ERP e soluções voltadas à área fiscal.',
}

export const skillGroups = [
  {
    title: 'Linguagens',
    color: 'brand',
    items: ['Java', 'Python', 'JavaScript'],
  },
  {
    title: 'Back-End',
    color: 'navy',
    items: ['Spring Boot', 'Spring Security', 'APIs REST', 'JWT', 'Swagger / OpenAPI'],
  },
  {
    title: 'Banco de Dados',
    color: 'cyan',
    items: ['PostgreSQL', 'Modelagem relacional'],
  },
  {
    title: 'Testes',
    color: 'brand',
    items: ['JUnit 5', 'Mockito', 'AssertJ', 'Testes de integração'],
  },
  {
    title: 'Ferramentas',
    color: 'navy',
    items: ['Git & GitHub', 'GitHub Actions (CI)', 'Docker', 'IntelliJ'],
  },
  {
    title: 'Fiscal / Contábil',
    color: 'cyan',
    items: ['Simples Nacional', 'SPED Fiscal', 'NF-e', 'CFOP', 'Fortes Fiscal'],
  },
]

export const projects = [
  {
    title: 'API de Controle Financeiro Pessoal',
    description:
      'API REST em Java 17 e Spring Boot 3 com 8 endpoints: autenticação JWT via Spring Security, CRUD de transações, filtro mensal, resumo financeiro e despesas por categoria, com isolamento de dados por usuário.',
    bullets: [
      'Banco modelado em PostgreSQL com 2 entidades relacionadas (User, Transaction)',
      'Containerizada com Docker e docker-compose — API e banco em um único comando',
      '13 testes de unidade (JUnit 5, Mockito, AssertJ) + testes de integração ponta a ponta com MockMvc',
      'Pipeline de CI no GitHub Actions rodando os testes a cada push',
      'Deploy em nuvem na plataforma Railway',
    ],
    tags: ['Java 17', 'Spring Boot 3', 'PostgreSQL', 'Docker', 'JWT', 'CI/CD'],
    repo: 'https://github.com/DethBraz/api-finance',
    demo: null,
  },
  {
    title: 'API Fiscal — Gestão de Clientes e Notas Fiscais',
    description:
      'API REST em Java e Spring Boot com 10 endpoints para gestão de clientes e notas fiscais, incluindo cálculo de faturamento por cliente.',
    bullets: [
      'Testes de unidade com JUnit 5 e Mockito cobrindo os controllers',
      'Front-end complementar em HTML/CSS/JS estilo "livro-caixa" para visualização dos lançamentos',
    ],
    tags: ['Java', 'Spring Boot', 'JUnit 5', 'Mockito', 'HTML/CSS/JS'],
    repo: 'https://github.com/DethBraz/api-fiscal',
    demo: null,
  },
]

export const experience = [
  {
    role: 'Auxiliar Fiscal/Contábil',
    company: 'RR Contas — Grupo Contábil',
    place: 'Gilbués, PI',
    period: 'Jun/2026 – Atualmente',
    bullets: [
      'Lançamentos fiscais e contábeis, apuração de impostos e escrituração de NF-e no sistema Fortes Fiscal, unindo domínio de regras de negócio fiscais a habilidades de desenvolvimento.',
    ],
  },
  {
    role: 'Assistente de Secretaria',
    company: 'CETI Fausto Lustosa',
    place: null,
    period: '2024 – Mai/2026',
    bullets: ['Operação de sistema de gestão escolar e elaboração de relatórios administrativos.'],
  },
]

export const education = [
  {
    title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    place: 'Universidade Católica de Brasília (UCB)',
    period: 'Fev/2025 – Jan/2027 (em andamento)',
  },
  {
    title: 'Técnico em Informática',
    place: 'DataCursos',
    period: 'Concluído',
  },
]

export const certifications = [
  'Google Cloud Digital Leader',
  'Java Fundamentos (FIAP)',
  'User Experience (FIAP)',
  'Oracle ERP',
  'Lógica de Programação com JavaScript',
]

export const languages = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'B2 (intermediário-avançado)' },
]
