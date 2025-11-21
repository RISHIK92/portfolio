"use client";

import {
  SiNextdotjs,
  SiTypescript,
  SiDocker,
  SiBun,
  SiPostgresql,
  SiPrisma,
  SiNodedotjs,
  SiExpress,
  SiWebrtc,
  SiTailwindcss,
  SiReact,
} from "react-icons/si";

import { FaRobot } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";

import { PinContainer } from "./ui/3d-pin";
import dynamic from "next/dynamic";

const AnimatedTooltip = dynamic(
  () => import("./ui/animated-tooltip").then((mod) => mod.AnimatedTooltip),
  {
    ssr: false,
    loading: () => null,
  }
);

const nativexSkills = [
  { id: 1, name: "Next.js", designation: "React Framework", icon: SiNextdotjs },
  {
    id: 2,
    name: "TypeScript",
    designation: "Programming Language",
    icon: SiTypescript,
  },
  { id: 3, name: "AI", designation: "Generative AI", icon: FaRobot },
  { id: 4, name: "Docker", designation: "Containerization", icon: SiDocker },
  { id: 5, name: "Bun", designation: "JavaScript Runtime", icon: SiBun },
  { id: 6, name: "PostgreSQL", designation: "Database", icon: SiPostgresql },
  { id: 7, name: "Prisma ORM", designation: "ORM", icon: SiPrisma },
  { id: 8, name: "CI/CD", designation: "Automation", icon: BiNetworkChart },
];

const devSketchSkills = [
  { id: 1, name: "Next.js", designation: "React Framework", icon: SiNextdotjs },
  {
    id: 2,
    name: "Node.js",
    designation: "Runtime Environment",
    icon: SiNodedotjs,
  },
  { id: 3, name: "Express", designation: "Backend Framework", icon: SiExpress },
  { id: 4, name: "PostgreSQL", designation: "Database", icon: SiPostgresql },
  { id: 5, name: "Prisma ORM", designation: "ORM", icon: SiPrisma },
  {
    id: 6,
    name: "WebSockets",
    designation: "Realtime Communication",
    icon: BiNetworkChart,
  },
  { id: 7, name: "WebRTC", designation: "Peer-to-Peer", icon: SiWebrtc },
  {
    id: 8,
    name: "TypeScript",
    designation: "Programming Language",
    icon: SiTypescript,
  },
  {
    id: 9,
    name: "Tailwind CSS",
    designation: "CSS Framework",
    icon: SiTailwindcss,
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto py-20 space-y-12" id="work">
      <ProjectCard
        project={{
          name: "Nativex",
          date: "July 2025",
          description:
            "Built a full-stack 'prompt-to-app' engine that converts natural language into deployable mobile apps using generative AI. Implemented Dockerized isolated builds, scalable multi-user architecture, and automated CI/CD pipelines.",
          image:
            "https://media.licdn.com/dms/image/v2/D562DAQEArCDovqVORg/profile-treasury-image-shrink_800_800/B56ZhAQwBmHkAY-/0/1753424796557?e=1763838000&v=beta&t=q8rxZO0VmepPJE2QY6vJcX9hCIZML87YGZpKfgm_vEw",
          techStack: nativexSkills,
          github: "https://github.com/rishik92/nativex",
          demo: "https://nativex.rishik.codes/",
        }}
      />

      <ProjectCard
        project={{
          name: "Dev Sketch",
          date: "February 2025",
          description:
            "Built a real-time collaborative platform with code editor, drawing board, chat, and voice integration. Engineered low-latency WebSocket + WebRTC synchronization for smooth multi-user collaboration.",
          image:
            "https://media.licdn.com/dms/image/v2/D562DAQFMFE-KP4GTLg/profile-treasury-image-shrink_800_800/B56ZZ9_uotGUAc-/0/1745870582839?e=1763841600&v=beta&t=DAVm31MtRllI8iBm8UG_1HX5TMLNjqMsUeZWY9UdXS0",
          techStack: devSketchSkills,
          github: "https://github.com/risHIK92/dev-sketch",
          demo: "https://dev-sketch-frontend.vercel.app/",
        }}
      />
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div
      className="
        relative overflow-hidden md:overflow-visible
        border rounded-2xl shadow-lg bg-white dark:bg-neutral-900
        p-6 md:p-10 h-auto md:h-[380px]
        flex flex-col justify-between gap-8 md:gap-0
      "
    >
      <div className="relative z-10 w-full md:w-[58%] space-y-3">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight dark:text-white">
            {project.name}
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            {project.date}
          </p>
        </div>

        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm md:text-base">
          {project.description}
        </p>

        <div className="flex gap-3 pt-2">
          <button
            onClick={() => window.open(project.github, "_blank")}
            className="
              flex justify-center gap-2 items-center shadow-xl text-sm
              bg-white dark:bg-neutral-900 backdrop-blur-md
              isolation-auto border-gray-200 dark:border-neutral-700 
              before:absolute before:w-full before:transition-all before:duration-700 
              before:hover:w-full before:-left-full before:hover:left-0 
              before:rounded-full before:bg-black dark:before:bg-white 
              hover:text-white dark:hover:text-black 
              before:-z-10 before:aspect-square before:hover:scale-150 
              relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group
            "
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Github
          </button>

          <button
            onClick={() => window.open(project.demo, "_blank")}
            className="
              flex justify-center gap-2 items-center shadow-xl text-sm
              bg-white dark:bg-neutral-900 backdrop-blur-md
              isolation-auto border-gray-200 dark:border-neutral-700 
              before:absolute before:w-full before:transition-all before:duration-700 
              before:hover:w-full before:-left-full before:hover:left-0 
              before:rounded-full before:bg-black dark:before:bg-white
              hover:text-white dark:hover:text-black 
              before:-z-10 before:aspect-square before:hover:scale-150 
              relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group
            "
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Demo
          </button>
        </div>
      </div>

      <div
        className="relative z-10 flex flex-row items-center w-full md:w-[45%]"
        suppressHydrationWarning
      >
        <AnimatedTooltip items={project.techStack} />
      </div>

      <div className="relative md:absolute bottom-0 right-0 w-full md:w-[60%] h-[250px] md:h-full flex items-center md:items-end justify-center md:justify-end pointer-events-none mt-4 md:mt-0">
        <div className="pointer-events-auto w-full h-full flex justify-center md:w-auto md:h-auto md:block">
          <PinContainer
            title={project.name}
            href={project.demo}
            containerClassName="h-full w-full flex justify-center md:justify-end"
          >
            <div className="w-[300px] md:w-[550px] h-full md:h-[300px] flex items-center justify-center md:block">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
}
