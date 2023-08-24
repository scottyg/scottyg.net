/* Components */
import Navigation from "../components/Navigation.tsx";
import AboutHero from "../components/AboutHero.tsx";
import Experience from "../components/Experience.tsx";
import Skills from "../components/Skills.tsx";
import Clients from "../components/Clients.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  function createMarkup() {
    return {
      __html: `
    // a {
    //   --tw-text-opacity: 1;
    //   color: #6d28d9;
    //   color: rgba(109,40,217,var(--tw-text-opacity));
    // }`,
    };
  }
  return (
    <div>
      <AboutHero />
      <Experience />
      <Clients />
      <Skills />
      <style dangerouslySetInnerHTML={createMarkup()}></style>
    </div>
  );
}
