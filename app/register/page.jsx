"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  ///das
  const registerHandler = async () => {
    console.log(email, password, username);

    const response = await axios.post("/api/signup", {
      email,
      username,
      password,
    });
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <input
        type="text"
        placeholder="Enter your username"
        onChange={(e) => setUsername(e.target.value)}
      />
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
      <button onClick={registerHandler}>
        {loading ? "Procesing" : "Register"}
      </button>
      <Link href="/login">Login</Link>
    </div>
  );
}
export default Register;
