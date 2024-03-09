"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const loginHandler = async () => {
    const response = await axios.post("/api/login", {
      email,
      password,
    });
    console.log("login successful");
    router.push("/signup");
  };
  const logoutHandler = async () => {
    const response = await axios.get("/api/logout");
    console.log("logout successful");
    router.push("/register");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <input
        type="text"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginHandler}> Login </button>
      <button onClick={logoutHandler}> Logout </button>
    </div>
  );
}
export default Login;
