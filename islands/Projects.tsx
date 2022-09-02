/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface ProjectsProps {
  projects: Array<ProjectProps>;
}
interface ProjectProps {
  title: string;
  description: string;
  url: string;
}

export default function Projects(props: ProjectsProps) {
  return (
    <div class={tw`w-full`}>
      <h2 class={tw`text(2xl md:4xl md:left) my-4`}>Projects</h2>
      <div class={tw`gap-4 grid grid-cols-1 md:grid-cols-3`}>
        {props.projects.map((project: ProjectProps) => {
          function createMarkup() {
            return { __html: project.description };
          }
          return (
            <div class={tw`rounded-lg bg-white shadow-lg p-4`}>
              <h3 class={tw`text-2xl`}>
                <a
                  href={project.url}
                  target="_blank"
                  class={tw`text-purple-700 hover:text-purple-900`}
                >
                  {project.title}
                </a>
              </h3>
              <div dangerouslySetInnerHTML={createMarkup()}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
