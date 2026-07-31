import NavigationLinks from "./NavigationLinks";
import CopyrightYear from "./CopyrightYear";

export default function Footer() {
  return (
    <div>
      <div className="my-24"></div>
      <div className="flex justify-between items-center flex-col md:flex-row my-8 gap-4">
        <NavigationLinks />
        <div className="dark:text-white font-light">
          Scotty G © <CopyrightYear buildYear={new Date().getFullYear()} />
        </div>
      </div>
    </div>
  );
}
