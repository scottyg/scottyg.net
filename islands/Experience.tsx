/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

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
    <div class={tw`w-full`}>
      <h2 class={tw`text(2xl md:4xl) my-4`}>Experience</h2>
      <div class={tw`rounded-lg bg-white shadow-lg p-4`}>
        <div class={tw`gap-4 flex flex-col`}>
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
                <h3 class={tw`text(lg) flex items-center`}>
                  <a
                    href={job.url}
                    target={target}
                    class={tw`text-purple-700 hover:text-purple-900`}
                  >
                    {job.company}
                  </a>
                  <span
                    class={tw`bg-purple-700 px-2 text-sm text-white rounded-full  ml-2`}
                    style={current}
                  >
                    Current
                    {job.fulltime &&
                      <span> - Full Time</span>}
                    {!job.fulltime &&
                      <span> - Part Time</span>}
                  </span>
                </h3>
                <h4 class={tw`text(base)`}>{job.position}</h4>
                <p class={tw`text(sm)`}>{job.years}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
