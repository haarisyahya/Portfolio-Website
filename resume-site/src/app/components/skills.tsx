// components/skills.tsx
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiDocker } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';

type Skill = {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
  level: number; // 0‑100
};

const skills: Skill[] = [
  { name: 'TypeScript', Icon: SiTypescript, level: 95 },
  { name: 'React', Icon: SiReact, level: 92 },
  { name: 'Next.js', Icon: SiNextdotjs, level: 90 },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, level: 88 },
  { name: 'Node.js', Icon: SiNodedotjs, level: 85 },
  { name: 'Docker', Icon: SiDocker, level: 70 },
  { name: 'Git', Icon: FaGitAlt, level: 90 },
];

export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center mb-8 text-white">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map(({ name, Icon, level }) => (
          <div
            key={name}
            className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg"
          >
            <Icon className="text-4xl text-primary mb-2" />
            <span className="font-medium text-white">{name}</span>
            <div className="w-full bg-black/30 rounded-full h-2 mt-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-500"
                style={{ width: `${level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
