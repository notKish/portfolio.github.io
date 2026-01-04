export interface Project {
  name: string;
  description: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    name: 'Test Automation Framework',
    description: 'Built comprehensive UI and backend test automation frameworks using Java and JavaScript, improving test coverage and efficiency.',
    tech: ['Java', 'JavaScript', 'Selenium', 'JUnit']
  },
  {
    name: 'API Testing Suite',
    description: 'Developed robust API testing solutions with automated reporting and CI/CD integration.',
    tech: ['Java', 'REST Assured', 'Jenkins', 'Postman']
  },
  {
    name: 'DevOps Pipeline',
    description: 'Implemented infrastructure as code using Terraform and AWS, automating deployment processes.',
    tech: ['Terraform', 'AWS', 'CI/CD', 'Docker']
  }
];

