"use client";
import { Layers, Smartphone, Figma, Truck, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function GlowingEffectDemo() {
  return (
    <>
      <div className="mx-12 mt-24 font-ovo" id="services">
        <h2 className="text-3xl md:text-5xl font-ovo text-black dark:text-white">
          My Services
        </h2>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300 max-w-md text-sm md:text-base">
          From full-stack development to AI automation, here’s what I can help
          you build.
        </p>
      </div>

      <ul className="grid grid-cols-1 mx-12 mb-28 mt-14 gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[34rem] xl:grid-rows-2 font-ovo">
        {/* Full Stack Websites */}
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Layers className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Full-Stack Websites"
          description={
            <>
              <p className="mb-3">
                <strong>About: </strong>I build dynamic, high-performance
                full-stack websites — clean UI, strong backend architecture,
                smooth interactions, and optimized databases.
              </p>

              <p>
                <strong>Technologies: </strong>
                Next.js, Node.js, Express, PostgreSQL, Prisma, JWT, Tailwind
                CSS, Redis, LLM Models.
              </p>
            </>
          }
        />

        {/* AI Chatbots */}
        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={
            <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="AI Chatbots & Agents"
          description={
            <>
              <p className="mb-2">
                <strong>About: </strong>I develop intelligent AI Agents that
                automate support, onboarding, and domain-specific workflows —
                trained on your data and available 24/7.
              </p>

              <p>
                <strong>Technologies: </strong>
                PGVector, Vector DBs, LangChain, RAG, LLM Models, Next.js,
                Node.js, WebSockets.
              </p>
            </>
          }
        />

        {/* Android Application */}
        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={
            <Smartphone className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="Android / IOS Applications"
          description={
            <>
              <p className="mb-3">
                <strong>About: </strong>I build smooth, high-performance Android
                apps with React Native — modern UI, fluid interactions, and a
                native-like experience.
              </p>

              <p>
                <strong>Technologies: </strong>
                React Native, Node.js, MongoDB, JWT, Cloud Storage, LLM Models.
              </p>
            </>
          }
        />

        {/* E-commerce Platforms */}
        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Truck className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="E-commerce Platforms"
          description={
            <>
              <p className="mb-3">
                <strong>About: </strong>
                End-to-end e-commerce systems — product flows, cart & checkout,
                admin dashboards, inventory tools, payments, and full
                deployment.
              </p>

              <p>
                <strong>Technologies: </strong>
                Next.js, Prisma, PostgreSQL, Razorpay/Stripe, Node.js, JWT,
                Redis, Cloud Hosting.
              </p>
            </>
          }
        />

        {/* Frontend Design Websites */}
        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Figma className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Frontend Design Websites"
          description={
            <>
              <p className="mb-3">
                <strong>About: </strong>
                Aesthetic, typography-driven websites for branding, advertising,
                and portfolios. Crisp layouts, strong visuals, and clean
                storytelling.
              </p>

              <p>
                <strong>Technologies: </strong>
                Next.js, Tailwind CSS, Framer Motion, ShadCN UI, Design Systems.
              </p>
            </>
          }
        />
      </ul>
    </>
  );
}

const GridItem = ({ area, icon, title, description }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
