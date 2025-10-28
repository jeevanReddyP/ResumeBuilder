import { useEffect, useState } from "react";
import API from "../api/api";
import ResumeList from "../components/ResumeList";

export default function Dashboard() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    API.get("/resume").then((res) => setResumes(res.data));
  }, []);

  return (
    <div>
      <h1>My Resumes</h1>
      <ResumeList resumes={resumes} />
    </div>
  );
}
