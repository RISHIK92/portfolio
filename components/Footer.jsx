import Image from "next/image";
export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="text-center">
        <div className="text-4xl">Rishik</div>
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src="/assets/mail_icon.png"
            alt="Email Icon"
            width={20}
            height={20}
            className="w-5 dark:hidden"
          />
          <Image
            src="/assets/mail_icon_dark.png"
            alt="Email Icon"
            width={20}
            height={20}
            className="w-5 hidden dark:block"
          />

          <a href="mailto:rishik3555@gmail.com">rishik3555@gmail.com</a>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/rishik92">
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rishik-chowdary-b8b430299/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://x.com/prebuiltui">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
