/* Components */
import HomeHero from "../components/HomeHero.tsx";
import BlogArchive from "../components/BlogArchive.tsx";

export default function Home() {
  return (
    <div>
      <div class="container mx-auto px-4">
        <HomeHero />
        {/* <BlogArchive /> */}
      </div>
    </div>
  );
}
