import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../../FrontEnd/ResumeBuilder/src/api/api.js";
import ResumeList from "../components/ResumeList.jsx";
import Navbar from "../components/Navbar.jsx";

export default function Dashboard() {
  const [resumes, setResumes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    API.get("/resume", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => setResumes(res.data))
      .catch((err) => {
        console.error(err.response?.data || err.message);
        alert("Failed to load resumes. Make sure you are logged in.");
      });
  }, [navigate]);
  const handleCreateResume = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const res = await API.post(
        "/resume",
        { title: "Untitled Resume" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      navigate(`/resume/${res.data._id}`); 
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Error creating resume. Check console for details.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="shadow-sm bg-white sticky top-0 z-10">
        <Navbar />
      </header>

      <main className="max-w-6xl mx-auto p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">My Resumes</h2>
          <button
            onClick={handleCreateResume}
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-all"
          >
            + Create New Resume
          </button>
        </div>

        {/* Resume Cards */}
        {resumes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResumeList resumes={resumes} />
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-12">
            You haven’t created any resumes yet. Click “Create New Resume” to start!
          </p>
        )}
      </main>
    </div>
  );
}
