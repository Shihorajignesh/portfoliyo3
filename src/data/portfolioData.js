import { SITE_CONFIG } from '../utils/constants'

// ---------------- PROFILE ----------------
export const profile = {
  name: 'Jignesh Shihora',
  role: 'Frontend Developer',
  education: 'BCA, Bachelor of Computer Applications',
  level: 'Fresher / Entry-Level Frontend Developer',
  tagline: 'BCA Graduate • React.js • Modern UI • Responsive Web Development',
  statement:
    'Building modern digital experiences with clean code, thoughtful UI and interactive experiences.',
  goal: 'Get hired as a Frontend Developer and build modern, scalable and user-friendly web experiences.',
  photo: SITE_CONFIG.PROFILE_PHOTO,
  photoAlt: 'Portrait of Jignesh Shihora, Frontend Developer',
  about: [
    'I am a BCA graduate with a strong interest in frontend development. I enjoy turning ideas and designs into clean, fast and responsive interfaces that people actually enjoy using.',
    'My main focus is React.js. I build reusable components, keep my code organised and care about small UI details like spacing, hover states and accessibility.',
    'I learn by building. Every project teaches me something about problem solving, state handling and writing code that is easier to maintain. I am continuously learning and looking for an opportunity to grow as a Frontend Developer.',
  ],
}

// Fake numbers નથી. ફક્ત honest labels
export const stats = [
  { label: 'Education', value: 'BCA Graduate' },
  { label: 'Main Focus', value: 'React Projects' },
  { label: 'Approach', value: 'Responsive UI' },
  { label: 'Toolkit', value: 'Frontend Skills' },
]

// ---------------- NAVIGATION ----------------
// id એ App.jsx ના section id સાથે match થવો જોઈએ
export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

// ---------------- SOCIAL ----------------
// icon ના names Step 2/16/17 માં components map કરશે
export const socialLinks = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/Shihorajignesh' },
  { id: 'linkedin', label: 'LinkedIn', href: "https://www.linkedin.com/feed/" },
  { id: 'instagram', label: 'Instagram', href: "https://www.instagram.com/jignesh___2005/?__pwa=1" },
  { id: 'email', label: 'Email', href: `mailto:your.email@example.com` },
]

// ---------------- EDUCATION ----------------
export const education = [
  {
    id: 'bca',
    degree: 'BCA, Bachelor of Computer Applications',
    institution: '[shree swaminarayan college ]',
    duration: '[2022] – [2024]',
    description:
      'Built a solid computer science foundation and discovered a passion for frontend development and user interface engineering.',
    skills: [
      'Programming Fundamentals',
      'Web Technologies',
      'Problem Solving',
      'Database Basics',
      'Software Development Concepts',
    ],
    direction: 'Frontend Development with React.js',
  },
]

// ---------------- SKILLS ----------------
// level = SELF-ASSESSED comfort (0–100), official score નથી. UI માં "Self-assessed" લખાશે.
// તમારા honest level પ્રમાણે બદલો.
export const skills = [
  { id: 'html', name: 'HTML5', icon: 'html', level: 90, description: 'Semantic, accessible page structure.' },
  { id: 'css', name: 'CSS3', icon: 'css', level: 85, description: 'Flexbox, Grid, animations, responsive layouts.' },
  { id: 'js', name: 'JavaScript', icon: 'js', level: 75, description: 'ES6+, DOM, async code, array methods.' },
  { id: 'react', name: 'React.js', icon: 'react', level: 75, description: 'Components, hooks, routing, state.' },
  { id: 'tailwind', name: 'Tailwind CSS', icon: 'tailwind', level: 85, description: 'Utility-first, fast and consistent styling.' },
  { id: 'bootstrap', name: 'Bootstrap', icon: 'bootstrap', level: 80, description: 'Grid system and ready-made components.' },
  { id: 'git', name: 'Git', icon: 'git', level: 70, description: 'Commits, branches and version history.' },
  { id: 'github', name: 'GitHub', icon: 'github', level: 70, description: 'Repositories, collaboration and hosting code.' },
]

export const skillsNote = 'Levels are self-assessed to show comfort, not official certification.'

// ---------------- FRONTEND EXPERTISE ----------------
export const expertise = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: 'code',
    points: ['Semantic HTML5 structure', 'Modern CSS with Flexbox and Grid', 'ES6+ JavaScript', 'React.js single page apps'],
  },
  {
    id: 'ui',
    title: 'UI / UX Implementation',
    icon: 'layout',
    points: ['Turn designs into pixel-aware UI', 'Consistent spacing and typography', 'Hover and micro-interactions', 'Clear visual hierarchy'],
  },
  {
    id: 'responsive',
    title: 'Responsive Design',
    icon: 'smartphone',
    points: ['Mobile-first approach', 'Layouts for phone, tablet and desktop', 'Fluid typography and images', 'No horizontal overflow'],
  },
  {
    id: 'components',
    title: 'Component Architecture',
    icon: 'boxes',
    points: ['Reusable, small components', 'Props-driven design', 'Clean folder structure', 'Separation of data and UI'],
  },
  {
    id: 'state',
    title: 'State Management',
    icon: 'database',
    points: ['useState and useEffect', 'Lifting state up', 'Context API basics', 'Persisting data with localStorage'],
  },
  {
    id: 'api',
    title: 'API Integration',
    icon: 'plug',
    points: ['Fetching data with fetch / async-await', 'Loading and error states', 'Rendering dynamic lists', 'Working with JSON'],
  },
  {
    id: 'git',
    title: 'Version Control',
    icon: 'gitbranch',
    points: ['Git workflow basics', 'Meaningful commit messages', 'Branching', 'Publishing projects on GitHub'],
  },
]

// ---------------- JOURNEY ----------------
export const journey = [
  { id: 1, title: 'Learning HTML / CSS', text: 'Started with the web fundamentals: structure, styling and layouts.' },
  { id: 2, title: 'JavaScript', text: 'Learned logic, the DOM, events and modern ES6+ features.' },
  { id: 3, title: 'React.js', text: 'Moved to components, props, state, hooks and routing.' },
  { id: 4, title: 'Tailwind CSS', text: 'Adopted utility-first styling for faster, consistent UI.' },
  { id: 5, title: 'Real-world Projects', text: 'Built BiteRush and Dream Travels to apply everything.' },
  { id: 6, title: 'Portfolio Development', text: 'Designed and built this portfolio to present my work.' },
  { id: 7, title: 'Job Preparation', text: 'Preparing for a Frontend Developer role and interviews.' },
]

// ---------------- PROJECTS ----------------
// નવી project add કરવી હોય તો ફક્ત એક object અહીં ઉમેરો.
// ⚠ github/live ના URLs તમારા real URLs થી replace કરો.
// ⚠ Case study text ને તમારા real project પ્રમાણે edit કરો.
export const projects = [
  {
    id: 'biterush',
    title: 'BiteRush',
    type: 'Food Delivery Web Application',
    category: 'React',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXtZtuWBJ7t2Zsii7NEh8bNK5tsickqlKmNSOgq6MILw&s=10',
    imageAlt: 'BiteRush food delivery web application screenshot',
    description:
      'A responsive food delivery frontend where users browse restaurants, explore categories, search dishes, manage a cart and move through an order flow.',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'React Router', 'Local Storage'],
    features: [
      'Restaurant browsing',
      'Food categories and search',
      'Cart and wishlist',
      'Offers section',
      'Checkout and order flow',
      'Fully responsive design',
    ],
    github: 'https://github.com/Shihorajignesh/Bitrish',
    live: '[BITERUSH_LIVE_URL]',
    caseStudy: {
      overview:
        'BiteRush is a frontend food delivery application designed to feel like a real ordering platform, with a clear path from browsing to checkout.',
      problem:
        'Food ordering interfaces can feel cluttered. Users need to find food quickly, understand what is in their cart and complete an order without confusion.',
      solution:
        'I built a clean, card-based interface with category filters, search, a persistent cart and a simple step-by-step checkout flow.',
      features: [
        'Browse restaurants and dishes by category',
        'Search for food and restaurants',
        'Add, remove and update cart items',
        'Save favourites to a wishlist',
        'Checkout and order flow UI',
      ],
      uiDecisions: [
        'Card layout for quick scanning',
        'Strong call-to-action buttons for add to cart',
        'Sticky cart summary for clarity',
        'Mobile-first spacing and touch-friendly controls',
      ],
      challenges: [
        'Keeping cart state consistent across pages',
        'Persisting cart and wishlist using localStorage',
        'Making dense content readable on small screens',
      ],
      outcome:
        'A complete, responsive frontend project that strengthened my skills in React state management, routing and component reuse.',
    },
  },
  {
    id: 'dream-travels',
    title: 'Dream Travels',
    type: 'Travel Planning / Discovery Website',
    category: 'React',
    image: '/images/projects/dream-travels.jpg',
    imageAlt: 'Dream Travels travel discovery website screenshot',
    description:
      'A travel discovery website that helps users explore destinations, browse packages, compare transport, find hotels and plan trips in one place.',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'Lucide React'],
    features: [
      'Trending destinations',
      'Travel experiences and world explorer',
      'Featured journeys and packages',
      'Trip planner',
      'Transport comparison and hotel finder',
      'Wishlist and responsive UI',
    ],
    github: 'https://github.com/Shihorajignesh/dream-travel',
    live: '[DREAMTRAVELS_LIVE_URL]',
    caseStudy: {
      overview:
        'Dream Travels is a travel discovery and planning website that brings inspiration and planning tools together in a visual, easy-to-use interface.',
      problem:
        'Planning a trip means jumping between many websites for destinations, hotels and transport. This is slow and confusing.',
      solution:
        'I designed a single, visual experience where users can discover places, compare options and save favourites to plan their journey.',
      features: [
        'Trending and featured destinations',
        'Travel packages and experiences',
        'Trip planner',
        'Transport comparison',
        'Hotel finder',
        'Wishlist',
      ],
      uiDecisions: [
        'Large imagery to inspire exploration',
        'Clear sections for each planning step',
        'Consistent icon set using Lucide React',
        'Responsive grids that adapt from mobile to desktop',
      ],
      challenges: [
        'Organising many features without overwhelming users',
        'Designing reusable cards for different content types',
        'Keeping image-heavy pages fast and responsive',
      ],
      outcome:
        'A feature-rich frontend project that improved my component architecture, layout skills and attention to visual design.',
    },
  },
  {
    id: 'project-three',
    title: '[YOUR_THIRD_PROJECT_NAME]',
    type: '[PROJECT_TYPE]',
    category: 'React',
    image: '/images/projects/project-three.jpg',
    imageAlt: 'Third project screenshot',
    description: '[PROJECT_DESCRIPTION]',
    tech: ['[PROJECT_TECHNOLOGIES]'],
    features: ['[PROJECT_FEATURES]'],
    github: '[PROJECT_THREE_GITHUB_URL]',
    live: '[PROJECT_THREE_LIVE_URL]',
    caseStudy: {
      overview: '[PROJECT_OVERVIEW]',
      problem: '[PROBLEM_STATEMENT]',
      solution: '[SOLUTION]',
      features: ['[FEATURE_1]', '[FEATURE_2]'],
      uiDecisions: ['[UI_DECISION_1]', '[UI_DECISION_2]'],
      challenges: ['[CHALLENGE_1]', '[CHALLENGE_2]'],
      outcome: '[OUTCOME]',
    },
  },
]

// ---------------- SERVICES ----------------
export const services = [
  { id: 's1', title: 'Responsive Website Development', icon: 'monitor', text: 'Websites that look and work great on every screen size.' },
  { id: 's2', title: 'React.js Development', icon: 'react', text: 'Component-based single page apps built with modern React.' },
  { id: 's3', title: 'Landing Page Development', icon: 'rocket', text: 'Fast, focused landing pages designed to convert visitors.' },
  { id: 's4', title: 'Modern UI Implementation', icon: 'sparkles', text: 'Clean, polished interfaces with smooth micro-interactions.' },
  { id: 's5', title: 'Frontend Conversion', icon: 'swap', text: 'Turning Figma or PSD designs into clean, working code.' },
  { id: 's6', title: 'Website Optimization', icon: 'gauge', text: 'Improving speed, layout quality and overall user experience.' },
]

// ---------------- PROCESS ----------------
export const process = [
  { step: '01', title: 'Discover', text: 'Understand goals, users and requirements.' },
  { step: '02', title: 'Plan', text: 'Define structure, components and content.' },
  { step: '03', title: 'Design', text: 'Shape layout, typography and visual style.' },
  { step: '04', title: 'Develop', text: 'Build clean, reusable and responsive code.' },
  { step: '05', title: 'Test', text: 'Check across devices, browsers and edge cases.' },
  { step: '06', title: 'Optimize', text: 'Improve performance and polish the details.' },
  { step: '07', title: 'Deploy', text: 'Launch the project and keep improving it.' },
]

// ---------------- WHY HIRE ME ----------------
export const whyHire = [
  { id: 'w1', title: 'Clean Code', text: 'I write readable, organised code that is easy to maintain.' },
  { id: 'w2', title: 'Modern Frontend Skills', text: 'React.js, Tailwind CSS and ES6+ JavaScript.' },
  { id: 'w3', title: 'Responsive UI', text: 'Every interface I build is designed to work on all devices.' },
  { id: 'w4', title: 'Willingness to Learn', text: 'I pick up new tools quickly and enjoy feedback.' },
  { id: 'w5', title: 'Project-Based Experience', text: 'I learn by building real, complete projects.' },
  { id: 'w6', title: 'Attention to Detail', text: 'Spacing, alignment and interaction details matter to me.' },
  { id: 'w7', title: 'User-Focused', text: 'I build with the end user experience in mind.' },
  { id: 'w8', title: 'Continuous Improvement', text: 'I keep improving my skills and my code every day.' },
]