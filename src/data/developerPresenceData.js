// Data model for GitHub, Coding Profiles, Certifications, and Learning journey
export const githubData = {
  profile: {
    name: "Rudra Umra",
    username: "rudraumra",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    bio: "Full Stack Developer | AI Enthusiast | Software Engineering Student",
    profileUrl: "https://github.com/rudraumra",
  },
  stats: {
    repositories: 34,
    contributions: 1248,
    followers: 185,
    following: 92,
    currentStreak: 23,
    longestStreak: 64,
  },
  topLanguages: [
    { name: "JavaScript", percentage: 38, color: "#f7df1e" },
    { name: "PHP", percentage: 24, color: "#777bb4" },
    { name: "Dart / Flutter", percentage: 18, color: "#02569b" },
    { name: "Tailwind CSS", percentage: 12, color: "#38bdf8" },
    { name: "Java", percentage: 8, color: "#b07219" },
  ],
  pinnedRepos: [
    {
      name: "Capturra",
      description: "Photography marketplace platform connecting creators with clients.",
      stars: 18,
      forks: 4,
      language: "PHP / Tailwind",
      url: "https://github.com/rudraumra/capturra",
    },
    {
      name: "VitalSync",
      description: "IoT Smart Health & Medication Monitoring System with Flutter app integration.",
      stars: 14,
      forks: 2,
      language: "Dart / C++",
      url: "https://github.com/rudraumra/vitalsync",
    },
    {
      name: "CoreInventory",
      description: "Lightweight, responsive inventory management platform built for hackathons.",
      stars: 22,
      forks: 8,
      language: "PHP",
      url: "https://github.com/rudraumra/coreinventory",
    },
  ],
  // 52 weeks x 7 days mock contribution heatmap grid
  contributionGrid: Array.from({ length: 112 }, (_, i) => {
    // Generate organic-looking contribution intensity (0 to 4)
    const level = Math.floor(Math.sin(i * 0.45) * 2.5 + 2);
    return Math.max(0, Math.min(4, level));
  }),
};

export const codingProfiles = [
  {
    id: "github",
    platform: "GitHub",
    username: "@rudraumra",
    url: "https://github.com/rudraumra",
    icon: "github",
    color: "#ffffff",
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    username: "in/rudra-umra",
    url: "https://linkedin.com/in/rudra-umra",
    icon: "linkedin",
    color: "#0a66c2",
  },
  {
    id: "leetcode",
    platform: "LeetCode",
    username: "rudraumra",
    url: "https://leetcode.com/rudraumra",
    icon: "code",
    color: "#ffa116",
  },
  {
    id: "gfg",
    platform: "GeeksforGeeks",
    username: "rudraumra",
    url: "https://geeksforgeeks.org/user/rudraumra",
    icon: "terminal",
    color: "#2f9d58",
  },
  {
    id: "hackerrank",
    platform: "HackerRank",
    username: "rudraumra",
    url: "https://hackerrank.com/rudraumra",
    icon: "cpu",
    color: "#2ec4b6",
  },
  {
    id: "codechef",
    platform: "CodeChef",
    username: "rudraumra",
    url: "https://codechef.com/users/rudraumra",
    icon: "award",
    color: "#5b4638",
  },
];

export const certifications = [
  {
    id: "cert-1",
    title: "Python Programming",
    issuer: "Coursera / DeepLearning.AI",
    year: "2025",
    credentialUrl: "#",
    icon: "python",
  },
  {
    id: "cert-2",
    title: "Web Development",
    issuer: "Udemy Full Stack Bootcamp",
    year: "2025",
    credentialUrl: "#",
    icon: "layout",
  },
  {
    id: "cert-3",
    title: "SQL & Relational Databases",
    issuer: "Oracle / Hackerrank",
    year: "2025",
    credentialUrl: "#",
    icon: "database",
  },
  {
    id: "cert-4",
    title: "Git & GitHub Version Control",
    issuer: "GitHub Education",
    year: "2023",
    credentialUrl: "#",
    icon: "git-branch",
  },
  {
    id: "cert-5",
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2023",
    credentialUrl: "#",
    icon: "code-2",
  },
];

export const currentLearningTopics = [
  "React Native",
  "Docker",
  "AWS",
  "System Design",
  "CI/CD",
  "Artificial Intelligence",
  "FastAPI Advanced",
];