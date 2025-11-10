// components/experience.tsx
import Image from "next/image";
import { format } from "date-fns";

type ExperienceItem = {
  company: string;
  role: string;
  start: string; // ISO date
  end?: string; // undefined → present
  location: string;
  description: string[];
  logo: string;
  logoAlt?: string;
};

const experience: ExperienceItem[] = [
  {
    company: "Accenture",
    role: "Industry X Developer",
    start: "2024-05-14",
    location: "Mississauga, ON",
    logo: "/accenture_logo.jpg",
    logoAlt: "Accenture logo",
    description: [
      "Led data migration initiatives utilizing 3DEXPERIENCE, SolidWorks, and Citrix, ensuring seamless transfer and integrity of complex engineering data",
      "Developed and implemented automation scripts using Java and PowerShell to streamline data processing workflows and that reduced manual effort by 45%",
      "Developed and thoroughly tested a Windows service integration application that streamlined theclients safety process and ensured data reliability using C#, SQL Server and Postman",
      "Working with a healthcare client on data migration, developing and testing Java features withJUnit/Mockito, Git, Azure DevOps (CI/CD), and gaining exposure to Apache Camel, Kafka, Docker, and Kubernetes",
      "Led and mentored extracurricular initiatives by developing a Python-based algorithm to optimizementee-mentor matching for a mentorship program that was deployed globally across Accenture"
    ],
  },
  {
    company: "LiteSpace",
    role: "Software Engineer Intern",
    start: "2023-09-01",
    end: "2023-12-31",
    location: "Remote",
    logo: "/litespace_logo.jpg",
    logoAlt: "LiteSpace logo",
    description: [
      "Engineered and evolved the hybrid and remote scheduling feature using TypeScript, Tailwind.CSS, GraphQL, MongoDB, and Figma",
      "Played a pivotal role in LiteSpace’s launch by conducting rigorous testing and debugging with team and CTO",
      "Collaborated with a dynamic team to develop, test, and deploy new front-end and back-end features",
      "Ensured scalability and performance using a microservices architecture",
      "Utilized GitHub Actions for seamless continuous integration and delivery"
    ],
  },
];

export default function Experience() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center mb-12 text-white">Experience</h2>

      <ul className="space-y-12">
        {experience.map((exp) => (
          <li key={exp.company + exp.start} className="flex items-start gap-6">
            <div className="mt-1">
              <div className="relative h-12 w-12 flex items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur-sm shadow-lg">
                <Image
                  src={exp.logo}
                  alt={exp.logoAlt ?? `${exp.company} logo`}
                  width={48}
                  height={48}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <p className="text-sm text-slate-300">
                {exp.company} • {exp.location}
              </p>
              <p className="text-sm text-slate-300">
                {format(new Date(exp.start), "MMM yyyy")} –{" "}
                {exp.end ? format(new Date(exp.end), "MMM yyyy") : "Present"}
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1 text-base text-slate-200">
                {exp.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-slate-400 text-center">
        and more can be found on my
        <a
          href="/Haaris Yahya - resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80"
        > resumé </a>
         or on my <a
          href="https://www.linkedin.com/in/haaris-yahya-398ba9195/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80"
        >LinkedIn 
        </a>
        .
      </p>
    </div>
  );
}
