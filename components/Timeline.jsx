"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Jun 2025 – Present",
      content: (
        <div>
          <h3 className="text-sm font-semibold dark:text-white">
            Freelance Developer & UI/UX Engineer
          </h3>

          <p className="mt-2 mb-4 text-[11px] uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
            Tech Stack:{" "}
            <span className="font-medium">
              React, Next.js, Tailwind CSS, Firebase
            </span>
          </p>

          <p className="mb-6 text-xs md:text-sm text-neutral-800 dark:text-neutral-300">
            Designing and developing polished, high-performance web experiences
            for clients — with a strong focus on visual hierarchy, interaction
            design, and brand-aligned UI. I handle the full cycle: concept,
            wireframes, design systems, frontend engineering, and deployment,
            ensuring each product feels modern, intentional, and aesthetically
            cohesive.
          </p>

          <ul className="space-y-3 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
            <li>
              🎨 <strong>Thoht</strong> —{" "}
              <a
                href="https://www.thoht.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                thoht.in
              </a>
              <br />A studio website showcasing their work across architecture,
              interiors, and landscape design with a clear and refined visual
              language.
            </li>

            <li>
              🏡 <strong>Lakeview Homes</strong> —{" "}
              <a
                href="https://lakeviewhomes.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                lakeviewhomes.co.in
              </a>
              <br />A professional website communicating Lakeview Homes’s
              dedication to quality living and community.
            </li>
          </ul>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <img
              src="/assets/thoht.png"
              alt="Thoht website"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />

            <img
              src="/assets/lakeview.png"
              alt="Lakeview Homes website"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Feb 2025 – May 2025",
      content: (
        <div>
          <h2 className="text-lg font-semibold dark:text-white">
            Associate Developer – AJS Innovation (Remote)
          </h2>

          <p className="mt-2 mb-4 text-[12px] uppercase tracking-wide text-neutral-800 dark:text-neutral-600">
            Tech Stack:{" "}
            <span className="font-medium">
              React, Next.js, Node.js, Express.js, PostgreSQL, Prisma ORM
            </span>
          </p>

          <p className="mt-2 mb-6 text-xs md:text-sm text-neutral-800 dark:text-neutral-300">
            Built two production-ready platforms — a gifting e-commerce system
            and a location-based classifieds website — using React, Node.js,
            Express, PostgreSQL, and Prisma ORM. Delivered complete end-to-end
            features including authentication, role-based dashboards, wallet &
            Razorpay payments, and location-aware services. Helped streamline
            internal operations by replacing manual order tracking with
            automated workflows and real-time status updates.
          </p>

          <ul className="space-y-2 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
            <li>🚀 Developed responsive UIs using React & Tailwind</li>
            <li>🛠️ Built scalable REST APIs with Node.js & Express</li>
            <li>
              🗄️ Designed and optimized PostgreSQL schemas using Prisma ORM
            </li>
            <li>
              🔐 Implemented secure authentication & role-based access control
            </li>
            <li>
              💳 Integrated Razorpay for wallets, payments, and order flows
            </li>
          </ul>
        </div>
      ),
    },

    {
      title: "May 2021 – Jun 2024",
      content: (
        <div>
          <h3 className="text-sm font-semibold dark:text-white">
            Founder – Callisto Games (Remote)
          </h3>

          <p className="mt-2 mb-6 text-xs md:text-sm text-neutral-800 dark:text-neutral-300">
            Created and launched two indie mobile games with 150+ total
            downloads and 4.9 ★ ratings — managing design, development, and
            marketing.
          </p>

          <ul className="space-y-2 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
            <li>🎮 Led design & development for both games</li>
            <li>🧩 Built core gameplay loops & UI systems</li>
            <li>📣 Managed marketing via Google Ads</li>
            <li>📊 Analyzed user feedback for gameplay improvements</li>
          </ul>
        </div>
      ),
    },

    {
      title: "2024 – 2028",
      content: (
        <div>
          <h3 className="text-sm font-semibold dark:text-white">
            BTech – Computer Science & Artificial Intelligence
          </h3>

          <p className="mt-2 text-xs md:text-sm text-neutral-800 dark:text-neutral-300">
            Newton School of Technology
          </p>
        </div>
      ),
    },
    {
      title: "2022 – 2024",
      content: (
        <div>
          <h3 className="text-sm font-semibold dark:text-white">
            Intermediate - Class 11 & 12
          </h3>

          <p className="mt-2 text-xs md:text-sm text-neutral-800 dark:text-neutral-300">
            Pragathi Junior College
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
