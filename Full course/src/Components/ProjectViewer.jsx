import { useParams } from "react-router";

export default function ProjectViewer() {
  const { chapterId, projectId } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Project demo</h1>
      <iframe
        src={`/chapters/${chapterId}/${projectId}/index.html`}
        title="Demo"
        className="w-full h-[80vh] border rounded"
      ></iframe>
    </div>
  );
}
