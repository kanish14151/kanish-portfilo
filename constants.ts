import { Project, Achievement, Certification } from './types';

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Initiatives', path: '/projects' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Contact', path: '/contact' },
];

export const SKILLS = [
  { name: 'Python', level: 95 },
  { name: 'TensorFlow', level: 85 },
  { name: 'Scikit-learn', level: 90 },
  { name: 'Neural Networks', level: 80 },
  { name: 'Cybersecurity', level: 75 },
  { name: 'React & TS', level: 70 },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI for Social Justice',
    category: 'Social Impact',
    description: 'Leveraging NLP to analyze legal texts for bias detection.',
    longDescription: 'An ambitious project aiming to democratize legal understanding. By utilizing Natural Language Processing (NLP) and transformer models, this tool analyzes historical legal verdicts to identify potential biases based on gender and ethnicity. It provides a transparency score for legal documents, helping activists and lawyers build fairer cases.',
    technologies: ['Python', 'BERT', 'Pandas', 'Flask'],
    image: 'https://picsum.photos/800/600?random=1',
  },
  {
    id: '2',
    title: 'Sona Tech Mentorship',
    category: 'Mentorship',
    description: 'A platform connecting seniors with juniors for peer learning.',
    longDescription: 'Developed a scalable web platform to foster a culture of knowledge sharing at Sona College of Technology. The system uses a recommendation algorithm to match mentors with mentees based on skill gaps and career interests. Features include scheduling, resource sharing, and progress tracking.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    image: 'https://picsum.photos/800/600?random=2',
  },
  {
    id: '3',
    title: 'Eco-Vision AI',
    category: 'AI/ML',
    description: 'Computer vision system for automated waste segregation.',
    longDescription: 'Addressing the global waste management crisis, Eco-Vision uses Convolutional Neural Networks (CNNs) to classify waste items into recyclable, organic, and hazardous categories in real-time via video feed. Deployed on edge devices for smart bin integration.',
    technologies: ['OpenCV', 'TensorFlow Lite', 'Python', 'Raspberry Pi'],
    image: 'https://picsum.photos/800/600?random=3',
  },
  {
    id: '4',
    title: 'SecureNet',
    category: 'Web Dev',
    description: 'Network anomaly detection dashboard.',
    longDescription: 'A comprehensive dashboard for visualizing network traffic and flagging potential DDOS attacks or intrusion attempts using unsupervised learning algorithms on packet data.',
    technologies: ['D3.js', 'Python', 'Scikit-learn', 'Wireshark'],
    image: 'https://picsum.photos/800/600?random=4',
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: '1',
    title: 'National Hackathon Winner',
    organization: 'Smart India Hackathon',
    date: 'Oct 2027',
    description: 'Led a team of 4 to build an AI-driven disaster response system, winning 1st place among 500+ teams.',
    type: 'Hackathon',
    icon: 'trophy',
  },
  {
    id: '2',
    title: 'Best Orator Award',
    organization: 'Regional Tech Debate',
    date: 'Mar 2026',
    description: 'Awarded for articulating the ethical implications of AGI in modern society.',
    type: 'Oratorical',
    icon: 'mic',
  },
  {
    id: '3',
    title: 'AI Research Fellow',
    organization: 'Sona Research Lab',
    date: 'Jan 2026',
    description: 'Selected for prestigious fellowship to research federated learning applications.',
    type: 'Academic',
    icon: 'star',
  },
  {
    id: '4',
    title: 'ISTE Chapter Secretary',
    organization: 'ISTE Student Chapter',
    date: '2025 - 2026',
    description: 'Organized 12+ technical workshops and grew membership by 40%.',
    type: 'Leadership',
    icon: 'certificate',
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'zayathon-2026',
    name: 'Zayathon 2026 – Top 5 (Consolation Prize)',
    issuer: 'Sona College of Technology',
    date: 'Jan 2026',
    image: '/zaya.jpeg',
    skills: ['Next.js', 'AI Orchestration', 'Vercel AI SDK', 'Full Stack'],
    highlight: true,
    link: '#',
    description: 'Built TOMO, a multi-AI chat platform that enables users to interact with multiple AI models in a unified workspace, compare responses side-by-side, generate images, execute code, perform web searches, and create custom AI agents.',
    meta: [
      { label: 'Event', value: "ZAYATHON'26 (12-Hour Hackathon)" },
      { label: 'Achievement', value: 'Secured Top 5 position out of 70 teams' },
      { label: 'Tech Stack', value: 'Next.js, Vercel AI SDK, PostgreSQL, Docker' }
    ]
  },
  {
    id: 'nptel-2025',
    name: 'NPTEL – Design Thinking: A Primer',
    issuer: 'IIT Madras',
    date: 'Aug 2025',
    image: '/nptel.jpeg',
    skills: ['Design Thinking', 'Problem Solving', 'Innovation', 'Strategic Planning'],
    elite: true,
    link: '#',
    description: 'Awarded Elite Certification in Design Thinking. This course provided a comprehensive framework for solving complex problems through empathy, ideation, and prototyping.',
    meta: [
      { label: 'Score', value: '72% (Elite Certification)' },
      { label: 'Breakdown', value: 'Online Assignments: 21.67/25 | Proctored Exam: 50.5/75' },
      { label: 'Course Duration', value: 'Jul–Aug 2025 (4 Week Course)' },
      { label: 'Total Candidates', value: '6793 Certified' }
    ]
  },
  {
    id: 'sona-titans-2025',
    name: 'Sona Titans – Training Participation',
    issuer: 'Sona College of Technology',
    date: 'Sep 2025',
    image: '/training.jpeg',
    skills: ['Professional Development', 'Aptitude', 'AI & ML', 'Team Building'],
    link: '#',
    description: 'Participated in the series of events organized by the Department of Training under the banner of Sona Titans Club. Engaged in intensive sessions focusing on aptitude, technical problem solving, and soft skills development.',
    meta: [
      { label: 'Type', value: 'Certificate of Participation' },
      { label: 'Program', value: 'II Year – Artificial Intelligence & Machine Learning' },
      { label: 'Duration', value: '18th – 27th September 2025' }
    ]
  },
  {
    id: 'tamil-cultural-preservation',
    name: 'Tamil Cultural Preservation',
    issuer: 'JACKHI Book of Talents',
    date: '2026',
    image: '/tamil.jpeg',
    skills: ['Culture', 'Language'],
    description: 'Recognizing and promoting Tamil language and cultural heritage through the JACKHI Book of Talents initiative.',
    link: '#'
  },
  {
    id: 'youth-art-program',
    name: 'Youth Art Program',
    issuer: 'VARNAM National Painting Competition',
    date: '2026',
    image: '/varnam.jpeg',
    skills: ['Art', 'Youth'],
    description: 'Empowering young artists through the VARNAM National Painting Competition, providing a platform for creative expression and recognition.',
    link: '#'
  },
];