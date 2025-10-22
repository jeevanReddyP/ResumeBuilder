import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "./api/api.js";
import ResumeForm from "./ResumeForm.jsx";

export default function ResumeDetail() {
  const { id } = useParams();
  const [resume, setResume] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {
    API.get(`/resume/${id}`).then((res) => setResume(res.data));
  }, [id]);

  if (!resume) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600 text-lg">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-white shadow-md px-10 py-6">
        <h2 className="text-3xl font-semibold text-gray-800">
          Resume Editor: <span className="text-indigo-600">{resume.title}</span>
        </h2>
        <button
          onClick={() => setPreviewMode(!previewMode)}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-all"
        >
          {previewMode ? "Switch to Edit Mode" : "Switch to Preview Mode"}
        </button>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto py-10 px-6">
        {!previewMode ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Form Section */}
            <div className="bg-white shadow-md rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                Edit Resume Details
              </h3>
              <ResumeForm existingData={resume} />
            </div>

            {/* Right: Section Editor */}
            <div className="bg-white shadow-md rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                Manage Sections
              </h3>
              <SectionEditor resume={resume} setResume={setResume} />
            </div>
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-xl p-8">
            <ResumePreview resume={resume} />
          </div>
        )}
      </div>
    </div>
  );
}
