import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Guillermo | Software Engineer',
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Guillermo Hernandez.',
  subtitle: "I'm a Software Engineer 💻 & full-time Dog dad 🐶.",
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'about.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume:
    'https://www.linkedin.com/in/1guillermohernandez/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAA6RGr4B2FUn9VTcOb_zms6kgy4hoeG9SY4,1635455634937)/',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'resume.png',
    title: 'Resu.ME',
    info: "Resu.Me is intented to be a one-stop resume and cover letter destination for aspiring junior-engineers. Via simple text field input, users can quickly create and download professional and well-formatted .pdf resumes and cover letters. As an added bonus, users can find inspiration on their job hunt through Resu.Me's built-in Levels.fyi integrations.",
    info2: 'Stacks used: ',
    url: 'https://resume-render21.herokuapp.com/',
    repo: 'https://github.com/Marcus-Guillermo/frontend',
  },
  {
    id: nanoid(),
    img: 'hound.png',
    title: 'Hound - CRM',
    info: 'Hound is a CRM system in which businesses and orgnanization keep in touch with their clients and any potentitial prospects. This tool is used to automate workflows for sales and marketing professionals.',
    info2: 'Stacks used: ',
    url: 'https://pacific-atoll-09906.herokuapp.com/',
    repo: 'https://github.com/Los-Borrachos/frontend',
  },
  {
    id: nanoid(),
    img: 'muddlr.png',
    title: "Muddl'r - Cocktail App",
    info: "Muddl'r is a modern front end application utilizing React and a third party API-CocktailDB. The app is compiled of several different components for functionality and progressive use.",
    info2: 'Stacks used: ',
    url: 'https://project-muddler.herokuapp.com/',
    repo: 'https://github.com/ghernandez24/project-muddlr',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'Guillermo.hern@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ghernandez24',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/1guillermohernandez/',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/guillermo_code',
    },
  ],
};
