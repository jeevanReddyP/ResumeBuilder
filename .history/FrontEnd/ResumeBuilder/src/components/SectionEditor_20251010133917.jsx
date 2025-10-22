import { useState } from "react";
import API from "../../../../FrontEnd/ResumeBuilder/src/api/api.js";

export default function SectionEditor({ resume, setResume }) {
  const [newWork, setNewWork] = useState({
    company: "",
    role: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleWorkAdd = async () => {
    const updatedWork = [...(resume.workExperience || []), newWork];
    try {
      const res = await API.put(`/resume/${resume._id}`, { workExperience: updatedWork });
      setResume({ ...res.data, workExperience: res.data.workExperience || [] });
      setNewWork({ company: "", role: "", startDate: "", endDate: "", description: "" });
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Failed to add work experience.");
    }
  };

  const handleImageUpload = async (e, type) => {
    const formData = new FormData();
    formData.append(type, e.target.files[0]);
    try {
      const res = await API.put(`/resume/${resume._id}/upload-images`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResume({
        ...resume,
        profileInfo: {
          ...resume.profileInfo,
          profilePreviewUrl: res.data.profilePreviewUrl || resume.profileInfo.profilePreviewUrl,
          thumbnailUrl: res.data.thumbnailUrl || resume.profileInfo.thumbnailUrl,
        },
      });
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Image upload failed.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h3 className="text-xl font-semibold">Work Experience</h3>
      {(resume.workExperience || []).map((w, i) => (
        <div key={i} className="border-b pb-2 mb-2">
          <p>
            <strong>{w.role}</strong> at {w.company}
          </p>
          <p className="text-gray-500 text-sm">
            {w.startDate} - {w.endDate}
          </p>
          <p>{w.description}</p>
        </div>
      ))}

      {/* Add New Work */}
      <input
        placeholder="Company"
        value={newWork.company}
        onChange={(e) => setNewWork({ ...newWork, company: e.target.value })}
        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
      />
      <input
        placeholder="Role"
        value={newWork.role}
        onChange={(e) => setNewWork({ ...newWork, role: e.target.value })}
        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
      />
      <div className="flex gap-4">
        <input
          type="date"
          value={newWork.startDate}
          onChange={(e) => setNewWork({ ...newWork, startDate: e.target.value })}
          className="w-1/2 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="date"
          value={newWork.endDate}
          onChange={(e) => setNewWork({ ...newWork, endDate: e.target.value })}
          className="w-1/2 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <textarea
        placeholder="Description"
        value={newWork.description}
        onChange={(e) => setNewWork({ ...newWork, description: e.target.value })}
        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
      />
      <button
        onClick={handleWorkAdd}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all"
      >
        Add Work
      </button>

      {/* Image Uploads */}
      <div>
        <h4 className="mt-4 font-semibold">Profile Picture</h4>
        <input type="file" onChange={(e) => handleImageUpload(e, "profileImage")} className="mt-1" />
        <h4 className="mt-4 font-semibold">Resume Thumbnail</h4>
        <input type="file" onChange={(e) => handleImageUpload(e, "thumbnail")} className="mt-1" />
      </div>
    </div>
  );
}
