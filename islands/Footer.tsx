import { ContactButton } from "../components/ContactButton.tsx";

interface FooterProps {
  contacts: Array<ContactProps>;
  footer: Record<string, string>;
}
interface ContactProps {
  title: string;
  url: string;
}

interface FooterContentProps {
  copy: string;
  powered_by: string;
  cta: string;
}

export default function Footer(props: FooterProps) {
  return (
    <div>
      <div class="my-24">
        <h2 class="text(2xl md:4xl center)">{props.footer.cta}</h2>
        <div class="flex align-center mt-4 justify-center">
          {props.contacts.map((contact: ContactProps) => {
            return (
              <ContactButton href={contact.url} target="_blank" title={contact.title}/>
            );
          })}
        </div>
      </div>
      <div class="flex justify-between py-4">
        <div>
          {props.footer.copy}
        </div>
        <div class="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 36 36"
            class="w-6 h-6"
          >
            <ellipse fill="#99AAB5" cx="18" cy="26" rx="18" ry="10" />
            <ellipse fill="#CCD6DD" cx="18" cy="24" rx="18" ry="10" />
            <path
              fill="#F5F8FA"
              d="M18 31C3.042 31 1 16 1 12h34c0 2-1.958 19-17 19z"
            />
            <path
              fill="#CCD6DD"
              d="M34.385 9.644c2.442-10.123-9.781-7.706-12.204-5.799-1.34-.148-2.736-.234-4.181-.234-9.389 0-17 3.229-17 8.444C1 17.271 8.611 21.5 18 21.5s17-4.229 17-9.444c0-.863-.226-1.664-.615-2.412zm-2.503-2.692c-1.357-.938-3.102-1.694-5.121-2.25 1.875-.576 4.551-.309 5.121 2.25z"
            />
            <ellipse fill="#8A4B38" cx="18" cy="13" rx="15" ry="7" />
            <path
              fill="#D99E82"
              d="M20 17c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.739-1.109.9-2.246.478-3.377-.461-1.236-1.438-1.996-1.731-2.077-.553 0-.958-.443-.958-.996 0-.552.491-.995 1.043-.995.997 0 2.395 1.153 3.183 2.625 1.034 1.933.91 4.039-.351 5.929-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.196-.451.294-.707.294zm-6-2c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.727-1.091.893-2.083.494-2.947-.444-.961-1.431-1.469-1.684-1.499-.552 0-.989-.447-.989-1 0-.552.458-1 1.011-1 .997 0 2.585.974 3.36 2.423.481.899 1.052 2.761-.528 5.131-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.197-.451.295-.707.295z"
            />
          </svg>
          {props.footer.powered_by}
        </div>
      </div>
    </div>
  );
}
