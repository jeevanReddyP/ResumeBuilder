import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate hook
import "../Login.css";

export default function Login() {
  // 4. Use useState to manage form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // 1. Get the navigate function
  const navigate = useNavigate();

  // 2. Create a handler for form submission
  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default form refresh

    // 3. Add your authentication logic here
    // This is a dummy example. In a real app, you would
    // perform an API call to your backend.
    if (email === "test@example.com" && password === "password") {
      console.log("Login successful!");
      navigate("/dashboard"); // Redirect to the dashboard
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
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
    </div>
  );
}
