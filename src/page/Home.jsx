import { Github, Linkedin, Quote, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState(new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().getTime());
    }, 1000); // updates every second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);


  return (
        <>
          <small className="ml-auto rounded-sm mb-4 border border-gray-700 px-1.5 py-0.5 tracking-widest text-xs text-gray-600">
            Time:
            <span
              data-testid="test-user-time"
              className="text-[10px] text-purple-700 ml-1"
            >
              {time} ms
            </span>
          </small>

          <div className="border-b border-gray-700 pb-2 mb-6 ">
            <h2
              data-testid="test-user-name"
              className="text-3xl font-semibold mb-3 text-gray-900 "
            >
              Ndulue Christian
            </h2>
            <small
              data-testid="test-user-bio"
              className="tracking-[0.25em] uppercase border-b border-gray-700 inline-block mb-2 font-medium text-purple-800"
            >
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
          <div className="flex gap-6 ">
            <div>
              <h3 className="capitalize  font-semibold text-gray-800 border-b border-gray-700 mb-1">
                Hobbies:
              </h3>
              <ul
                data-testid="test-user-hobbies"
                className="flex flex-wrap gap-3 ml-3 *:text-sm capitalize  text-gray-700"
              >
                <li>Drawing</li>
                <li>Coding</li>
                <li>Tennis</li>
              </ul>
            </div>

            <div>
              <h3 className="capitalize font-semibold  text-gray-800 border-b border-gray-700 mb-1">
                Dislike:
              </h3>
              <ul
                data-testid="test-user-dislikes"
                className="flex flex-wrap gap-3 ml-3 *:text-sm capitalize text-gray-700"
              >
                <li>Biology</li>
                <li>Linear</li>
                <li>Garri</li>
              </ul>
            </div>
          </div>
        </>
  );
}
