import NavigationLinks from "./NavigationLinks.tsx";

export default function Navigation() {
  return (
    <div>
      <nav class="border-gray-200 my-4">
        <div class="w-full mx-auto">
          <div class="flex flex-wrap items-center justify-between">
            <a href="/" class="flex items-center group">
              <img
                src="/ScottGordon.png"
                alt="Scotty G"
                width="260"
                height="260"
                class="h-6 w-6 mr-2"
              />
              <span class="self-center text-2xl font-light whitespace-nowrap group-hover:underline">
                Scotty G
              </span>
            </a>
            <div class="flex md:hidden md:order-2">
              <button
                data-collapse-toggle="mobile-menu-3"
                type="button"
                class="md:hidden text-gray-400 hover:text-gray-900 rounded-lg inline-flex items-center justify-center"
                aria-controls="mobile-menu-3"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  >
                  </path>
                </svg>
                <svg
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  >
                  </path>
                </svg>
              </button>
            </div>
            <div
              class="hidden md:flex justify-between items-end w-full md:w-auto md:order-1"
              id="mobile-menu-3"
            >
              <ul class="flex-col md:flex-row flex items-center gap-4 mt-4 md:mt-0 md:text-base md:font-medium">
                <NavigationLinks />
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js">
      </script>
    </div>
  );
}
