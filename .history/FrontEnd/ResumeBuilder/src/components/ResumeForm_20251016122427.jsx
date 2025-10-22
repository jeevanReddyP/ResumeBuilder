import { useState } from "react";
import useE

export default function ResumeForm({ existingData, onSave }) {
  const [formData, setFormData] = useState(
    existingData || { title: "", profileInfo: {} }
  );
 useEffect(() => {
    if (existingData) {
      setFormData(existingData);
    }
  }, [existingData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Resume Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      />

      <input
        type="text"
        placeholder="Full Name"
        value={formData.profileInfo.fullName || ""}
        onChange={(e) =>
          setFormData({
            ...formData,
            profileInfo: { ...formData.profileInfo, fullName: e.target.value },
          })
        }
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      />

      <input
        type="text"
        placeholder="Designation"
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
