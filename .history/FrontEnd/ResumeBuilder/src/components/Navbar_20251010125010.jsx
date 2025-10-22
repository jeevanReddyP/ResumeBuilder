export function navbar
<nav className="bg-indigo-600 text-white flex justify-between items-center px-8 py-4 shadow-md">
  <Link to="/" className="text-2xl font-bold hover:text-gray-200">
    Resume Builder
  </Link>
  <div className="space-x-6">
    <Link to="/" className="hover:text-gray-200 transition-colors">Home</Link>
    <Link to="/dashboard" className="hover:text-gray-200 transition-colors">Dashboard</Link>

    {localStorage.getItem("token") ? (
      <button
        onClick={handleLogout}
        className="bg-white text-indigo-600 px-4 py-1 rounded-lg hover:bg-gray-100 transition-all"
      >
        Logout
      </button>
    ) : (
      <Link
        to="/login"
        className="bg-white text-indigo-600 px-4 py-1 rounded-lg hover:bg-gray-100 transition-all"
      >
        Login
      </Link>
    )}
  </div>
</nav>
