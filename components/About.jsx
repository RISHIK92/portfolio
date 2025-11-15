import SplashCursor from "./SplashCursor";

export default function About() {
  const tools = [
    { name: "vscode", icon: "/assets/vscode.png" },
    { name: "firebase", icon: "/assets/firebase.png" },
    { name: "mongodb", icon: "/assets/mongodb.png" },
    { name: "figma", icon: "/assets/figma.png" },
    { name: "git", icon: "/assets/git.png" },
  ];

  const data = [
    {
      name: "Education",
      icon1: "/assets/edu-icon.png",
      icon2: "/assets/edu-icon-dark.png",
      description: "B.Tech in Computer Science",
    },
    {
      name: "Experience",
      icon1: "/assets/edu-icon.png",
      icon2: "/assets/edu-icon-dark.png",
      description: "Intern at Ajs Innovations",
    },
  ];
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <SplashCursor />
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="max-w-max mx-auto relative">
          <img
            src="/assets/profile-img.jpeg"
            alt=""
            className="w-64 sm:w-80 rounded-3xl max-w-none"
          />

          <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
            {/* Circular Text */}
            <div className="relative w-full h-full flex items-center justify-center animate-spin_slow">
              <svg
                className="w-full h-full"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <path
                    id="circleText"
                    d="M150,150
                    m-120,0
                    a120,120 0 1,1 240,0
                    a120,120 0 1,1 -240,0"
                  />
                </defs>

                <text fill="black" fontSize="20" letterSpacing="4">
                  <textPath href="#circleText" startOffset="0%">
                    DEVELOPER • DESIGNER • BUILDER • THINKER • CREATOR •
                  </textPath>
                </text>
              </svg>
            </div>

            <p className="absolute text-4xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              🧑🏻‍💻
            </p>
          </div>
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I’m a B.Tech sophomore at NST × Rishihood University with a passion
            for building scalable systems and exploring untapped areas of
            software. I have co-created Ripplex, a framework-agnostic
            experimental state management library, and delivered
            production-grade full-stack applications for clients using Next.js,
            Firebase, and cloud platforms like AWS, GCP, and DigitalOcean. With
            experience in Go, gRPC, Docker and CI/CD pipelines, I thrive on
            solving complex backend challenges and aim to seamlessly integrate
            AI systems into modern web infrastructure.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {data.map((data) => (
              <li
                key={data.name}
                className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50"
              >
                <img src={data.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                <img
                  src={data.icon2}
                  alt=""
                  className="w-7 mt-3 hidden dark:block"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {data.name}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {data.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
