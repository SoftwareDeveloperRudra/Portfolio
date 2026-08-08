export const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    categoryTitle: '1. Frontend Development',
    description: 'Crafting pixel-perfect, responsive, and accessible user interfaces.',
    skills: [
      {
        id: 'html5',
        name: 'HTML5',
        iconName: 'FaCode',
        proficiency: 95,
        experience: '2+ Years',
        projectsUsedIn: ['Capturra', 'CoreInventory', 'Personal Portfolio'],
        description: 'Semantic structuring, SEO optimization, and web accessibility standards.',
        color: '#E34F26'
      },
      {
        id: 'css3',
        name: 'CSS3',
        iconName: 'FaPalette',
        proficiency: 90,
        experience: '2+ Years',
        projectsUsedIn: ['Capturra', 'CoreInventory', 'Local Business Demos'],
        description: 'Custom animations, Flexbox, Grid, CSS variables, and modern visual effects.',
        color: '#1572B6'
      },
      {
        id: 'javascript',
        name: 'JavaScript',
        iconName: 'FaJs',
        proficiency: 90,
        experience: '2+ Years',
        projectsUsedIn: ['Capturra', 'VitalSync Dashboard', 'CoreInventory'],
        description: 'ES6+, Async/Await, DOM manipulation, APIs, and modern JS execution.',
        color: '#F7DF1E'
      },
      {
        id: 'typescript',
        name: 'TypeScript (Learning)',
        iconName: 'FaCode',
        proficiency: 65,
        experience: '< 1 Year',
        projectsUsedIn: ['StudyMate AI', 'Next.js Experiments'],
        description: 'Strong static typing, interface contracts, and scalable JS architecture.',
        color: '#3178C6'
      },
      {
        id: 'react',
        name: 'React',
        iconName: 'FaReact',
        proficiency: 85,
        experience: '1+ Years',
        projectsUsedIn: ['StudyMate AI', 'Capturra Frontend', 'Portfolio'],
        description: 'Component architecture, Hooks, Context API, state management, and SPA optimizations.',
        color: '#61DAFB'
      },
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        iconName: 'FaCss3Alt',
        proficiency: 92,
        experience: '1.5+ Years',
        projectsUsedIn: ['CoreInventory', 'Capturra', 'Local Business Sites'],
        description: 'Utility-first styling, glassmorphism layouts, dark mode, and responsive designs.',
        color: '#06B6D4'
      },
      {
        id: 'bootstrap',
        name: 'Bootstrap',
        iconName: 'FaBootstrap',
        proficiency: 85,
        experience: '2+ Years',
        projectsUsedIn: ['Early Web Portals', 'College Hackathons'],
        description: 'Rapid UI prototyping, responsive grids, and pre-built design components.',
        color: '#7952B3'
      },
      {
        id: 'responsive-design',
        name: 'Responsive Design',
        iconName: 'FaMobileAlt',
        proficiency: 95,
        experience: '2+ Years',
        projectsUsedIn: ['All Projects'],
        description: 'Mobile-first workflows, elastic layouts, fluid typography, and cross-browser testing.',
        color: '#10B981'
      }
    ]
  },
  {
    id: 'backend',
    categoryTitle: '2. Backend Development',
    description: 'Engineering robust server-side architecture, APIs, and microservices.',
    skills: [
      {
        id: 'python',
        name: 'Python',
        iconName: 'FaPython',
        proficiency: 85,
        experience: '2+ Years',
        projectsUsedIn: ['AI Scripting', 'FastAPI Services', 'Data Analytics'],
        description: 'Clean procedural & OOP programming, scripting, automation, and API services.',
        color: '#3776AB'
      },
      {
        id: 'fastapi',
        name: 'FastAPI',
        iconName: 'FaServer',
        proficiency: 78,
        experience: '1 Year',
        projectsUsedIn: ['StudyMate AI Backend', 'Microservices'],
        description: 'High-performance async APIs, automatic OpenAPI documentation, and Pydantic schemas.',
        color: '#009688'
      },
      {
        id: 'php',
        name: 'PHP',
        iconName: 'FaPhp',
        proficiency: 88,
        experience: '2+ Years',
        projectsUsedIn: ['CoreInventory', 'Capturra Platform', 'Client Websites'],
        description: 'Server-side scripting, MVC backend structures, sessions, and MySQL integration.',
        color: '#777BB4'
      },
      {
        id: 'rest-apis',
        name: 'REST APIs',
        iconName: 'FaNetworkWired',
        proficiency: 90,
        experience: '2+ Years',
        projectsUsedIn: ['VitalSync IoT', 'CoreInventory', 'Capturra'],
        description: 'RESTful API design, HTTP protocols, JSON endpoints, and status response handling.',
        color: '#8E44AD'
      },
      {
        id: 'jwt-auth',
        name: 'JWT Authentication',
        iconName: 'FaKey',
        proficiency: 82,
        experience: '1+ Years',
        projectsUsedIn: ['CoreInventory Auth', 'Capturra Security'],
        description: 'Token-based authentication, refresh tokens, role access, and secure user sessions.',
        color: '#E91E63'
      },
      {
        id: 'api-integration',
        name: 'API Integration',
        iconName: 'FaCogs',
        proficiency: 88,
        experience: '2+ Years',
        projectsUsedIn: ['Firebase Cloud Sync', 'Third-Party Payments'],
        description: 'Consuming external APIs, rate limit handling, webhooks, and asynchronous data fetching.',
        color: '#6366F1'
      }
    ]
  },
  {
    id: 'database',
    categoryTitle: '3. Database',
    description: 'Designing structured data models and managing real-time cloud datastores.',
    skills: [
      {
        id: 'mysql',
        name: 'MySQL',
        iconName: 'FaDatabase',
        proficiency: 88,
        experience: '2+ Years',
        projectsUsedIn: ['CoreInventory System', 'Capturra Platform'],
        description: 'Relational schema design, complex JOINs, query indexing, and data integrity.',
        color: '#4479A1'
      },
      {
        id: 'firebase',
        name: 'Firebase',
        iconName: 'FaFire',
        proficiency: 85,
        experience: '1.5+ Years',
        projectsUsedIn: ['VitalSync IoT App', 'Real-Time Alerts'],
        description: 'Realtime Database, Firestore, Authentication, and Cloud Messaging integration.',
        color: '#FFCA28'
      },
      {
        id: 'database-design',
        name: 'Database Design',
        iconName: 'FaTable',
        proficiency: 85,
        experience: '2+ Years',
        projectsUsedIn: ['CoreInventory ERD', 'Capturra Data Model'],
        description: 'Normalization, entity-relationship diagrams, foreign keys, and transaction management.',
        color: '#3B82F6'
      },
      {
        id: 'crud-operations',
        name: 'CRUD Operations',
        iconName: 'FaTasks',
        proficiency: 92,
        experience: '2+ Years',
        projectsUsedIn: ['All Full-Stack Apps'],
        description: 'Efficient query writing, data sanitization, pagination, and error handling.',
        color: '#10B981'
      }
    ]
  },
  {
    id: 'languages',
    categoryTitle: '4. Programming Languages',
    description: 'Strong foundation in core computer science algorithms and syntax paradigms.',
    skills: [
      {
        id: 'lang-c',
        name: 'C',
        iconName: 'FaCode',
        proficiency: 80,
        experience: '3 Years',
        projectsUsedIn: ['Academic Coursework', 'Embedded Logic'],
        description: 'Pointers, memory management, low-level data structures, and procedural coding.',
        color: '#A8B9CC'
      },
      {
        id: 'lang-cpp',
        name: 'C++',
        iconName: 'FaCode',
        proficiency: 82,
        experience: '2+ Years',
        projectsUsedIn: ['DSA Problem Solving', 'Algorithmic Logic'],
        description: 'Object-Oriented Programming, STL containers, templates, and memory optimization.',
        color: '#00599C'
      },
      {
        id: 'lang-java',
        name: 'Java',
        iconName: 'FaJava',
        proficiency: 80,
        experience: '2 Years',
        projectsUsedIn: ['OOP Projects', 'College Engineering Modules'],
        description: 'Strongly-typed OOP, Exception handling, Multithreading basics, and Collections framework.',
        color: '#ED8B00'
      },
      {
        id: 'lang-python',
        name: 'Python',
        iconName: 'FaPython',
        proficiency: 85,
        experience: '2+ Years',
        projectsUsedIn: ['Automation Scripts', 'FastAPI Apps'],
        description: 'Data structures, concise syntax, module ecosystems, and backend execution.',
        color: '#3776AB'
      },
      {
        id: 'lang-js',
        name: 'JavaScript',
        iconName: 'FaJs',
        proficiency: 90,
        experience: '2+ Years',
        projectsUsedIn: ['Web Engineering', 'Interactive Systems'],
        description: 'Dynamic scripting, event loop comprehension, functional programming, and asynchronous tasks.',
        color: '#F7DF1E'
      },
      {
        id: 'lang-php',
        name: 'PHP',
        iconName: 'FaPhp',
        proficiency: 88,
        experience: '2+ Years',
        projectsUsedIn: ['Full-stack Web Development'],
        description: 'Server execution, session management, dynamic web logic, and database connectors.',
        color: '#777BB4'
      },
      {
        id: 'lang-sql',
        name: 'SQL',
        iconName: 'FaDatabase',
        proficiency: 88,
        experience: '2+ Years',
        projectsUsedIn: ['Relational Data Querying'],
        description: 'DDL/DML statements, aggregation, nested queries, joins, and transaction locks.',
        color: '#336791'
      }
    ]
  },
  {
    id: 'tools',
    categoryTitle: '5. Developer Tools',
    description: 'Workflows, IDEs, version control, and design systems powering my stack.',
    skills: [
      {
        id: 'git',
        name: 'Git',
        iconName: 'FaGitAlt',
        proficiency: 88,
        experience: '2+ Years',
        projectsUsedIn: ['All Version-Controlled Repos'],
        description: 'Branching, merging, commit histories, rebase workflows, and conflict resolution.',
        color: '#F05032'
      },
      {
        id: 'github',
        name: 'GitHub',
        iconName: 'FaGithub',
        proficiency: 90,
        experience: '2+ Years',
        projectsUsedIn: ['Open Source & Team Projects'],
        description: 'Pull Requests, Code Reviews, GitHub Pages, repository management, and Actions.',
        color: '#181717'
      },
      {
        id: 'vscode',
        name: 'VS Code',
        iconName: 'FaLaptopCode',
        proficiency: 95,
        experience: '3 Years',
        projectsUsedIn: ['Primary IDE'],
        description: 'Extension customization, multi-language debugging, terminal integrations, and keybindings.',
        color: '#007ACC'
      },
      {
        id: 'postman',
        name: 'Postman',
        iconName: 'FaPaperPlane',
        proficiency: 88,
        experience: '2 Years',
        projectsUsedIn: ['API Testing & Documentation'],
        description: 'Testing HTTP endpoints, environment variables, automated test scripts, and payload verification.',
        color: '#FF6C37'
      },
      {
        id: 'xampp',
        name: 'XAMPP',
        iconName: 'FaHdd',
        proficiency: 90,
        experience: '2+ Years',
        projectsUsedIn: ['Local PHP & MySQL Testing'],
        description: 'Apache server configuration, phpMyAdmin maintenance, and local host deployment.',
        color: '#FB7A24'
      },
      {
        id: 'figma',
        name: 'Figma',
        iconName: 'FaFigma',
        proficiency: 85,
        experience: '1.5+ Years',
        projectsUsedIn: ['Capturra UI Designs', 'Client Wireframes'],
        description: 'UI/UX layout design, wireframing, auto-layout, interactive prototypes, and vector graphics.',
        color: '#F24E1E'
      },
      {
        id: 'canva',
        name: 'Canva',
        iconName: 'FaImage',
        proficiency: 90,
        experience: '2+ Years',
        projectsUsedIn: ['Brand Assets', 'Social Media Graphics'],
        description: 'Visual asset design, quick marketing templates, and presentation deck generation.',
        color: '#00C4CC'
      }
    ]
  },
  {
    id: 'learning',
    categoryTitle: '6. Currently Learning',
    description: 'Technologies I am actively expanding into to deepen my full-stack & DevOps domain.',
    skills: [
      {
        id: 'react-native',
        name: 'React Native',
        iconName: 'FaMobileAlt',
        proficiency: 50,
        experience: 'In Progress',
        projectsUsedIn: ['Mobile Cross-Platform Apps'],
        description: 'Extending React principles to native iOS and Android app development.',
        color: '#61DAFB'
      },
      {
        id: 'docker',
        name: 'Docker',
        iconName: 'FaDocker',
        proficiency: 45,
        experience: 'In Progress',
        projectsUsedIn: ['Containerization Lab'],
        description: 'Containerizing application environments for reliable cross-platform deployment.',
        color: '#2496ED'
      },
      {
        id: 'aws',
        name: 'AWS',
        iconName: 'FaAws',
        proficiency: 40,
        experience: 'In Progress',
        projectsUsedIn: ['Cloud Hosting Setup'],
        description: 'Exploring EC2 instances, S3 storage buckets, and basic cloud architecture.',
        color: '#FF9900'
      },
      {
        id: 'system-design',
        name: 'System Design',
        iconName: 'FaLayerGroup',
        proficiency: 55,
        experience: 'In Progress',
        projectsUsedIn: ['Scalable Architecture Studies'],
        description: 'Understanding load balancing, caching strategies, database sharding, and scale.',
        color: '#A855F7'
      },
      {
        id: 'cicd',
        name: 'CI/CD',
        iconName: 'FaRedo',
        proficiency: 50,
        experience: 'In Progress',
        projectsUsedIn: ['Automated Deployment Testing'],
        description: 'Building continuous integration and continuous deployment delivery pipelines.',
        color: '#22C55E'
      }
    ]
  }
];

export const FLOATING_CLOUD_TECHS = [
  { name: 'React', color: '#61DAFB' },
  { name: 'FastAPI', color: '#009688' },
  { name: 'Python', color: '#3776AB' },
  { name: 'MySQL', color: '#4479A1' },
  { name: 'Git', color: '#F05032' },
  { name: 'Tailwind', color: '#06B6D4' },
  { name: 'PHP', color: '#777BB4' },
  { name: 'JWT', color: '#E91E63' },
  { name: 'Firebase', color: '#FFCA28' }
];