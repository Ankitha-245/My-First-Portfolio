import type {
  ProfileInfo,
  EducationItem,
  SkillCategory,
  ExperienceItem,
  ProjectItem,
  CertificationItem,
  LanguageItem,
  NavItem,
} from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Languages', href: '#languages' },
  { label: 'Contact', href: '#contact' },
];

export const profileData: ProfileInfo = {
  name: 'ANKITHA',
  role: 'AI & Machine Learning Student',
  headline: 'AI & Machine Learning Student',
  subheadline: 'Exploring AI, data, and technology — one project at a time.',
  location: 'Mangaluru, Karnataka, India',
  email: 'ankithaashoknagar02@gmail.com',
  phone: '+91 8904316101',
  linkedin: 'https://www.linkedin.com/in/ankitha-ashoknagar-62a36840b',
  github: 'https://github.com/Ankitha-245',
  availability: 'Open to Learning & Internship Opportunities',
  bioIntro:
    'Enthusiastic and motivated Artificial Intelligence and Machine Learning undergraduate student who is at the beginning of my technical journey. Interested in software development, data analysis, databases, algorithms and problem solving. Eager to learn new skills, work on practical projects, and gain real-world experience. A curious learner with a positive attitude and willingness to improve.',
  aboutStory: [
    'I am an enthusiastic undergraduate student pursuing a Bachelor of Engineering (B.E.) in Artificial Intelligence and Machine Learning at A J Institute of Engineering and Technology, Mangaluru.',
    'Deeply interested in software development, exploratory data analysis, relational databases, algorithms, and computational problem-solving, I focus on understanding data and writing clean, structured code.',
    'Through academic coursework and hands-on projects, I have developed practical exposure to data cleaning, preprocessing, regression modeling, and visual insights generation using Python, Pandas, Matplotlib, and Scikit-learn.',
    'I am driven by curiosity, a strong willingness to learn, and an eagerness to take on real-world technical challenges as part of collaborative engineering teams.',
  ],
};

export const aboutHighlights = [
  {
    title: 'AI & Machine Learning',
    description: 'Foundations of intelligent systems, data preprocessing pipelines, exploratory data analysis, and regression techniques.',
    icon: 'BrainCircuit',
  },
  {
    title: 'Data Analysis & SQL',
    description: 'Practical data cleaning, handling outliers and duplicates, feature transformations, and exploratory analysis with Pandas & SQL.',
    icon: 'BarChart3',
  },
  {
    title: 'Algorithms & Core Code',
    description: 'Solid foundation in C, C++, Python, and Java basics with emphasis on data structures and algorithmic thinking.',
    icon: 'Terminal',
  },
  {
    title: 'Curiosity & Continuous Learning',
    description: 'Proactively acquiring skills across modern AI tools, Gen AI Studio, cloud fundamentals, and practical software engineering.',
    icon: 'Sparkles',
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'ajiet',
    institution: 'A J Institute of Engineering and Technology',
    degree: 'Bachelor of Engineering (B.E.) in Artificial Intelligence & Machine Learning',
    location: 'Mangaluru, Karnataka, India',
    period: 'Expected Graduation: 2027',
    grade: '8.38 / 10',
    gradeType: 'CGPA',
    highlights: [
      'Pursuing B.E. in Artificial Intelligence & Machine Learning with an 8.38 / 10 CGPA.',
      'Rigorous focus on algorithms, data analysis, databases, and machine learning models.',
      'Hands-on laboratory work, project-based learning, and analytical problem-solving.',
    ],
  },
  {
    id: 'st-aloysius',
    institution: 'St. Aloysius PU College, Kodialbail',
    degree: 'Pre-University Course (PCMC — Physics, Chemistry, Mathematics, Computer Science)',
    location: 'Mangaluru, Karnataka, India',
    period: '2021 – 2023',
    grade: '91.67%',
    gradeType: 'Percentage',
    highlights: [
      'Completed Pre-University Course (PCMC) with distinction scoring 91.67%.',
      'Strong quantitative grounding in higher mathematics, analytical reasoning, and computer science.',
    ],
  },
  {
    id: 'ladyhill',
    institution: 'Ladyhill Victoria Girls High School, Urwa',
    degree: 'SSLC — Karnataka State Board',
    location: 'Mangaluru, Karnataka, India',
    period: 'Completed 2021',
    grade: '95.04%',
    gradeType: 'Percentage',
    highlights: [
      'Graduated SSLC under Karnataka State Board with an outstanding 95.04%.',
      'Recognized for consistent academic excellence, discipline, and collaborative leadership.',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    description: 'Core languages utilized for data manipulation, algorithmic problem solving, and software development.',
    iconName: 'Code2',
    skills: [
      { name: 'Python', context: 'Primary language for ML, EDA & data manipulation', highlight: true },
      { name: 'Java', context: 'Basics — Object-oriented programming & fundamentals' },
      { name: 'C', context: 'Procedural programming, memory concepts & logic' },
      { name: 'C++', context: 'Object-oriented programming & problem solving' },
    ],
  },
  {
    id: 'web',
    title: 'Web Technologies',
    description: 'Frontend fundamentals for presenting data insights and interactive interfaces.',
    iconName: 'Globe',
    skills: [
      { name: 'HTML', context: 'Advanced structure, semantic markup & accessibility', highlight: true },
      { name: 'CSS', context: 'Modern responsive styling, layouts & design systems' },
    ],
  },
  {
    id: 'data-tools',
    title: 'Data & Analysis Tools',
    description: 'Analytical environment and tabular manipulation tools applied in projects and coursework.',
    iconName: 'Database',
    skills: [
      { name: 'SQL', context: 'Relational data querying, filtering & aggregations', highlight: true },
      { name: 'Pandas', context: 'DataFrame operations, data hygiene & merging', highlight: true },
      { name: 'NumPy', context: 'Numerical computations & multi-dimensional arrays' },
      { name: 'Matplotlib', context: 'Data distribution plots, bar charts & line graphs' },
      { name: 'Seaborn', context: 'Statistical visualizations, heatmaps & pair plots' },
      { name: 'Google Colab', context: 'Interactive cloud notebooks & reproducible workflows' },
    ],
  },
  {
    id: 'ml',
    title: 'Machine Learning (Applied)',
    description: 'Applied machine learning methodologies and predictive model pipelines.',
    iconName: 'Cpu',
    skills: [
      { name: 'Scikit-learn', context: 'Model training pipelines, evaluation & splitting', highlight: true },
      { name: 'Data Preprocessing', context: 'Imputation, encoding, outlier handling & normalization', highlight: true },
      { name: 'Exploratory Data Analysis', context: 'Pattern identification, correlation & trend detection' },
      { name: 'Regression Techniques', context: 'Predictive modeling, performance evaluation & diagnostics' },
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'thiranex-intern',
    company: 'Thiranex',
    role: 'Data Science Intern',
    duration: 'August 2026 – September 2026',
    location: 'Mangaluru, Karnataka, India',
    type: 'Internship',
    responsibilities: [
      'Worked on exploratory data analysis and data preprocessing.',
      'Performed data cleaning, visualization, and analysis using Python.',
      'Created visualizations to identify patterns and generate insights.',
      'Documented project methodology and results.',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Exploratory Data Analysis', 'Data Preprocessing'],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'supermarket-sales',
    title: 'Supermarket Sales Analysis',
    subtitle: 'Exploratory Data Analysis & Business Insights',
    description:
      'Analyzed supermarket sales data to identify trends and business insights. Handled missing values, duplicates, text, dates, and outliers. Conducted exploratory data analysis, created graphs and visualizations, and prepared reports summarizing key findings.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Google Colab'],
    category: 'Data Analytics & EDA',
    statusText: 'Completed Academic Project',
    metrics: [
      { label: 'Domain', value: 'Sales & Trends' },
      { label: 'Environment', value: 'Google Colab' },
      { label: 'Deliverable', value: 'Visual Insights Report' },
    ],
    objective:
      'To systematically examine supermarket sales data across product lines and branches, uncover key sales trends and purchasing patterns, eliminate dirty data anomalies, and produce clear visual summaries to assist data-driven business decisions.',
    methodology: [
      'Dataset Ingestion: Loaded supermarket sales records into Pandas DataFrames and inspected column datatypes.',
      'Comprehensive Data Cleaning: Handled missing entries, resolved duplicate records, sanitized text representations, and parsed date/time features.',
      'Outlier Detection & Treatment: Identified extreme variance and atypical transactions to ensure robust statistical summaries.',
      'Exploratory Data Analysis: Analyzed sales distribution across merchandise categories, customer demographics, and purchasing times.',
      'Visual Reporting: Generated clear line plots, bar charts, and correlation plots using Matplotlib and Seaborn to communicate conclusions.',
    ],
    keyLearnings: [
      'Gained hands-on proficiency in robust data cleaning and preprocessing in Python.',
      'Learned how outlier treatment and proper datetime parsing unlock accurate business trend insights.',
      'Mastered visual storytelling using customized Matplotlib and Seaborn charts.',
    ],
    githubUrl: 'https://github.com/Ankitha-245',
  },
  {
    id: 'used-car-price',
    title: 'Used Car Price Prediction',
    subtitle: 'Machine Learning Regression Model',
    description:
      'Developed a machine learning model to predict used-car prices based on relevant vehicle features. Performed data preprocessing and exploratory analysis, applied regression techniques, evaluated model performance, and visualized relationships between vehicle features and prices.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Google Colab'],
    category: 'Machine Learning',
    statusText: 'Completed Academic Project',
    metrics: [
      { label: 'Technique', value: 'Regression Models' },
      { label: 'Framework', value: 'Scikit-learn' },
      { label: 'Focus', value: 'Price Prediction' },
    ],
    objective:
      'To build a supervised machine learning regression pipeline that reliably predicts used-car valuations based on key vehicle attributes including manufacturing year, mileage, engine characteristics, and fuel types.',
    methodology: [
      'Data Preprocessing & Cleaning: Addressed missing historical vehicle attributes, formatted numeric values, and normalized input features.',
      'Exploratory Analysis: Visualized correlations and pairwise relationships between vehicle features and market resale prices.',
      'Feature Transformation & Train-Test Split: Encoded categorical features and segregated training and testing partitions for objective validation.',
      'Regression Modeling: Applied regression techniques using Scikit-learn to map feature interactions to price targets.',
      'Model Evaluation: Assessed predictive accuracy and inspected residual errors across vehicle feature ranges.',
    ],
    keyLearnings: [
      'Learned end-to-end regression workflows from raw feature cleaning to trained Scikit-learn pipelines.',
      'Understood the impact of feature encoding and collinearity on regression model stability.',
      'Visualized feature-price relationships to interpret and communicate model behavior effectively.',
    ],
    githubUrl: 'https://github.com/Ankitha-245',
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'infosys-python-fund',
    title: 'Python Fundamentals',
    provider: 'Infosys Springboard',
    category: 'Programming',
    badge: 'Core Python',
  },
  {
    id: 'infosys-python-dsa',
    title: 'Python Data Structures and Algorithms',
    provider: 'Infosys Springboard',
    category: 'Computer Science',
    badge: 'DSA',
  },
  {
    id: 'infosys-html-adv',
    title: 'HTML – Advanced',
    provider: 'Infosys Springboard',
    category: 'Web Development',
    badge: 'Frontend',
  },
  {
    id: 'infosys-ai-all',
    title: 'Artificial Intelligence for All',
    provider: 'Infosys Springboard',
    category: 'AI & ML',
    badge: 'AI Concepts',
  },
  {
    id: 'ms-simplilearn-excel',
    title: 'Introduction to MS Excel',
    provider: 'Microsoft / Simplilearn',
    category: 'Data Analysis',
    badge: 'Productivity & Data',
  },
  {
    id: 'google-simplilearn-genai',
    title: 'Introduction to Gen AI Studio',
    provider: 'Google Cloud / Simplilearn',
    category: 'AI & ML',
    badge: 'Generative AI',
  },
  {
    id: 'cisco-data-essentials',
    title: 'Data Essentials with Python',
    provider: 'Cisco Networking Academy',
    category: 'Data Science',
    badge: 'Data Fundamentals',
  },
];

export const languagesData: LanguageItem[] = [
  { name: 'English', proficiency: 'Fluent', type: 'Professional & Technical Communication' },
  { name: 'Kannada', proficiency: 'Fluent', type: 'Regional Communication' },
  { name: 'Hindi', proficiency: 'Fluent', type: 'National & Conversational Fluency' },
  { name: 'Tulu', proficiency: 'Native', type: 'Mother Tongue' },
];
