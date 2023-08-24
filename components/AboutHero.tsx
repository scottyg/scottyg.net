export default function AboutHero() {
  return (
    <div>
      <div class="pt-12 md:pb-12 gap-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
        <div class="flex justify-center md:hidden">
          <img
            src="/ScottGordon.png"
            alt="Scott Gordon"
            width="260"
            height="260"
          />
        </div>
        <div>
          <h1 class="text(2xl md:3xl) pb-4">Hello. I'm Scott Gordon,</h1>
          <p>
            an experienced Software Engineer with over 20 years in the web
            development industry. Proficient in a diverse range of technologies
            with a proven track record as a self-starter and rapid learner.
            Continually seeking new challenges and professional growth
            opportunities.
          </p>
        </div>
        <div class="hidden md:flex justify-center">
          <img
            src="/ScottGordon.png"
            alt="Scott Gordon"
            width="260"
            height="260"
          />
        </div>
        <div>
          <h2 class="text(2xl) mb-4">
            Projects
          </h2>
          <ul class="flex flex-col gap-4">
            <li>
              <a
                href="https://forcemipsum.com"
                class="text-blue-500 hover:text-blue-700 hover:underline"
              >
                Forcem Ipsum
              </a>
              <p>The Star Wars text generator</p>
            </li>
            <li>
              <a
                href="https://http.gives"
                class="text-blue-500 hover:text-blue-700 hover:underline"
              >
                http.gives
              </a>
              <p>HTTP status code tester</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
