import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../../../FrontEnd/ResumeBuilder/src/api/api.js";
import ResumeForm from "../components/ResumeForm";
import SectionEditor from "../"
import ResumePreview from "../components/ResumePreview";
import Navbar from "../components/Navbar.jsx";

export default function ResumeDetail() {
  const { id } = useParams();
  const [resume, setResume] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);

  // Fetch resume
  useEffect(() => {
    API.get(`/resume/${id}`)
      .then((res) => {
        // Ensure workExperience exists
        const safeResume = {
          ...res.data,
          workExperience: res.data.workExperience || [],
        };
        setResume(safeResume);
      })
      .catch((err) => {
        console.error(err.response?.data || err.message);
        alert("Failed to load resume.");
      });
  }, [id]);

  if (!resume)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-xl">Loading...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="shadow-sm bg-white sticky top-0 z-10">
        <Navbar />
      </header>

      <main className="max-w-5xl mx-auto p-8 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            {resume.title} Editor
          </h2>
          <button
            onClick={() => setPreviewMode(!previewMode)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all"
          >
            {previewMode ? "Edit Mode" : "Preview Mode"}
          </button>
        </div>

        {/* Editor or Preview */}
        {!previewMode ? (
          <div className="space-y-6">
            <ResumeForm
              existingData={resume}
              onSave={async (updatedData) => {
                try {
                  const res = await API.put(`/resume/${resume._id}`, updatedData);
                  setResume({ ...res.data, workExperience: res.data.workExperience || [] });
                  alert("Resume updated successfully!");
                } catch (err) {
                  console.error(err.response?.data || err.message);
                  alert("Error saving resume");
                }
              }}
            />
            <SectionEditor resume={resume} setResume={setResume} />
          </div>
        ) : (
          <ResumePreview resume={resume} />
        )}
      </main>
    </div>
  );
}
