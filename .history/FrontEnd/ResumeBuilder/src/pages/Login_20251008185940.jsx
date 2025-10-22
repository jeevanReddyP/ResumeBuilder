import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    if (email === "test@example.com" && password === "password") {
      console.log("Login successful!");
      navigate("/dashboard"); 
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container min-h-screen flex items-center justify-center bg">
      <h2>Login</h2>
      {/* 2. Attach the handler to the form's onSubmit event */}
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Manage state
        />
        <input 
          type="password" 
          placeholder="Password" 
          required 
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Manage state
        />
        <button type="submit">Login</button>
      </form>
       <Link to="/register">Register</Link>
    </div>
  );
}
