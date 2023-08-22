"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function LoginPage() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function login() {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log(response);
      toast.success("User logged in successfully");
      setTimeout(() => {
        router.push("/profile");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col gap-4 w-1/3 mt-6 m-auto border rounded-md px-5 pt-10 pb-5">
      <Toaster />
      <h1 className="text-center font-bold">
        {loading ? "Processing" : "Login Page"}
      </h1>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Enter Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="p-2 rounded-md text-cyan-600 font-semibold outline-none border border-cyan-600 bg-slate-100"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Enter Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="p-2 rounded-md text-cyan-600 font-semibold outline-none border border-cyan-600 bg-slate-100"
      />
      <button
        onClick={login}
        className="bg-sky-600 text-white font-semibold p-2 rounded-md my-2"
        disabled={buttonDisabled ? true : false}
      >
        Login
      </button>
      <Link href="/signup" className="text-center text-blue-700">
        Signup Here
      </Link>
    </div>
  );
}
