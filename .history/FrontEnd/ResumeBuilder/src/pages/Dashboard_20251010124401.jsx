import { useEffect, useState } from "react";
import API from "../../../../FrontEnd/ResumeBuilder/src/api/api.js";
import ResumeList from "../components/ResumeList.jsx";
import Navbar from

export default function Dashboard() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    API.get("/resume").then((res) => setResumes(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
 
      <header>

      </header>

      <main className="max-w-6xl mx-auto p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">My Resumes</h2>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all">
            + Create New Resume
          </button>
        </div>

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
