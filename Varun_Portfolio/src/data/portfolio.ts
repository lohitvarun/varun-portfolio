/**
 * Central portfolio data for Chevuru Lohit Varun Tej Reddy.
 * Profile facts are based on the supplied resume and project context.
 * Do not add unverified metrics, credentials, or claims here.
 */
export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Chevuru Lohit Varun Tej Reddy',
  displayName: 'Lohit Varun',
  firstName: 'VARUN',
  seriesTag: 'THE PORTFOLIO',
  originalLabel: 'A VARUN ORIGINAL',
  role: 'B.Tech CSE · AI & ML Student',
  tagline: ['Computer Science', 'AI & ML', 'Web Development'],
  intro: 'A Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at Malla Reddy University. I enjoy building practical web applications, exploring AI-powered experiences, and turning ideas into working projects.',
  location: 'Hyderabad, Telangana, India',
  email: 'lohitvarunchevuru01@gmail.com',
  phone: '+91 74161 92691',
  links: {
    linkedin: 'https://linkedin.com/in/chevurulohitvarun',
    github: 'https://github.com/lohitvarun',
  },
  resumePdf: '/assets/Varun_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Professional portrait of Lohit Varun wearing a navy university blazer',
  },
  interests: ['Artificial Intelligence', 'Machine Learning', 'Web Development', 'Data Analytics'],
};

export const education = [
  {
    school: 'Malla Reddy University',
    place: 'Hyderabad, Telangana',
    degree: 'B.Tech — Computer Science and Engineering (AI & ML)',
    period: '2026 – 2030',
    score: 'Currently Pursuing',
  },
  {
    school: 'Urbane Junior College',
    place: 'Madhapur, Hyderabad',
    degree: 'Intermediate — Telangana Board',
    period: '2024 – 2026',
    score: '85%',
  },
  {
    school: 'Maharishi Vidya Mandir',
    place: 'Hyderabad',
    degree: 'Schooling — CBSE',
    period: 'Completed 2024',
    score: '89%',
  },
];

export const experience = [
  {
    company: 'Nayepankh Foundation',
    role: 'Fundraising Intern',
    place: 'India',
    period: '1 Month',
    points: [
      'Contributed to fundraising initiatives and supported the foundation’s social welfare efforts.',
      'Communicated with potential donors and helped spread awareness about the foundation’s activities.',
      'Supported outreach and fundraising activities as part of a one-month internship.',
    ],
  },
];

export type Metric = { value: string; label: string };
export type Project = {
  id: string; title: string; year: string; genre: string; logline: string;
  stack: string[]; build: string[]; features: string[]; metrics: Metric[];
  github?: string; palette: Palette; motif: 'shield' | 'flow' | 'tenants';
};
const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const projects: Project[] = [
  {
    id: 'zenvora', title: 'Zenvora', year: '2026', genre: 'AI • E-Commerce • Personalization',
    logline: 'An AI-powered personalized shopping platform designed to make product discovery more relevant and intuitive.',
    stack: ['HTML', 'CSS', 'JavaScript', 'AI Integration'],
    build: ['Designed an e-commerce experience focused on personalized product recommendations and smart product discovery.', 'Created category-based browsing and an AI shopping assistant to support the shopping journey.'],
    features: ['Personalized product recommendations', 'Smart product discovery', 'Category-based browsing', 'AI shopping assistant'],
    metrics: [], palette: { from: '#20102a', via: '#633d7d', to: '#09070d', accent: '#c69cff' }, motif: 'shield',
  },
  {
    id: 'calcx', title: 'CalcX by Varun', year: '2026', genre: 'Web Application • Mathematics',
    logline: 'An advanced scientific calculator with a clean, interactive interface for mathematical calculations.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    build: ['Developed a web-based scientific calculator to simplify mathematical calculations.', 'Focused on a clean, interactive interface and essential scientific computing functions.'],
    features: ['Scientific calculations', 'Interactive calculator interface', 'Responsive web experience'],
    metrics: [], github: 'https://github.com/lohitvarun', palette: amber, motif: 'flow',
  },
  {
    id: 'zestora', title: 'Zestora', year: '2026', genre: 'Web Design • Food Discovery',
    logline: 'A modern food discovery platform built around an engaging browsing experience and user-friendly design.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    build: ['Created a modern food website for discovering food items through an attractive interface.', 'Emphasized clear browsing and a user-friendly visual experience.'],
    features: ['Food discovery interface', 'Attractive visual design', 'User-friendly browsing'],
    metrics: [], github: 'https://github.com/lohitvarun', palette: crimson, motif: 'tenants',
  },
  {
    id: 'keepsake', title: 'KeepSake', year: '2026', genre: 'Productivity • Personal Journal',
    logline: 'A personal diary and memory journal for preserving written entries and photographs in one private space.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Python'],
    build: ['Designed a private digital diary application for writing and preserving personal memories.', 'Included support for storing photographs in a personalized space.'],
    features: ['Digital diary entries', 'Personal memory journal', 'Photograph storage'],
    metrics: [], github: 'https://github.com/lohitvarun', palette: jade, motif: 'shield',
  },
  {
    id: 'edupulse', title: 'EduPulse', year: '2026', genre: 'Student Productivity • Web Application',
    logline: 'A student tracker concept that brings academic planning, study sessions, tasks, and learning resources together.',
    stack: ['Python', 'HTML', 'CSS', 'JavaScript', 'SQLite'],
    build: ['Developing a student productivity application with subject-wise organization and academic tracking.', 'The planned workspace includes a calendar, timetable, marks, notes, study timers, and task management.'],
    features: ['Calendar and timetable', 'Subject-wise organization', 'Marks and digital notes', 'Study-session timers', 'Checklist and dashboard'],
    metrics: [], github: 'https://github.com/lohitvarun/EduPulse', palette: ocean, motif: 'flow',
  },
  {
    id: 'mystiplay', title: 'MystiPlay', year: '2026', genre: 'OTT Platform • Web Application',
    logline: 'A themed OTT-style streaming web application built around a curated episodic viewing experience.',
    stack: ['Python', 'HTML', 'CSS', 'JavaScript', 'JSON'],
    build: ['Built a streaming-style web application with a catalog of Naagini seasons and episodes.', 'Organized show and episode information using JSON-backed content and a responsive interface.'],
    features: ['Series and season browsing', 'Episode catalog', 'Streaming-inspired interface', 'JSON-based content'],
    metrics: [], github: 'https://github.com/lohitvarun', palette: violet, motif: 'tenants',
  },
];

export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };
export const achievements: Achievement[] = [
  { id: 'sih-2026', title: 'Smart India Hackathon 2026', org: 'SIH', detail: 'Successfully qualified through two rounds, demonstrating teamwork, problem-solving, and innovative thinking.', laurel: 'Qualified · Two Rounds' },
  { id: 'ai-integration', title: 'AI Integration & Development', org: 'Independent Learning', detail: 'Gained practical experience integrating AI capabilities into applications using AI tools, APIs, and language models.', laurel: 'Applied AI' },
  { id: 'project-development', title: 'Independent Project Development', org: 'Personal Projects', detail: 'Designed and developed multiple web-based applications, including a scientific calculator, food platform, and digital productivity solutions.', laurel: 'Project Builder' },
  { id: 'programming', title: 'Hands-on Programming', org: 'Practical Development', detail: 'Applied Python, HTML, CSS, and JavaScript to develop functional projects and explore software development concepts.', laurel: 'Practical Skills' },
  { id: 'continuous-learning', title: 'Continuous Technical Learning', org: 'Ongoing', detail: 'Actively exploring Artificial Intelligence, Machine Learning, Data Analytics, and emerging technologies through practical implementation.', laurel: 'Always Learning' },
];

export type Certification = { issuer: string; name: string; link: string };
export const certifications: Certification[] = [
  { issuer: 'FutureSkills Prime · NASSCOM IT-ITeS SSC', name: 'Data Processing and Visualization', link: '' },
  { issuer: 'FutureSkills Prime · NASSCOM IT-ITeS SSC', name: 'Acquiring Data', link: '' },
  { issuer: 'FutureSkills Prime · NASSCOM IT-ITeS SSC', name: 'Exploratory Data Analysis (EDA)', link: '' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
export const skillCategories: SkillCategory[] = [
  { id: 'languages', title: 'Programming Languages', subtitle: 'Programming foundations', skills: [
    { name: 'Python', mono: 'Py', note: 'Good proficiency' }, { name: 'C', mono: 'C', note: 'Basics' },
  ]},
  { id: 'frontend', title: 'Web Development', subtitle: 'Frontend technologies', skills: [
    { name: 'HTML5', mono: 'Ht' }, { name: 'CSS3', mono: 'Cs' }, { name: 'JavaScript', mono: 'Js' },
  ]},
  { id: 'data', title: 'Data Analytics', subtitle: 'Working with data', skills: [
    { name: 'Data Acquisition', mono: 'DA' }, { name: 'Data Processing', mono: 'DP' }, { name: 'Data Visualization', mono: 'DV' }, { name: 'Exploratory Data Analysis', mono: 'EDA' },
  ]},
  { id: 'tools', title: 'Developer Tools', subtitle: 'Development workflow', skills: [
    { name: 'Git', mono: 'Gt' }, { name: 'GitHub', mono: 'Gh' }, { name: 'Visual Studio Code', mono: 'VS' }, { name: 'MS Office', mono: 'Of' },
  ]},
  { id: 'learning', title: 'Currently Learning', subtitle: 'Expanding the toolkit', skills: [
    { name: 'SQL', mono: 'Sq', note: 'Currently learning' }, { name: 'Artificial Intelligence', mono: 'AI' }, { name: 'Machine Learning', mono: 'ML' },
  ]},
  { id: 'soft', title: 'Professional Skills', subtitle: 'How I work', skills: [
    { name: 'Communication', mono: 'Co' }, { name: 'Teamwork', mono: 'Tw' }, { name: 'Problem-Solving', mono: 'Ps' }, { name: 'Time Management', mono: 'Tm' },
  ]},
];
export const skillEvidence: Record<string, string[]> = {
  Python: ['Independent project development', 'Hands-on programming experience'],
  C: ['Technical skills'],
  HTML5: ['Web development projects'],
  CSS3: ['Web development projects'],
  JavaScript: ['CalcX by Varun', 'Zestora', 'Web application development'],
  'Data Acquisition': ['FutureSkills Prime certification'],
  'Data Processing': ['FutureSkills Prime certification'],
  'Data Visualization': ['FutureSkills Prime certification'],
  'Exploratory Data Analysis': ['FutureSkills Prime certification'],
  Git: ['Developer tools'],
  GitHub: ['GitHub profile'],
  SQL: ['Currently learning'],
  'Artificial Intelligence': ['B.Tech CSE (AI & ML)', 'AI integration and development'],
  'Machine Learning': ['B.Tech CSE (AI & ML)'],
};

export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };
export const seasons: Season[] = [
  { number: 1, title: 'The Foundation', period: 'Until 2024', synopsis: 'School education at Maharishi Vidya Mandir, Hyderabad, followed by the next step into intermediate studies.', episodes: [
    { code: 'S01 E01', title: 'School Years', description: 'Completed CBSE schooling at Maharishi Vidya Mandir, Hyderabad, with 89%.', tags: ['CBSE', '89%'], runtime: 'Completed 2024', palette: amber },
  ]},
  { number: 2, title: 'The Intermediate Chapter', period: '2024 – 2026', synopsis: 'Building an academic foundation at Urbane Junior College, Madhapur.', episodes: [
    { code: 'S02 E01', title: 'The Next Step', description: 'Completed Intermediate under the Telangana Board with 85%.', tags: ['Telangana Board', '85%'], runtime: '2024 – 2026', palette: violet },
  ]},
  { number: 3, title: 'The AI & ML Journey', period: '2026 – 2030', synopsis: 'Pursuing B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning at Malla Reddy University.', episodes: [
    { code: 'S03 E01', title: 'The Engineer in Progress', description: 'B.Tech CSE (AI & ML), Malla Reddy University, Hyderabad.', tags: ['B.Tech', 'CSE', 'AI & ML'], runtime: '2026 – 2030', palette: ocean },
    { code: 'S03 E02', title: 'Learning by Building', description: 'Exploring programming, web development, AI integration, and data analytics through hands-on projects.', tags: ['Python', 'JavaScript', 'AI'], runtime: 'Ongoing', palette: jade },
  ]},
  { number: 4, title: 'Building Projects', period: '2026 – Present', synopsis: 'A growing collection of personal software projects and practical experiments.', episodes: [
    { code: 'S04 E01', title: 'The Web Creator', description: 'Built projects including CalcX, Zestora, and KeepSake.', tags: ['Web Development', 'JavaScript'], runtime: '2026', palette: crimson },
    { code: 'S04 E02', title: 'The Product Explorer', description: 'Exploring student productivity with EduPulse and a streaming-style experience with MystiPlay.', tags: ['Python', 'SQLite', 'JSON'], runtime: '2026', palette: violet },
  ]},
  { number: 5, title: 'The Next Chapter', period: 'Now', synopsis: 'Continuing to learn, experiment, and build practical solutions with emerging technologies.', episodes: [
    { code: 'S05 E01', title: 'Always Learning', description: 'Focused on strengthening programming, AI, Machine Learning, and data analytics foundations.', tags: ['AI', 'ML', 'Data Analytics'], runtime: 'In progress', palette: jade },
  ]},
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export const topPicks: TopPick[] = [
  { label: 'Current degree', title: 'B.Tech CSE · AI & ML', detail: 'Malla Reddy University', palette: ocean },
  { label: 'Hackathon', title: 'Smart India Hackathon', detail: 'Qualified through two rounds · 2026', palette: crimson },
  { label: 'Featured project', title: 'CalcX by Varun', detail: 'Advanced scientific calculator', palette: amber },
  { label: 'AI & shopping', title: 'Zenvora', detail: 'Personalized shopping platform', palette: violet },
  { label: 'Food discovery', title: 'Zestora', detail: 'Modern food discovery platform', palette: jade },
  { label: 'Personal journal', title: 'KeepSake', detail: 'Digital diary and memory journal', palette: ocean },
  { label: 'Student productivity', title: 'EduPulse', detail: 'Student tracker application', palette: crimson },
  { label: 'OTT experience', title: 'MystiPlay', detail: 'Streaming-style web application', palette: violet },
  { label: 'Data analytics', title: 'Exploratory Data Analysis', detail: 'FutureSkills Prime certification', palette: amber },
  { label: 'Internship', title: 'Fundraising Intern', detail: 'Nayepankh Foundation · 1 Month', palette: jade },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export const introSlides: IntroSlide[] = [
  { kicker: 'Education', title: 'B.Tech · CSE AI & ML', lines: ['Malla Reddy University, Hyderabad', '2026 – 2030'], chips: ['AI & ML'] },
  { kicker: 'Skills', title: 'Learning by building.', lines: ['Python · C · HTML5 · CSS3 · JavaScript', 'Data Acquisition · Processing · Visualization · EDA'], chips: ['Python', 'JavaScript', 'AI & ML'] },
  { kicker: 'Experience', title: 'The Internship Chapter', lines: ['Fundraising Intern · Nayepankh Foundation', 'One-month internship supporting outreach and fundraising'] },
  { kicker: 'Projects', title: 'Ideas into applications.', lines: ['Zenvora · CalcX by Varun · Zestora', 'KeepSake · EduPulse · MystiPlay'] },
  { kicker: 'Achievements', title: 'Making progress.', lines: ['Smart India Hackathon 2026 — qualified through two rounds', 'Independent project development and AI integration'] },
  { kicker: 'Certified', title: 'Data & analytics.', lines: ['Data Processing and Visualization', 'Acquiring Data · Exploratory Data Analysis (EDA)', 'FutureSkills Prime · NASSCOM IT-ITeS SSC'] },
  { kicker: 'Current mission', title: 'Keep learning. Keep building.', lines: ['Artificial Intelligence · Machine Learning · Data Analytics'] },
];

export type ProfileId = 'varun' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  { id: 'varun', name: 'Varun', blurb: 'The full portfolio, in order', color: '#e5132b', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Resume, achievements & skills first', color: '#4cc9ff', order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'] },
  { id: 'developer', name: 'Developer', blurb: 'Projects, stack & GitHub first', color: '#46e3a8', order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'] },
  { id: 'creative', name: 'Creative', blurb: 'The story arc & highlights first', color: '#ffb547', order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'] },
];
export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Chapters • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Highlights`, palette: amber },
  originals: { nav: 'Projects', card: 'My Projects', meta: `${projects.length} Projects • 2026`, palette: crimson },
  picks: { nav: 'Highlights', card: 'Highlights', meta: 'Selected portfolio highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Achievements', card: 'Achievements', meta: `${achievements.length} Highlights • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
