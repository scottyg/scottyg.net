/* Components */
import Navigation from "../components/Navigation.tsx";
import HomeHero from "../components/HomeHero.tsx";
import BlogArchive from "../components/BlogArchive.tsx";
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
      <div class="container mx-auto px-4">
        <HomeHero />
        {/* <BlogArchive /> */}
      </div>
      <style dangerouslySetInnerHTML={createMarkup()}></style>
    </div>
  );
}
