export interface Skill {
  name: string;
  icon: string;
  category: 'programmingLanguages' | 'libraries' | 'tools' | 'frameworks';
}

export const skills: Skill[] = [
  { name: 'Java', icon: 'java', category: 'programmingLanguages' },
  { name: 'JavaScript', icon: 'javascript', category: 'programmingLanguages' },
  { name: 'TypeScript', icon: 'typescript', category: 'programmingLanguages' },
  { name: 'Python', icon: 'python', category: 'programmingLanguages' },
  { name: 'React', icon: 'react', category: 'libraries' },
  { name: 'Selenium', icon: 'selenium', category: 'libraries' },
  { name: 'REST Assured', icon: 'rest-assured', category: 'libraries' },
  { name: 'AWS', icon: 'aws', category: 'tools' },
  { name: 'Terraform', icon: 'terraform', category: 'tools' },
  { name: 'Git', icon: 'git', category: 'tools' },
  { name: 'Jenkins', icon: 'jenkins', category: 'tools' },
  { name: 'Docker', icon: 'docker', category: 'tools' },
  { name: 'Postman', icon: 'postman', category: 'tools' },
  { name: 'MongoDB', icon: 'mongodb', category: 'tools' },
  { name: 'Node.js', icon: 'nodejs', category: 'tools' },
  { name: 'LangChain', icon: 'langchain', category: 'frameworks' },
  { name: 'LangGraph', icon: 'langgraph', category: 'frameworks' }
];
