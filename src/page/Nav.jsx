import { Github, Linkedin, Quote, Twitter } from "lucide-react";

export default function Nav() {
  return (
    <nav
      data-testid="test-profile-card"
      className=" sm:h-auto h-18 bg-purple-400/80 relative sm:border-r border-gray-700 flex sm:flex-col justify-between "
    >
      <div className="sm:w-26 h-full sm:bg-purple-400/80 sm:outline outline-gray-800 flex relative">
        <figure className="bg-purple-400/80 w-28 aspect-square absolute sm:right-0 sm:translate-x-1/2 sm:translate-y-4 sm:bottom-auto translate-x-[100%] -right-[1rem] translate-y-1/2 bottom-0 outline-2  outline-gray-800 outline-offset-4 rounded-full shadow-md">
          <img
            data-testid="test-user-avatar"
            src="/me.jpg"
            alt="profile"
            className="object-cover w-28 aspect-square rounded-full absolute outline outline-gray-900"
          />
        </figure>
      </div>

      {/* Social icons */}
      <aside className="flex flex-col-reverse mx-1 items-end gap-3 sm:gap-0 sm:inline ">
 
        <ul className="flex sm:flex-col m-1  sm:gap-1 items-center gap-3 text-sm  font-semibold text-gray-700">
          <a href="/contact-us" className=" hover:text-purple-950 hover:underline">
            <li>Contact Me</li>
          </a>
          <a href="/about" className=" hover:text-purple-950 hover:underline">
            <li>About Me</li>
          </a>
        </ul>

        <div className="p-1  flex  items-center sm:gap-0 mt-auto sm:justify-evenly justify-end sm:border-t gap-4">
          <a
            href="https://x.com/Ndulue47"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={18} className="" />
          </a>
          <a
            href="https://www.linkedin.com/in/christian-ndulue-9b95a9228/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={18} className="" />
          </a>
          <a
            href="https://github.com/Ndulue098"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} className="" />
          </a>
        </div>
      </aside>
    </nav>
  );
}
