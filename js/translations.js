/**
 * Translations dictionary.
 *
 * Each language ("en", "pt") maps a translation key to its text.
 * Keys are referenced in index.html through the `data-i18n` attribute
 * (element text) and the `data-i18n-attr` attribute (element attributes).
 *
 * To add a language:
 *   1. Add a new object below with the same keys as "en".
 *   2. Register the code in SUPPORTED_LANGUAGES (js/i18n.js).
 *   3. Add a button with a matching `data-lang` value in index.html.
 *
 * Only plain text is stored here. It is always inserted with `textContent`,
 * never as HTML, so it cannot inject markup into the page.
 */
(function (global) {
  'use strict';

  // Shared namespace for all site scripts (avoids many separate globals).
  global.Portfolio = global.Portfolio || {};

  global.Portfolio.translations = {
    /* ---------------------------------------------------------------------
       English (default language)
       --------------------------------------------------------------------- */
    en: {
      // Page metadata
      'meta.title': 'Lauro Calabria | Portfolio',
      'meta.description': 'Portfolio of Lauro Calabria, a junior full-stack developer based in Porto, Portugal. Projects, experience, certificates and contact.',

      // Common
      'skip': 'Skip to content',
      'common.newtab': ' (opens in a new tab)',

      // Navigation
      'nav.label': 'Main',
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.experience': 'Experience',
      'nav.certificates': 'Certificates',
      'nav.contact': 'Contact',
      'lang.label': 'Language',
      'theme.label': 'Dark theme',
      'backtotop.label': 'Back to top',

      // Hero
      'hero.role': 'Junior Full-Stack Developer',
      'hero.intro': 'I enjoy solving problems and turning ideas into code. I build web applications with JavaScript, React, Node.js and Python.',
      'hero.location': 'Based in Porto, Portugal',
      'hero.hire': 'Hire me',
      'hero.cv': 'Download CV',
      'hero.photo.alt': 'Photo of Lauro Calabria',

      // About
      'about.title': 'About me',
      'about.p1': "I recently completed a 670-hour Full-Stack Developer qualification at SENAI. I'm at the start of my software career, improving through courses and by adding projects to this portfolio. I'm now working on projects such as authentication systems and API integrations.",
      'about.p2': 'Before moving into software, I graduated in Dentistry and worked as a café manager. Those roles taught me to solve problems, adapt quickly and stay calm under pressure.',
      'about.location.label': 'Location',
      'about.location.value': 'Porto, Portugal',
      'about.languages.label': 'Languages',
      'about.languages.value': 'English (fluent), Portuguese (native)',

      // Skills
      'skills.title': 'Skills',
      'skills.languages': 'Languages',
      'skills.frontend': 'Front-end',
      'skills.backend': 'Back-end',
      'skills.practices': 'Practices and tools',
      'skills.restapis': 'REST APIs',
      'skills.databases': 'Databases',
      'skills.agile': 'Agile methodologies',
      'skills.testing': 'Front-end and back-end testing',

      // Projects
      'projects.title': 'Projects',
      'projects.intro': 'Projects from my training and personal practice. The code for each one is public on GitHub.',
      'projects.view': 'View on GitHub',
      'projects.more': 'See all repositories on GitHub',
      'projects.gamemania.title': 'Game Mania',
      'projects.gamemania.desc': 'Website project for a game store.',
      'projects.gamemaniaangular.title': 'Game Mania (Angular)',
      'projects.gamemaniaangular.desc': 'The Game Mania site built with Angular.',
      'projects.cursoemvideo.title': 'Curso em Vídeo website',
      'projects.cursoemvideo.desc': 'Website project.',
      'projects.python.title': 'Python exercises',
      'projects.python.desc': 'Python practice exercises.',
      'projects.versioning.title': 'Version control and collaboration',
      'projects.versioning.desc': 'Conflict resolution, from the SENAI course.',
      'projects.markdown.title': 'Markdown exercises',
      'projects.markdown.desc': 'Markdown practice exercises.',

      // Experience and education
      'experience.title': 'Experience and education',
      'experience.work.heading': 'Experience',
      'experience.training.date': 'Feb 2025 – Feb 2026',
      'experience.training.title': 'Full-Stack development training projects',
      'experience.training.b1': 'Built responsive web interfaces with HTML, CSS and JavaScript.',
      'experience.training.b2': 'Integrated front-end applications with REST APIs.',
      'experience.training.b3': 'Developed REST APIs for communication between application layers.',
      'experience.training.b4': 'Implemented back-end programming logic and application workflows.',
      'experience.training.b5': 'Used Git for version control and collaborative workflows.',
      'experience.training.b6': 'Tested and debugged front-end and back-end code.',
      'experience.training.b7': 'Applied Agile methodologies during project development.',
      'experience.cafe.date': 'Outside tech',
      'experience.cafe.title': 'Café Manager',
      'experience.cafe.b1': 'Led daily operations in a high-demand environment.',
      'experience.cafe.b2': 'Managed team performance and workflow optimization.',
      'experience.cafe.b3': 'Improved service efficiency and customer satisfaction.',
      'experience.cafe.b4': 'Solved operational issues in real time under pressure.',
      'education.heading': 'Education',
      'education.senai.date': 'Feb 2025 – Feb 2026',
      'education.senai.title': 'Full-Stack Developer Professional Qualification',
      'education.senai.org': 'SENAI Pernambuco',
      'education.senai.desc': '670 hours covering front-end, back-end, REST APIs, testing, version control, databases and agile methodologies.',
      'education.dentistry.date': 'Graduated 2023',
      'education.dentistry.title': "Bachelor's Degree in Dentistry",
      'education.dentistry.org': 'Universidade Federal de Pernambuco',
      'education.computing.date': '2 years (incomplete)',
      'education.computing.title': 'Computer Engineering',
      'education.computing.desc': 'Coursework in programming logic, discrete mathematics, algebra and analytic geometry.',

      // Courses and certificates
      'certificates.title': 'Courses and certificates',
      'certificates.view': 'View certificate (PDF)',
      'certificates.verify': 'Verify on the SENAI website',
      'certificates.validator': 'Validation code:',
      'certificates.code': 'Certificate code:',
      'certificates.senai.title': 'Professional Qualification in Full-Stack Programming',
      'certificates.senai.org': 'SENAI Pernambuco',
      'certificates.senai.desc': '670 hours, 12 Feb 2025 to 23 Feb 2026. Issued on 9 March 2026.',
      'certificates.python3.desc': '40-hour video course, completed on 7 August 2026.',
      'certificates.python2.desc': '40-hour video course, completed on 24 March 2026.',
      'certificates.python1.desc': '40-hour video course, completed on 2 February 2025.',
      'certificates.git.title': 'Git and GitHub',
      'certificates.git.desc': '20-hour video course, completed on 7 February 2025.',
      'certificates.ai.desc': 'Covers Python essentials, functional and object-oriented programming, scripts, modules and APIs, and working with LLMs. Issued on 14 April 2026.',

      // Contact
      'contact.title': 'Hire me',
      'contact.text': 'Have an opportunity or a project in mind? Send me a message and it will arrive directly in my inbox.',
      'contact.form.name': 'Your name',
      'contact.form.email': 'Your email',
      'contact.form.message': 'Message',
      'contact.form.send': 'Send message',
      'contact.status.sending': 'Sending…',
      'contact.status.success': 'Thank you! Your message was sent.',
      'contact.status.error': 'Something went wrong. Please try again or email me directly.',
      'contact.status.invalid': 'Please fill in all fields correctly before sending.',
      'contact.status.fallback': 'Opening your email app…'
    },

    /* ---------------------------------------------------------------------
       Portuguese (Brazil)
       --------------------------------------------------------------------- */
    pt: {
      // Page metadata
      'meta.title': 'Lauro Calabria | Portfólio',
      'meta.description': 'Portfólio de Lauro Calabria, desenvolvedor full-stack júnior em Porto, Portugal. Projetos, experiência, certificados e contato.',

      // Common
      'skip': 'Ir para o conteúdo',
      'common.newtab': ' (abre em uma nova aba)',

      // Navigation
      'nav.label': 'Principal',
      'nav.about': 'Sobre',
      'nav.skills': 'Habilidades',
      'nav.projects': 'Projetos',
      'nav.experience': 'Experiência',
      'nav.certificates': 'Certificados',
      'nav.contact': 'Contato',
      'lang.label': 'Idioma',
      'theme.label': 'Tema escuro',
      'backtotop.label': 'Voltar ao topo',

      // Hero
      'hero.role': 'Desenvolvedor Full-Stack Júnior',
      'hero.intro': 'Gosto de resolver problemas e transformar ideias em código. Desenvolvo aplicações web com JavaScript, React, Node.js e Python.',
      'hero.location': 'Baseado em Porto, Portugal',
      'hero.hire': 'Contrate-me',
      'hero.cv': 'Baixar currículo',
      'hero.photo.alt': 'Foto de Lauro Calabria',

      // About
      'about.title': 'Sobre mim',
      'about.p1': 'Concluí recentemente a qualificação profissional de Programador Full-Stack no SENAI, com 670 horas. Estou no início da minha carreira em software, evoluindo com cursos e adicionando projetos a este portfólio. Agora trabalho em projetos como sistemas de autenticação e integrações com APIs.',
      'about.p2': 'Antes de migrar para a área de software, me formei em Odontologia e trabalhei como gerente de café. Essas experiências me ensinaram a resolver problemas, a me adaptar rapidamente e a manter a calma sob pressão.',
      'about.location.label': 'Localização',
      'about.location.value': 'Porto, Portugal',
      'about.languages.label': 'Idiomas',
      'about.languages.value': 'Inglês (fluente), Português (nativo)',

      // Skills
      'skills.title': 'Habilidades',
      'skills.languages': 'Linguagens',
      'skills.frontend': 'Front-end',
      'skills.backend': 'Back-end',
      'skills.practices': 'Práticas e ferramentas',
      'skills.restapis': 'APIs REST',
      'skills.databases': 'Bancos de dados',
      'skills.agile': 'Metodologias ágeis',
      'skills.testing': 'Testes de front-end e back-end',

      // Projects
      'projects.title': 'Projetos',
      'projects.intro': 'Projetos da minha formação e da prática pessoal. O código de cada um é público no GitHub.',
      'projects.view': 'Ver no GitHub',
      'projects.more': 'Ver todos os repositórios no GitHub',
      'projects.gamemania.title': 'Game Mania',
      'projects.gamemania.desc': 'Projeto de site para uma loja de games.',
      'projects.gamemaniaangular.title': 'Game Mania (Angular)',
      'projects.gamemaniaangular.desc': 'O site Game Mania desenvolvido com Angular.',
      'projects.cursoemvideo.title': 'Site Curso em Vídeo',
      'projects.cursoemvideo.desc': 'Projeto de um site.',
      'projects.python.title': 'Exercícios de Python',
      'projects.python.desc': 'Exercícios de prática em Python.',
      'projects.versioning.title': 'Versionamento e colaboração',
      'projects.versioning.desc': 'Solução de conflitos, do curso do SENAI.',
      'projects.markdown.title': 'Exercícios de Markdown',
      'projects.markdown.desc': 'Exercícios de prática em Markdown.',

      // Experience and education
      'experience.title': 'Experiência e formação',
      'experience.work.heading': 'Experiência',
      'experience.training.date': 'Fev 2025 – Fev 2026',
      'experience.training.title': 'Projetos de treinamento em desenvolvimento Full-Stack',
      'experience.training.b1': 'Criei interfaces web responsivas com HTML, CSS e JavaScript.',
      'experience.training.b2': 'Integrei aplicações front-end com APIs REST.',
      'experience.training.b3': 'Desenvolvi APIs REST para a comunicação entre as camadas da aplicação.',
      'experience.training.b4': 'Implementei a lógica de programação do back-end e os fluxos de trabalho da aplicação.',
      'experience.training.b5': 'Usei Git para controle de versão e fluxos de trabalho colaborativos.',
      'experience.training.b6': 'Testei e depurei código de front-end e back-end.',
      'experience.training.b7': 'Apliquei metodologias ágeis durante o desenvolvimento dos projetos.',
      'experience.cafe.date': 'Fora da área de tecnologia',
      'experience.cafe.title': 'Gerente de café',
      'experience.cafe.b1': 'Liderei as operações diárias em um ambiente de alta demanda.',
      'experience.cafe.b2': 'Gerenciei o desempenho da equipe e a otimização do fluxo de trabalho.',
      'experience.cafe.b3': 'Melhorei a eficiência do atendimento e a satisfação dos clientes.',
      'experience.cafe.b4': 'Resolvi problemas operacionais em tempo real, sob pressão.',
      'education.heading': 'Formação',
      'education.senai.date': 'Fev 2025 – Fev 2026',
      'education.senai.title': 'Qualificação Profissional de Desenvolvedor Full-Stack',
      'education.senai.org': 'SENAI Pernambuco',
      'education.senai.desc': '670 horas abrangendo front-end, back-end, APIs REST, testes, controle de versão, bancos de dados e metodologias ágeis.',
      'education.dentistry.date': 'Formado em 2023',
      'education.dentistry.title': 'Bacharelado em Odontologia',
      'education.dentistry.org': 'Universidade Federal de Pernambuco',
      'education.computing.date': '2 anos (incompleto)',
      'education.computing.title': 'Engenharia da Computação',
      'education.computing.desc': 'Disciplinas de lógica de programação, matemática discreta, álgebra e geometria analítica.',

      // Courses and certificates
      'certificates.title': 'Cursos e certificados',
      'certificates.view': 'Ver certificado (PDF)',
      'certificates.verify': 'Verificar no site do SENAI',
      'certificates.validator': 'Código validador:',
      'certificates.code': 'Código do certificado:',
      'certificates.senai.title': 'Qualificação Profissional em Programador Full-Stack',
      'certificates.senai.org': 'SENAI Pernambuco',
      'certificates.senai.desc': '670 horas, de 12/02/2025 a 23/02/2026. Emitido em 9 de março de 2026.',
      'certificates.python3.desc': 'Curso em videoaula de 40 horas, concluído em 7 de agosto de 2026.',
      'certificates.python2.desc': 'Curso em videoaula de 40 horas, concluído em 24 de março de 2026.',
      'certificates.python1.desc': 'Curso em videoaula de 40 horas, concluído em 2 de fevereiro de 2025.',
      'certificates.git.title': 'Git e GitHub',
      'certificates.git.desc': 'Curso em videoaula de 20 horas, concluído em 7 de fevereiro de 2025.',
      'certificates.ai.desc': 'Abrange fundamentos de Python, programação funcional e orientada a objetos, criação de scripts, módulos e APIs, e trabalho com LLMs. Emitido em 14 de abril de 2026.',

      // Contact
      'contact.title': 'Contrate-me',
      'contact.text': 'Tem uma oportunidade ou um projeto em mente? Envie uma mensagem e ela chegará diretamente à minha caixa de entrada.',
      'contact.form.name': 'Seu nome',
      'contact.form.email': 'Seu e-mail',
      'contact.form.message': 'Mensagem',
      'contact.form.send': 'Enviar mensagem',
      'contact.status.sending': 'Enviando…',
      'contact.status.success': 'Obrigado! Sua mensagem foi enviada.',
      'contact.status.error': 'Algo deu errado. Tente novamente ou envie um e-mail diretamente.',
      'contact.status.invalid': 'Preencha todos os campos corretamente antes de enviar.',
      'contact.status.fallback': 'Abrindo o seu aplicativo de e-mail…'
    }
  };
})(window);
