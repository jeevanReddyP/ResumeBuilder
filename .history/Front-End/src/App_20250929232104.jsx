// App.jsx
import { Routes, Route } from "react-router-dom";
import Home  from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ResumeDetail from "./pages/ResumeDetail.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<}
      <Route path="/Login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/resume/:id" element={<ResumeDetail />} />
    </Routes>
  );
}

export default App;
