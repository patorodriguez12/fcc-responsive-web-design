import { chapters } from "../../data/projects";
import { useParams, Link } from "react-router";

export default function Chapter() {
  const { chapterId } = useParams();
  const chapter = chapters.find((c) => c.id === chapterId);
  console.log(chapter)
  if (!chapter) return <p>Chapter not found</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{chapter.name}</h2>
      {chapter.projects.map((proj) => (
        <Link
          key={proj.id}
          to={`/chapter/${chapterId}/${proj.id}`}
          className="block bg-gray-200 hover:bg-gray-300 px-4 py-2 mb-2 rounded"
        >
          {proj.name}
        </Link>
      ))}
    </div>
  );
}
