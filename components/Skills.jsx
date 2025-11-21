"use client";

import { useState } from "react";
import TargetCursor from "./ui/target-cursor";

// Exact skill logos from CDN
const skillLogos = {
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  Redux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  Zustand: "https://img.stackshare.io/service/11559/zustand.png",
  "Tailwind CSS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  Node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Express:
    "https://tse3.mm.bing.net/th/id/OIP.T_ErTKsli7fr4TQyFBAHlwHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  PGVector:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  Redis:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "Prisma ORM":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Websockets:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  WebRTC:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
  "AWS Services":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  Firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  VPS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GraphQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  "LLM Models":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "CI & CD":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  BullMQ:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
};

export default function Skills() {
  return (
    <div id="skills-section" className="max-w-full mx-auto my-10">
      <h2 className="text-4xl font-Ovo mb-10 text-center dark:text-white">
        Skills & Technologies
      </h2>

      <div className="cursor-target-container">
        <TargetCursor
          parentSelector="#skills-section"
          targetSelector=".cursor-target"
          spinDuration={2}
          hideDefaultCursor={true}
          parallaxOn={true}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mb-8 mx-4 lg:mx-12">
        <div className="flex-1 mb-12">
          <div className="grid grid-cols-4 gap-3 lg:gap-6 lg:mr-6">
            <SkillCard
              skill="JavaScript"
              className="border-2 border-red-300 cursor-target"
            />
            <SkillCard
              skill="TypeScript"
              className="border-2 border-red-300 cursor-target"
            />
            <SkillCard
              skill="Python"
              className="border-2 border-red-300 cursor-target"
            />
            <SkillCard
              skill="React"
              className="border-2 border-red-300 cursor-target"
            />
            <SkillCard
              skill="Next.js"
              className="border-2 border-red-300 cursor-target"
            />
            <SkillCard
              skill="Redux"
              className="border-2 border-red-300 cursor-target"
            />
            <SkillCard
              skill="Zustand"
              className="border-2 border-red-300 cursor-target"
            />
            <SkillCard
              skill="Tailwind CSS"
              className="border-2 border-red-300 cursor-target"
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-4 gap-2 lg:gap-6 lg:ml-6">
            <SkillCard
              skill="Node"
              className="border-2 border-blue-300 cursor-target"
            />
            <SkillCard
              skill="Express"
              className="border-2 border-blue-300 cursor-target"
            />
            <SkillCard
              skill="MongoDB"
              className="border-2 border-blue-300 cursor-target"
            />
            <SkillCard
              skill="PostgreSQL"
              className="border-2 border-blue-300 cursor-target"
            />
            <SkillCard
              skill="PGVector"
              className="border-2 border-blue-300 cursor-target"
            />
            <SkillCard
              skill="Redis"
              className="border-2 border-blue-300 cursor-target"
            />
            <SkillCard
              skill="Prisma ORM"
              className="border-2 border-blue-300 cursor-target"
            />
            <SkillCard
              skill="Docker"
              className="border-2 border-blue-300 cursor-target"
            />
          </div>
        </div>
      </div>

      <div className="w-full ml-2">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 lg:gap-6 max-w-4xl mx-auto">
          <SkillCard
            skill="Websockets"
            className="border-2 border-green-300 cursor-target"
          />
          <SkillCard
            skill="WebRTC"
            className="border-2 border-green-300 cursor-target"
          />
          <SkillCard
            skill="AWS Services"
            className="border-2 border-green-400 cursor-target"
          />
          <SkillCard
            skill="Firebase"
            className="border-2 border-green-400 cursor-target"
          />
          <SkillCard
            skill="VPS"
            className="border-2 border-green-400 cursor-target"
          />
          <SkillCard
            skill="Git"
            className="border-2 border-green-400 cursor-target"
          />
          <SkillCard
            skill="GraphQL"
            className="border-2 border-green-400 cursor-target"
          />
          <SkillCard
            skill="LLM Models"
            className="border-2 border-green-400 cursor-target"
          />
          <SkillCard
            skill="CI & CD"
            className="border-2 border-green-400 cursor-target"
          />
          <SkillCard
            skill="BullMQ"
            className="border-2 border-green-400 cursor-target"
          />
        </div>
      </div>
    </div>
  );
}

function SkillCard({ skill, className }) {
  const [isHovered, setIsHovered] = useState(false);
  const logoUrl = skillLogos[skill];

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 md:p-5 flex items-center justify-center hover:scale-105 transform transition-all duration-300 cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && logoUrl ? (
        <img
          src={logoUrl}
          alt={`${skill} logo`}
          className="w-7 h-7 object-contain transition-all duration-300"
          style={{
            filter:
              skill === "Express" || skill === "Next.js" ? "invert(1)" : "none",
          }}
        />
      ) : (
        <span className="text-lg font-medium dark:text-white text-center transition-all duration-300">
          {skill}
        </span>
      )}
    </div>
  );
}
