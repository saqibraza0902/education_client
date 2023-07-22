import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="bg-[#002147] h-screen flex items-center justify-center">
      <div className=" bg-[#fdc800] p-8 rounded shadow-md lg:w-1/3">
        <h1 className="text-center text-2xl font-bold mb-6">
          Login to Sikkha Education
        </h1>
        <form onSubmit={handleLogin}>
          <label className="block mb-2" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded mb-4"
            required
          />

          <label className="block mb-2" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded mb-6"
            required
            autoComplete="false"
          />

          <button
            type="submit"
            className="w-full bg-[#002147] border-[#002147] border-[1px] text-[#fdc800] py-2 px-4 rounded cursor-pointer hover:bg-[#255caf]
             hover:text-[#fff] transition-all duration-500"
          >
            Login
          </button>
          <p className="pt-2 text-sm text-black">
            Don't have an account? Create new account{" "}
            <span className="underline cursor-pointer ">
              <Link className="text-black text-sm no-underline" to="/signup">
                {" "}
                here
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
