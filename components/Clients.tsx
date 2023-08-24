interface ProjectProps {
  title: string;
  description: string;
  url: string;
}

const projects = [
  {
    "title": "American Red Cross",
    "description":
      "Red Cross volunteers and staff work to deliver vital services - from providing relief and support to those in crisis, to helping you be prepared to respond in emergencies. Built multiple components of the website using modern web techniques.",
    "url": "https://redcross.org/",
  },
  {
    "title": "Measles & Rubella Partnership",
    "description":
      "The Measles & Rubella Partnership (M&RP) is led by the American Red Cross, the Bill & Melinda Gates Foundation, Gavi the Vaccine Alliance, the United Nations Foundation, the U.S. Centers for Disease Control and Prevention, UNICEF and the World Health Organization. Built website using <a href='https://wordpress.org/' target='_blank' class='text-red-400 hover:text-red-600 hover:underline'>Wordpress</a>",
    "url": "https://measlesrubellapartnership.org/",
  },
  {
    "title": "Syndified™",
    "description":
      "Syndified™ software helps brands facilitate commerce, faster, by syndicating content directly to the websites of their dealers. Manage team that creates Saas product with regular sprints for new features. Syndified™ is built with <a href='https://laravel.com' target='_blank' class='text-red-400 hover:text-red-600 hover:underline'>Laravel</a>, <a href='https://tailwindcss.com' target='_blank' class='text-red-400 hover:text-red-600 hover:underline'>Tailwind</a> and <a href='https://vuejs.org/' target='_blank' class='text-red-400 hover:text-red-600 hover:underline'>Vue</a>.",
    "url": "https://syndified.com/",
  },
  {
    "title": "Olympic Hot Tub",
    "description":
      "Olympic Hot Tub is a hot tub retailer in the Seattle area. Built website using <a href='https://wordpress.org/' target='_blank' class='text-red-400 hover:text-red-600 hover:underline'>Wordpress</a>.",
    "url": "https://olympichottub.com/",
  },
  {
    "title": "This Free Life",
    "description":
      "A national anti-tobacco campaign from <a href='https://www.hhs.gov/' target='_blank' class='text-red-400 hover:text-red-600 hover:underline'>HHS</a>. Built site using <a href='https://www.drupal.org/' target='_blank' class='text-red-400 hover:text-red-600 hover:underline'>Drupal</a>.",
    "url": "https://thisfreelife.betobaccofree.hhs.gov/",
  },
  {
    "title": "Rev Your Bev",
    "description":
      "Rev Your Bev is the Virginia Foundation for Healthy Youth’s campaign to encourage Virginians to drink more water. Built custom map component as well as multiple custom quizes using modern web techniques.",
    "url": "https://www.revyourbev.com/",
  },
];

export default function Clients() {
  return (
    <div class="w-full">
      <h2 class="text(2xl md:left) my-8 dark:text-white">Client Work</h2>
      <div class="gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project: ProjectProps) => {
          function createMarkup() {
            return { __html: project.description };
          }
          return (
            <div class="group">
              <h3 class="text-lg">
                <a
                  href={project.url}
                  target="_blank"
                  class="text-red-400 hover:text-red-600 hover:underline"
                >
                  {project.title}
                </a>
              </h3>
              <div
                class="text-sm dark:text-white"
                dangerouslySetInnerHTML={createMarkup()}
              >
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
