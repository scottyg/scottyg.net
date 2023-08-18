interface ExperienceProps {
  experience: Array<JobProps>;
}
interface JobProps {
  current: boolean;
  company: string;
  position: string;
  years: string;
  url: string;
  fulltime: boolean;
}

export default function Experience(props: ExperienceProps) {
  return (
    <div class="w-full">
      <h2 class="text(2xl md:4xl) my-4">Experience</h2>
      <div class="rounded-lg bg-white shadow-lg p-4">
        <div class="gap-4 flex flex-col">
          {props.experience.map((job: JobProps) => {
            let current = "display:none;";
            if (job.current) {
              current = "";
            }
            let target = "_blank";
            if (job.url == "#") {
              target = "";
            }
            return (
              <div>
                <h3 class="text(lg) flex items-center">
                  <a
                    href={job.url}
                    target={target}
                    class="text-purple-700 hover:text-purple-900"
                  >
                    {job.company}
                  </a>
                  <span
                    class="bg-purple-700 px-2 text-sm text-white rounded-full  ml-2"
                    style={current}
                  >
                    {job.fulltime &&
                      <span>Full Time</span>}
                    {!job.fulltime &&
                      <span>Part Time</span>}
                  </span>
                </h3>
                <h4 class="text(base)">{job.position}</h4>
                <p class="text(sm)">{job.years}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
