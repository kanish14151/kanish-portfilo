import { Project, Achievement, Certification } from './types';

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
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
    title: 'TOMO chat',
    category: 'AI Platform',
    description: 'An all-in-one AI chatbot platform with GPT-4, Claude, Gemini, and 10+ models.',
    longDescription: `TOMO chat is an all-in-one AI chatbot platform where you can:\n\n• Chat with GPT-4, Claude, Gemini, and 10+ other AI models\n• Use powerful tools (web search, code execution, file analysis)\n• Generate images with AI\n• Voice chat with AI\n• Create custom AI agents\n• Visualize data\n• Connect with MCP tools\n• Share with teams\n\nPerfect for homework, coding projects, research, or just exploring AI!`,
    technologies: ['Next.js', 'Vercel AI SDK', 'OpenAI', 'Anthropic', 'Google AI'],
    image: '/tomo-2.jpeg',
    images: ['/tomo-2.jpeg', '/tomo-1.jpeg'],
    liveLink: 'https://chat.tomoacademy.site',
    repoLink: 'https://github.com/ZAYATHON/AI-avengers-07.git'
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
    title: 'Agri AI',
    category: 'AI Agriculture',
    description: 'A cutting-edge agricultural intelligence platform empowering farmers with data-driven insights.',
    longDescription: `Agri AI is a cutting-edge agricultural intelligence platform that combines computer vision, geospatial analysis, and natural language processing to empower farmers and agricultural professionals with data-driven insights. This revolutionary tool leverages AI to transform traditional farming practices into smart, sustainable agriculture.\n\n✨ Features\n• 🔬 AI Plant Analysis: Upload plant images for instant disease detection and personalized treatment recommendations\n• 🗺️ Interactive Maps: Select and analyze land areas with advanced Mapbox integration for detailed agricultural insights\n• 🌐 Multi-language Support: Seamlessly available in English, Hindi, Punjabi, Tamil, Telugu, and Marathi\n• 🌤️ Weather Integration: Access real-time agricultural weather data and forecasts\n• 💬 Smart Chatbot: AI-powered agricultural advisor providing expert guidance with an enhanced conversational experience\n• 📊 Land Analysis: Draw specific land areas to receive comprehensive analysis of soil quality, climate conditions, and agricultural potential\n• 🌱 Crop Recommendations: Data-driven suggestions for optimal crop selection based on local conditions`,
    technologies: ['React', 'Mapbox', 'Computer Vision', 'NLP', 'Weather API'],
    image: '/agri-1.jpeg',
    images: ['/agri-1.jpeg', '/agri-2.jpeg', '/agri-3.jpeg'],
    liveLink: 'https://agri-ai-puce-xi.vercel.app/',
    repoLink: 'https://github.com/tomo-academy/Agri-AI.git'
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
    id: 'kumarakuru-ideathon-2025',
    name: "Kosmorena '25 – Ideathon Participation",
    issuer: 'Kumaraguru College of Technology',
    date: 'Oct 2025',
    image: '/kumarakuru.jpeg',
    skills: ['Ideation', 'Space Tech', 'Problem Solving', 'Space Week'],
    description: "Participated in the Ideathon organized by Kumaraguru SEDS as part of Kosmorena '25 during International Space Week (6-8 October 2025) at Kumaraguru College of Technology.",
    link: '#',
    meta: [
      { label: 'Event', value: "Kosmorena '25 (Ideathon)" },
      { label: 'Organizer', value: 'Kumaraguru SEDS' },
      { label: 'Theme', value: 'International Space Week' }
    ]
  },
  {
    id: 'spark-25-hackathon',
    name: "SPARK'25 – 10 Hours Hackathon",
    issuer: 'Sona College of Technology',
    date: 'Sep 2025',
    image: '/spark.jpeg',
    skills: ['Hackathon', 'Competitive Coding', 'Rapid Prototyping', 'Problem Solving'],
    description: "Participated in the 10 Hours Hackathon challenge at SPARK'25 conducted on 26th September 2025 at Sona College of Technology, organized by the Department of Computer Science and Engineering.",
    link: '#',
    meta: [
      { label: 'Event', value: "SPARK'25" },
      { label: 'Format', value: '10 Hours Hackathon Challenge' },
      { label: 'Dept', value: 'Computer Science and Engineering' }
    ]
  },
  {
    id: 'infosys-python-2025',
    name: 'Basics of Python',
    issuer: 'Infosys Springboard',
    date: 'Aug 2025',
    image: '/infosys.jpeg',
    skills: ['Python', 'Programming', 'Data Structures', 'Infosys'],
    description: 'Successfully completed the comprehensive course on the Basics of Python, covering fundamental programming concepts, syntax, and core data structures through the Infosys Springboard platform.',
    link: '#',
    meta: [
      { label: 'Issued on', value: 'August 15, 2025' },
      { label: 'Issuer', value: 'Infosys Limited' },
      { label: 'Program', value: 'Infosys Springboard' }
    ]
  },
  {
    id: 'iste-member-2025',
    name: 'ISTE Student Membership',
    issuer: 'ISTE',
    date: 'Jul 2025',
    image: '/iste.jpeg',
    skills: ['Professional Development', 'Technical Education', 'Networking'],
    description: "Granted Student Membership in The Indian Society for Technical Education (ISTE), recognizing affiliation with Sona College of Technology and commitment to professional excellence in technical education.",
    link: '#',
    meta: [
      { label: 'Membership No', value: '2735' },
      { label: 'Validity', value: '2025 - 2029' },
      { label: 'SC Code', value: 'TN345' }
    ]
  },
  {
    id: 'learntube-cyber-2025',
    name: 'Cybersecurity Assessment',
    issuer: 'LearnTube.ai',
    date: 'Aug 2025',
    image: '/learntube.jpeg',
    skills: ['Cybersecurity', 'Network Security', 'Threat Assessment', 'AI Learning'],
    description: 'Successfully completed the Cybersecurity Assessment certified by LearnTube.ai, validating skills in identifying security vulnerabilities and understanding core cybersecurity frameworks.',
    link: '#',
    meta: [
      { label: 'ID', value: 'DJA-B-1-1592013-0' },
      { label: 'Issued on', value: 'August 17, 2025' },
      { label: 'Format', value: 'Advanced Skills Assessment' }
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