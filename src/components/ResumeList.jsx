import { Link } from "react-router-dom";

export default function ResumeList({ resumes }) {
  if (!resumes || resumes.length === 0)
    return <p className="text-gray-500 text-center mt-6">No resumes found</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {resumes.map((res) => (
        <div
          key={res._id}
          className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all cursor-pointer"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{res.title}</h3>
          <Link to={`/resume/${res._id}`} className="text-indigo-600 hover:underline">
            Edit / Preview
          </Link>
        </div>
      ))}
    </div>
  );
}
