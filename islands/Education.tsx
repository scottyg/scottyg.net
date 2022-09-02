/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface EducationProps {
  education: Array<SchoolProps>;
}
interface SchoolProps {
  school: string;
  degree: string;
  year: string;
}

export default function Education(props: EducationProps) {
  return (
    <div class={tw`w-full`}>
      <h2 class={tw`text(2xl md:4xl) mb-4`}>Education</h2>

      <div class={tw`rounded-lg bg-white shadow-lg p-4`}>
        <div class={tw`gap-4 flex flex-col`}>
          {props.education.map((school: SchoolProps) => {
            return (
              <div>
                <h3 class={tw`text(lg) flex items-center`}>
                  {school.school}
                </h3>
                <p class={tw`text(base)`}>{school.degree}</p>
                <p class={tw`text(sm)`}>{school.year}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
