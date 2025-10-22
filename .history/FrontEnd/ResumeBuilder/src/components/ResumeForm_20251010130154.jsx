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
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Resume Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="text"
        placeholder="Full Name"
        name="fullName"
        value={formData.profileInfo.fullName || ""}
        onChange={(e) =>
          setFormData({
            ...formData,
            profileInfo: { ...formData.profileInfo, fullName: e.target.value },
          })
        }
        required
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="text"
        placeholder="Designation"
        name="designation"
        value={formData.profileInfo.designation || ""}
        onChange={(e) =>
          setFormData({
            ...formData,
            profileInfo: { ...formData.profileInfo, designation: e.target.value },
          })
        }
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <textarea
        placeholder="Summary"
        name="summary"
        value={formData.profileInfo.summary || ""}
        onChange={(e) =>
          setFormData({
            ...formData,
            profileInfo: { ...formData.profileInfo, summary: e.target.value },
          })
        }
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        rows={4}
      />

      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all"
      >
        Save Section
      </button>
    </form>
  );
}
