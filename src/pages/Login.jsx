import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiUser, FiLock } from "react-icons/fi";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError("Failed to login. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-full max-w-md p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-600 rounded text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <div className="relative">
              <FiUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <FiLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-brand text-white rounded font-medium hover:bg-brand-dark transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          No account? <button className="text-brand hover:underline">Register</button>
        </p>
      </div>
    </div>
  );
}
