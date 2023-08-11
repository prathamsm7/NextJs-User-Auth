"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function LoginPage(s) {
  const [user, setUser] = useState({ email: "", password: "" });

  function login() {}
  return (
    <div className="flex flex-col gap-4 w-1/3 mt-6 m-auto border rounded-md px-5 pt-10 pb-5">
      <h1 className="text-center font-bold">Login Page</h1>

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
      >
        Login
      </button>
      <Link href="/signup" className="text-center text-blue-700">
        Signup Here
      </Link>
    </div>
  );
}
