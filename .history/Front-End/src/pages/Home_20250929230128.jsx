import { Link } from "react-router-dom";
import "../Home.css"; 

export default function Home() {
  return (
    <div>
      <h1>Welcome to Resume Builder</h1>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
