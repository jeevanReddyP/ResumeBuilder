import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../../../../FrontEnd/ResumeBuilder/src/api/api.js";

import bgimage from "../"
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data.Msg || "Invalid email or password");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "bgimage" }}
    >
      <div className="bg-opacity-90 p-10 rounded-xl shadow-2xl w-full max-w-md backdrop-blur-sm">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-red-200">ResumeBuilder</h1>
          <p className="text-red-400 mt-2">Build your professional resume easily</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4 bg-clip-padding">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors font-medium"
          >
            Login
          </button>
        </form>
        <p className="text-center text-black-900 mt-5">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-800 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
