import { useEffect, useState } from "react";
import API from "../api/api";
import { Link } from "react-router-dom";

export default function ResumeList() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    API.get("/resume").then((res) => setResumes(res.data));
  }, []);

  return (
    <div>
      <h2>Your Resumes</h2>
      {resumes.map((r) => (
        <div key={r._id}>
          <Link to={`/resume/${r._id}`}>{r.title}</Link>
        </div>
      ))}
    </div>
  );
}
