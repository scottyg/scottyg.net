import Image from "next/image";

export default function AboutHero() {
  return (
    <div>
      <div className="pt-12 md:pb-12 gap-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
        <div className="flex justify-center md:hidden">
          <Image
            src="/ScottGordon.png"
            alt="Scott Gordon"
            width={260}
            height={260}
            priority
          />
        </div>
        <div>
          <h1 className="text-2xl pb-4 dark:text-white font-light">
            Hello. I&apos;m Scott Gordon,
          </h1>
          <p className="dark:text-white">
            an experienced Software Engineer with over 20 years in the web
            development industry. Proficient in a diverse range of technologies
            with a proven track record as a self-starter and rapid learner.
            Continually seeking new challenges and professional growth
            opportunities.
          </p>
        </div>
        <div className="hidden md:flex justify-center">
          <Image
            src="/ScottGordon.png"
            alt="Scott Gordon"
            width={260}
            height={260}
            priority
          />
        </div>
        <div>
          <h2 className="text-2xl mb-4 dark:text-white font-light">Projects</h2>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="https://forcemipsum.com"
                className="text-blue-500 hover:text-blue-700 hover:underline"
              >
                Forcem Ipsum
              </a>
              <p className="dark:text-white">The Star Wars text generator</p>
            </li>
            <li>
              <a
                href="https://http.gives"
                className="text-blue-500 hover:text-blue-700 hover:underline"
              >
                http.gives
              </a>
              <p className="dark:text-white">HTTP status code tester</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
