import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaUserGraduate, FaFileAlt, FaDownload } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Build Your Resume in Minutes
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-xl">
          Create professional resumes easily and download as PDF. Perfect for job applications and interviews.
        </p>
        <Link
          to="/login"
          className="bg-gradient-to-r from-yellow-300 to-pink-400 px-6 py-3 rounded-full text-black font-semibold hover:scale-105 transition-transform"
        >
          Login / Get Started
        </Link>
      </section>

      {/* Features / How It Works Section */}
      <section className="py-24 px-6 bg-gray-100 text-gray-900 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform">
            <FaUserGraduate className="mx-auto mb-4 text-4xl text-indigo-600" />
            <h3 className="text-xl font-semibold mb-2">Sign Up / Login</h3>
            <p>Create your account or login to start building your resume.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform">
            <FaFileAlt className="mx-auto mb-4 text-4xl text-indigo-600" />
            <h3 className="text-xl font-semibold mb-2">Fill Your Info</h3>
            <p>Enter your personal, education, and professional details easily.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform">
            <FaDownload className="mx-auto mb-4 text-4xl text-indigo-600" />
            <h3 className="text-xl font-semibold mb-2">Download PDF</h3>
            <p>Choose a template and download a professional PDF resume instantly.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-800 text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Resume Builder</h2>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
          Our Resume Builder helps job seekers create professional resumes in minutes.  
          <span className="text-yellow-300 font-semibold"> Easy to use, fast, and free!</span>  
          Choose templates, add your info, and download your PDF to impress recruiters.
        </p>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Get Started Now</h2>
        <div className="flex justify-center gap-6">
          <Link
            to="/login"
            className="bg-gradient-to-r from-yellow-300 to-pink-400 px-6 py-3 rounded-full text-black font-semibold hover:scale-105 transition-transform"
          >
            Login
          </Link>
          <Link
            to="/contact"
            className="bg-gray-700 px-6 py-3 rounded-full text-white hover:bg-gray-600 transition-colors"
          >
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
