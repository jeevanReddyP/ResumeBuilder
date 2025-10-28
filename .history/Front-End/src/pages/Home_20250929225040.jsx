import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page-container">
      <h1>Welcome to Resume Builder</h1>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
