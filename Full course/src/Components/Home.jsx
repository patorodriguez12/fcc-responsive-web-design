import { Link } from "react-router";
import { chapters } from "../../data/projects";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Responsive web design projects
      </h1>
      {chapters.map((chapter) => (
        <Link
          key={chapter.id}
          to={`/chapter/${chapter.id}`}
          className="block bg-blue-600 text-white px-4 py-2 mb-2 rounded hover:bg-blue-700"
        >
          {chapter.name}
        </Link>
      ))}
    </div>
  );
}
