import NavigationLinks from "./NavigationLinks.tsx";

const footer = {
  "copy": "© " + new Date().getFullYear(),
};

export default function Footer() {
  return (
    <div>
      <div class="my-24">
      </div>
      <div class="flex justify-between items-center  flex-col md:flex-row my-8 gap-4">
        <ul class="flex align-center justify-center gap-4">
          <NavigationLinks />
        </ul>
        <div class="dark:text-white font-light">
          Scotty G {footer.copy}
        </div>
      </div>
    </div>
  );
}
