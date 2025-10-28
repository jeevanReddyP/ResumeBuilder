import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function ResumeForm({ existingData }) {
  const [title, setTitle] = useState(existingData?.title || "");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = existingData
        ? await API.put(`/resume/${existingData._id}`, { title })
        : await API.post("/resume", { title });
      navigate(`/resume/${res.data._id}`);
    } catch (err) {
      alert(err.response.data.Msg);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Resume Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Save Resume</button>
    </form>
  );
}
