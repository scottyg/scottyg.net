interface JobProps {
  current: boolean;
  company: string;
  position: string;
  years: string;
  url: string;
  fulltime: boolean;
}

const experience: JobProps[] = [
  {
    company: "Switch",
    url: "https://www.switch.com/",
    position: "Software Engineer III",
    years: "2023",
    current: true,
    fulltime: true,
  },
  {
    company: "Dreamlands",
    url: "https://dreamlands.io/",
    position: "Web3 Game Developer",
    years: "2022 - 2023",
    current: true,
    fulltime: false,
  },
  {
    company: "Design Studio",
    url: "https://designstudio.com",
    position: "Developer Manager / Full Stack Web Developer",
    years: "2021 - 2023",
    current: false,
    fulltime: false,
  },
  {
    company: "Rescue Agency",
    url: "https://rescueagency.com",
    position: "Full Stack Web Developer",
    years: "2013 - 2016",
    current: false,
    fulltime: false,
  },
  {
    company: "Freelance",
    url: "#",
    position: "Full Stack Web Developer",
    years: "2003 - 2013 / 2016 - 2021",
    current: false,
    fulltime: false,
  },
];

export default function Experience() {
  return (
    <div className="w-full">
      <h2 className="text-2xl my-8 dark:text-white font-light">Experience</h2>
      <div>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {experience.map((job) => {
            const isExternal = job.url !== "#";
            return (
              <div className="group" key={job.company}>
                <h3 className="text-lg flex items-center">
                  <a
                    href={job.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="text-green-400 hover:text-green-600 hover:underline"
                  >
                    {job.company}
                  </a>
                  {job.current && (
                    <span className="bg-green-400 px-2 text-sm text-white dark:text-gray-900 rounded-full ml-2">
                      {job.fulltime ? "Full Time" : "Part Time"}
                    </span>
                  )}
                </h3>
                <h4 className="text-base text-gray-900 dark:text-white">
                  {job.position}
                </h4>
                <p className="text-sm text-gray-500">{job.years}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
