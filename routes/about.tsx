/* Components */
import AboutHero from "../components/AboutHero.tsx";
import Experience from "../components/Experience.tsx";
import Skills from "../components/Skills.tsx";
import Clients from "../components/Clients.tsx";

export default function Home() {
  return (
    <div>
      <AboutHero />
      <Experience />
      <Clients />
      <Skills />
    </div>
  );
}
