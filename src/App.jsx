import { Github, Linkedin, Quote, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().getTime());
    }, 1000); // updates every second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);
  return (
    <div className="bg-purple-400/20 min-h-screen flex items-center p-6 ">
      <main className="max-w-3xl sm:h-full w-full mx-auto outline-offset-4 outline-2 outline-gray-800  sm:flex sm:flex-row  flex-col mt-8 rounded-lg overflow-hidden bg-gray-100 text-gray-900">
        {/* Left Section */}
        <div className="sm:w-52 sm:h-auto h-18 bg-purple-400/80 relative border-r border-gray-700 flex sm:flex-col justify-between ">
          <div className="w-24 h-full sm:bg-purple-400/80 sm:outline outline-gray-800 flex relative">
            <figure className="bg-purple-400/80 w-28 aspect-square absolute right-0 translate-x-1/2 sm:translate-y-4 sm:bottom-auto translate-y-1/2 bottom-0 outline-2  outline-gray-800 outline-offset-4 rounded-full shadow-md">
              <img
                src="/me.jpg"
                alt="profile"
                className="object-cover w-28 aspect-square rounded-full absolute outline outline-gray-900"
              />
            </figure>
          </div>

          {/* Social icons */}
          <aside className="p-1 w-full flex items-center sm:gap-0 mt-auto sm:justify-evenly justify-end sm:border-t gap-4">
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
          </aside>
        </div>

        {/* Right Section */}
        <div className="bg-gray-100 sm:p-6 p-4 sm:rounded-b-none rounded-b-md sm:pt-5 pt-16 sm:rounded-r-md  outline sm:pl-18 flex flex-col border-l  border-gray-700 border">
          <small className="ml-auto rounded-sm mb-4 border border-gray-700 px-1.5 py-0.5 tracking-widest text-xs text-gray-600">
            Time:
            <span className="text-[10px] text-purple-700 ml-1">{time} ms</span>
          </small>

          <div className="border-b border-gray-700 pb-2 mb-6 ">
            <h2 className="text-3xl font-semibold mb-3 text-gray-900 ">
              Ndulue Christian
            </h2>
            <small className="tracking-[0.25em] uppercase border-b border-gray-700 inline-block mb-2 font-medium text-purple-800">
              Bio
            </small>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              <span className="inline-block mr-2">
                <Quote />
              </span>
              Hey there! I’m{" "}
              <span className="font-medium text-purple-800">
                Ndulue Christian
              </span>
              , a Building student at the{" "}
              <span className="font-semibold text-gray-900">
                University of Lagos (UNILAG)
              </span>
              . I’m deeply curious about how ideas become real — both in
              architecture and in technology. My passion lies in{" "}
              <span className="italic text-purple-800">
                coding, design, and building digital experiences
              </span>
              .
            </p>
          </div>

          {/* Hobbies and Dislikes */}
          <div className="flex gap-6">
            <ul>
              <h3 className="capitalize font-semibold text-gray-800 border-b border-gray-700 mb-1">
                Hobbies:
              </h3>
              <div className="flex gap-3 ml-3 *:text-sm capitalize  text-gray-700">
                <li>Drawing</li>
                <li>Coding</li>
                <li>Tennis</li>
              </div>
            </ul>

            <ul>
              <h3 className="capitalize font-semibold text-gray-800 border-b border-gray-700 mb-1">
                Dislike:
              </h3>
              <div className="flex gap-3 ml-3 *:text-sm capitalize text-gray-700">
                <li>Biology</li>
                <li>Linear</li>
                <li>Garri</li>
              </div>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
