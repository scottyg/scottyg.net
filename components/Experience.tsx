interface JobProps {
  current: boolean;
  company: string;
  position: string;
  years: string;
  url: string;
  fulltime: boolean;
}

const experience = [
  {
    "company": "Switch",
    "url": "https://www.switch.com/",
    "position": "Software Engineer III",
    "years": "2023",
    "current": true,
    "fulltime": true,
  },
  {
    "company": "Dreamlands",
    "url": "https://dreamlands.io/",
    "position": "Web3 Game Developer",
    "years": "2022 - 2023",
    "current": true,
    "fulltime": false,
  },
  {
    "company": "Design Studio",
    "url": "https://designstudio.com",
    "position": "Developer Manager / Full Stack Web Developer",
    "years": "2021 - 2023",
    "current": false,
    "fulltime": false,
  },
  {
    "company": "Rescue Agency",
    "url": "https://rescueagency.com",
    "position": "Full Stack Web Developer",
    "years": "2013 - 2016",
    "current": false,
    "fulltime": false,
  },
  {
    "company": "Freelance",
    "url": "#",
    "position": "Full Stack Web Developer",
    "years": "2003 - 2013 / 2016 - 2021",
    "current": false,
    "fulltime": false,
  },
];

export default function Experience() {
  return (
    <div class="w-full">
      <h2 class="text(2xl) my-8 dark:text-white font-light">Experience</h2>
      <div class="">
        <div class="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {experience.map((job: JobProps) => {
            let current = "display:none;";
            if (job.current) {
              current = "";
            }
            let target = "_blank";
            if (job.url == "#") {
              target = "";
            }
            return (
              <div class="group">
                <h3 class="text(lg) flex items-center">
                  <a
                    href={job.url}
                    target={target}
                    class="text-green-400 hover:text-green-600 hover:underline"
                  >
                    {job.company}
                  </a>
                  <span
                    class="bg-green-400 px-2 text-sm text-white rounded-full  ml-2"
                    style={current}
                  >
                    {job.fulltime &&
                      <span>Full Time</span>}
                    {!job.fulltime &&
                      <span>Part Time</span>}
                  </span>
                </h3>
                <h4 class="text(base gray-900) dark:text-white">
                  {job.position}
                </h4>
                <p class="text(sm gray-500)">{job.years}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
