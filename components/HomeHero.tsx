import Image from "next/image";

export default function HomeHero() {
  return (
    <div>
      <div className="py-12 flex gap-6 items-center justify-center flex-col">
        <div>
          <Image
            src="/ScottGordon.png"
            alt="Scott Gordon"
            width={260}
            height={260}
            priority
          />
        </div>
        <div>
          <h1 className="text-2xl text-center dark:text-white font-light">
            Hello. I&apos;m Scott Gordon,
            <br />a Software Engineer.
          </h1>
        </div>
      </div>
    </div>
  );
}
