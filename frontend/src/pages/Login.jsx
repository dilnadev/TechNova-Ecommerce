
import { useState } from "react";
import { useNavigate, Link } from "react-router";
import api from "../api/axios";

export default function Login() {
  const [form,setForm]=useState({
    email:"",
    password:""
  })
  const [msg,setMsg]=useState("");
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();

  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  }
  
  const handleSubmit=async(e)=>{
    e.preventDefault();

    setLoading(true);
    setMsg("Connecting to server, please wait...");
    try{
      const res = await api.post("/auth/login",form);
      console.log(res,"data");
      
      //Save Token to localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.user.id);
      localStorage.setItem("role", res.data.user.role);

      setMsg("Login Successful");

      // Redirect admin to admin panel, regular users to home
      const destination = res.data.user.role === "admin" ? "/admin/products" : "/";
      setTimeout(() => {
        navigate(destination);
      }, 1000);
    } catch(err){
      setMsg(err.response?.data?.message || "An error occurred" );
    } finally {
      setLoading(false);
    }
  }

  return(
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div  className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>

        {msg && (
          <div className="mb-4 text-center text-sm text-red-600 font-medium">
            {msg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name='email'
            type="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name='password'
            type="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-60"
          >
            {loading ? "Please wait..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}