import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { Cover } from "./ui/cover";

export default function Header() {
  return (
    <div className="relative w-full h-screen">
      <MaskContainer
        revealText={
          <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <img
              src="/assets/profile-img.jpeg"
              alt=""
              className="rounded-full w-32 invisible"
            />
            <h3 className="flex items-end gap-2 text-xl md:text-2xl text-white mb-3 font-Ovo invisible">
              Hlo! I&apos;m <Cover>Rishik</Cover>
              <img
                src="/assets/hand-icon.png"
                alt=""
                className="w-6 mb-1 invisible"
              />
            </h3>

            <h1 className="text-3xl text-black dark:text-white sm:text-6xl lg:text-[66px] font-Ovo">
              Making sense of problems through creation
            </h1>

            <p className="max-w-2xl mx-auto font-Ovo invisible">
              Curiosity leads the way as I build, break, and rebuild — growing
              through mistakes and every small win.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 invisible">
              <div className="px-10 py-2.5 border rounded-full">my resume</div>
            </div>
          </div>
        }
        className="absolute inset-0 w-full h-full"
      >
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
          <img
            src="/assets/profile-img.jpeg"
            alt=""
            className="rounded-full w-32 invisible"
          />
          <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 text-white font-Ovo invisible">
            Hlo! I&apos;m <Cover>Rishik</Cover>
            <img src="/assets/hand-icon.png" alt="" className="w-6 mb-1" />
          </h3>

          <h1 className="text-3xl text-white dark:text-slate-400 sm:text-6xl lg:text-[62px] mt-20 font-Ovo">
            Still chasing the kid who wanted to build robots.
          </h1>

          <p className="max-w-2xl mx-auto font-Ovo invisible">
            Curiosity leads the way as I build, break, and rebuild — growing
            through mistakes and every small win.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 invisible">
            <div className="px-10 py-2.5 border rounded-full">my resume</div>
          </div>
        </div>
      </MaskContainer>

      <div className="absolute inset-0 w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pointer-events-none">
        <img
          src="/assets/profile-img.jpeg"
          alt=""
          className="rounded-full w-32 pointer-events-auto"
        />
        <h3 className="flex items-end gap-2 text-md md:text-2xl mb-3 font-Ovo pointer-events-auto">
          Hlo! I&apos;m <Cover>Rishik</Cover>
          <img src="/assets/hand-icon.png" alt="" className="w-6 mb-1" />
        </h3>

        <div className="text-3xl sm:text-6xl lg:text-[66px] h-[200px]"></div>

        <p className="max-w-2xl mx-auto font-Ovo pointer-events-auto">
          Curiosity leads the way as I build, break, and rebuild — growing
          through mistakes and every small win.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 pointer-events-auto">
          <a
            href="/rishik-resume.pdf"
            download
            className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white"
          >
            my resume{" "}
            <img
              src="/assets/download-icon.png"
              alt=""
              className="w-4 dark:invert"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
