import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";
import ResumeForm from "../components/ResumeForm";

export default function ResumeDetail() {
  const { id } = useParams();
  const [resume, setResume] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {
    API.get(`/resume/${id}`).then((res) => setResume(res.data));
  }, [id]);

  if (!resume) return <p>Loading...</p>;

  return (
    <div>
      <h2>Resume Editor: {resume.title}</h2>
      <button onClick={() => setPreviewMode(!previewMode)}>
        {previewMode ? "Edit Mode" : "Preview Mode"}
      </button>

      {!previewMode ? (
        <div>
          <ResumeForm existingData={resume} />
          <SectionEditor resume={resume} setResume={setResume} />
        </div>
      ) : (
        <ResumePreview resume={resume} />
      )}
    </div>
  );
}
