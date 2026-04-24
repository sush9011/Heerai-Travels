import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin login attempt:", { email, password });
    navigate("/admin");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-md bg-white/80 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/20">
        
        <h2 className="text-2xl font-bold text-center text-blue-950 mb-6">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              placeholder="Enter your password"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-linear-to-r from-yellow-400 to-yellow-500 text-black py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            Login
          </button>
        </form>

        {/* Extra */}
        <p className="text-center text-xs text-gray-500 mt-4">
          Secure admin access only
        </p>

      </div>
    </div>
  );
};

export default Login;