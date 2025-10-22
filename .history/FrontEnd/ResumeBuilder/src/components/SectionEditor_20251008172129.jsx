import { useState } from "react";
import API from "../../../../FrontEnd/ResumeBuilder/src/api/api.js"

export default function SectionEditor({ resume, setResume }) {
  const [newWork, setNewWork] = useState({ company: "", role: "", startDate: "", endDate: "", description: "" });

  const handleWorkAdd = async () => {
    const updatedWork = [...resume.workExperience, newWork];
    const res = await API.put(`/resume/${resume._id}`, { workExperience: updatedWork });
    setResume(res.data);
    setNewWork({ company: "", role: "", startDate: "", endDate: "", description: "" });
  };

  const handleImageUpload = async (e, type) => {
    const formData = new FormData();
    formData.append(type, e.target.files[0]);
    const res = await API.put(`/resume/${resume._id}/upload-images`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    setResume({ ...resume, profileInfo: { ...resume.profileInfo, profilePreviewUrl: res.data.profilePreviewUrl } });
  };

  return (
    <div>
      <h3>Work Experience</h3>
      {resume.workExperience.map((w, i) => (
        <div key={i}>
          <p>{w.company} - {w.role}</p>
        </div>
      ))}

      <input placeholder="Company" value={newWork.company} onChange={(e) => setNewWork({ ...newWork, company: e.target.value })} />
      <input placeholder="Role" value={newWork.role} onChange={(e) => setNewWork({ ...newWork, role: e.target.value })} />
      <input type="date" value={newWork.startDate} onChange={(e) => setNewWork({ ...newWork, startDate: e.target.value })} />
      <input type="date" value={newWork.endDate} onChange={(e) => setNewWork({ ...newWork, endDate: e.target.value })} />
      <textarea placeholder="Description" value={newWork.description} onChange={(e) => setNewWork({ ...newWork, description: e.target.value })}></textarea>
      <button onClick={handleWorkAdd}>Add Work</button>

      <h3>Profile Picture</h3>
      <input type="file" onChange={(e) => handleImageUpload(e, "profileImage")} />
      <h3>Resume Thumbnail</h3>
      <input type="file" onChange={(e) => handleImageUpload(e, "thumbnail")} />
    </div>
  );
}
