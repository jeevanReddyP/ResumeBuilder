import { Link } from "react-router-dom";
import "../Home.css"; 

export default function Home() {
  return (
    // The issue was here. The CSS target was a class named ".home"
    // but the div didn't have that class applied.
    <div className="home"> 
      <h1>Welcome to Resume Builder</h1>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
