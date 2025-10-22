<div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl">
    
    {/* Left side: Image */}
    <div className="md:w-1/2">
      <img
        src="/path-to-your-image.png"  // Replace with your image path
        alt="Resume Illustration"
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* Right side: Login Form */}
    <div className="md:w-1/2 p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-700">Login</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
          Login
        </button>
      </form>
      <p className="mt-4 text-center text-gray-600">
        Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
      </p>
    </div>

  </div>
</div>
