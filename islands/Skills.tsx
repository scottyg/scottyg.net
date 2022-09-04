/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface SkillsProps {
  skills: Array<SkillProps>;
  skills2: Array<SkillProps>;
  skills3: Array<SkillProps>;
}
interface SkillProps {
  rating: number;
  title: string;
}

export default function Skills(props: SkillsProps) {
  return (
    <div class={tw`w-full col-span-2`}>
      <h2 class={tw`text(2xl md:4xl md:left) my-4`}>Skills</h2>
      <div
        class={tw`rounded-lg bg-white shadow-lg p-4 flex flex-col gap-2 md:pb-9`}
      >
        <div class={tw`grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4`}>
          <div class={tw`flex flex-col gap-2`}>
          {props.skills.map((skill: SkillProps) => {
            const rating = "width: " + skill.rating + "%";
            return (
              <div class={tw``}>
                <div class={tw`w-full bg-gray-300`}>
                  <div
                    style={rating}
                    class={tw`px-2 py-1 bg-purple-700 text(white sm`}
                  >
                    {skill.title}
                  </div>
                </div>
              </div>
            );
          })} 
          </div>
          <div class={tw`flex flex-col gap-2`}>
          {props.skills3.map((skill: SkillProps) => {
            const rating = "width: " + skill.rating + "%";
            return (
              <div class={tw``}>
                <div class={tw`w-full bg-gray-300`}>
                  <div
                    style={rating}
                    class={tw`px-2 py-1 bg-blue-400 text(white sm`}
                  >
                    {skill.title}
                  </div>
                </div>
              </div>
            );
          })}
          {props.skills2.map((skill: SkillProps) => {
            const rating = "width: " + skill.rating + "%";
            return (
              <div class={tw``}>
                <div class={tw`w-full bg-gray-300`}>
                  <div
                    style={rating}
                    class={tw`px-2 py-1 bg-green-400 text(white sm`}
                  >
                    {skill.title}
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
}
