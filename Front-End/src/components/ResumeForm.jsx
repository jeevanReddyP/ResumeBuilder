import { useState } from "react";

export default function ResumeForm({ existingData, onSave }) {
  const [formData, setFormData] = useState(existingData || { title: "", profileInfo: {} });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Resume Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="Full Name"
        name="fullName"
        value={formData.profileInfo.fullName || ""}
        onChange={(e) => setFormData({
          ...formData,
          profileInfo: { ...formData.profileInfo, fullName: e.target.value }
        })}
        required
      />
      <input
        type="text"
        placeholder="Designation"
        name="designation"
        value={formData.profileInfo.designation || ""}
        onChange={(e) => setFormData({
          ...formData,
          profileInfo: { ...formData.profileInfo, designation: e.target.value }
        })}
      />
      <textarea
        placeholder="Summary"
        name="summary"
        value={formData.profileInfo.summary || ""}
        onChange={(e) => setFormData({
          ...formData,
          profileInfo: { ...formData.profileInfo, summary: e.target.value }
        })}
      />
      <button type="submit">Save Section</button>
    </form>
  );
}
