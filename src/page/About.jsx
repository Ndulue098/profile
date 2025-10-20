import { NotebookPen } from "lucide-react";

export default function About() {
    return  <section className="h-[26rem]  overflow-scroll">
      {/* Header */}
      <small className="mb-3 inline-block ">
            <a href="/" className="mr-1 font-semibold text-gray-600 capitalize">home</a>
             &gt; <span className="font-semibold capitalize text-purple-800">About me</span>
        </small>
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2 ">About Me</h2>
        <p className="text-gray-600 inline-block mb-1">
          Get to know who I am, what drives me, and what I’m building toward.
        </p>
      </div>

      {/* Personal Info */}
      <div className="mb-3 pb-2">
        <h3 className="text-md font-semibold text-purple-800 ">Bio</h3>
         <p className="text-lg text-gray-700 leading-relaxed space-y-3 ml-1">
          Hey, I’m <span className="font-semibold text-purple-700">Ndulue Christian</span> — 
          proudly from <span className="font-medium">Anambra State, Nigeria</span>, 
          and currently living in the ever-busy city of <span className="font-medium">Lagos</span>.  
          I’m a student of <span className="font-medium">Biology</span> at the 
          <span className="font-medium"> University of Lagos (Unilag)</span>, where I’m learning to
          understand life from both a scientific and creative perspective.
        </p>

        <p className="text-gray-700 leading-relaxed ml-1">
          Though I study biology, my heart has always leaned toward technology and creation.  
          I love building things that make life easier and more interesting — from small code projects 
          to digital concepts that reflect my imagination. For me, coding is not just a skill; it’s 
          a way to bring thoughts to life.
        </p>
      </div>

      {/* Goals */}
      <div className="mb-3">
        <h3 className="text-md font-semibold text-purple-800 ">My Goals</h3>
        <ul className="list-disc ml-1.5 list-inside  text-gray-700">
          <li>Collaborate with great minds to build something truly useful.</li>
          <li>Grow my technical and creative skills through teamwork and experience.</li>
          <li>Secure a fulfilling tech job where I can make an impact.</li>
        </ul>
      </div>

      {/* Areas for Improvement */}
      <div className="mb-3">
        <h3 className="text-md font-semibold text-purple-800 ">Areas of Log Confidence</h3>
        <p className="text-gray-700 leading-relaxed ml-1">
          I sometimes get carried away when designing UI — I enjoy it so much that I lose track
          of time! I’m learning to balance creativity with focus and structure.
        </p>
      </div>

      {/* Note to Future Self */}
      <div className="bg-purple-100 border mb-3 border-purple-200 rounded-md p-2">
        <h3 className="text-lg font-semibold text--700 mb-1 flex gap-5 items-center">Note to My Future Self <NotebookPen size={18}/></h3>
        <p className=" leading-relaxed italic">
          If you’re reading this, I hope you’ve achieved that dream job, become 10× better, 
          and most importantly, stayed close to God while building amazing things.
        </p>
      </div>

      {/* Fun Extra */}
      <div className="flex items-center gap-2 text-gray-600">
        <span className="text-md font-semibold text-purple-800">Extra Thoughts:</span>
        <span className="italic ">&lt;Loading.../&gt;</span>
      </div>
    </section>
}

