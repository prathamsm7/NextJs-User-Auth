"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function SignupPage() {
  const [user, setUser] = useState({ email: "", password: "", username: "" });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function signup() {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log(response);

      router.push("/login");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.username.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col gap-4 w-1/3 mt-6 m-auto border rounded-md px-5 pt-10 pb-5">
      <h1 className="text-center font-bold">
        {loading ? "Processing" : "Signup"}
      </h1>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="Enter Username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="p-2 rounded-md text-cyan-600 font-semibold outline-none border border-cyan-600 bg-slate-100"
      />
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
        onClick={signup}
        className="bg-sky-600 text-white font-semibold p-2 rounded-md my-2"
        disabled={buttonDisabled ? true : false}
      >
        Signup
      </button>
      <Link href="/login" className="text-center text-blue-700">
        Login Here
      </Link>
    </div>
  );
}
