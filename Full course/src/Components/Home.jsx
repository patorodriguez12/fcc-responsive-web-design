import { Link } from "react-router";
import { chapters } from "../../data/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          Responsive Web Design Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              to={`/chapter/${chapter.id}`}
              className="bg-gray-700 hover:bg-gray-600 transition duration-300 p-6 rounded-xl shadow-md ring-1 ring-gray-600 hover:ring-blue-400 flex flex-col items-center"
            >
              <h2 className="text-xl font-semibold mb-2 text-white">
                {chapter.name}
              </h2>
              <p className="text-sm text-gray-300">View demo projects</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-800 p-8 rounded-xl shadow-md ring-1 ring-gray-700 text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-400">About</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            This is a personal project developed by{" "}
            <a
              href="https://github.com/patorodriguez12"
              className="text-blue-400 hover:text-blue-300 underline transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hugo Patricio Rodriguez
            </a>
            , showcasing demos of all the mini projects created during the{" "}
            <a
              href="https://www.freecodecamp.org/learn/2022/responsive-web-design/"
              className="text-blue-400 hover:text-blue-300 underline transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Responsive Web Design
            </a>{" "}
            course by{" "}
            <a
              href="https://www.freecodecamp.org/"
              className="text-blue-400 hover:text-blue-300 underline transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              freeCodeCamp
            </a>
            .<hr />
            Soon I will add explanations to each project
          </p>
        </div>
      </div>
    </div>
  );
}
