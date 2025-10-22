import { Link } from "react-router-dom";

export default function ResumeList({ resumes }) {
  if (!resumes || resumes.length === 0) return <p>No resumes found</p>;

  return (
    <div>
      {resumes.map((res) => (
        <div key={res._id} className="resume-card">
          <h3>{res.title}</h3>
          <Link to={`/resume/${res._id}`}>Edit / Preview</Link>
        </div>
      ))}
    </div>
  );
}
