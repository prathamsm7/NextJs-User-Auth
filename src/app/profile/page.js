"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function ProfilePage() {
  const [user, setUser] = useState({});
  const router = useRouter();

  async function logOutUser() {
    try {
      const response = await axios.get("/api/users/logout");
      toast.success(response.data.message);
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      // setLoading(false);
    }
  }

  async function getUserDetails() {
    const res = await axios.get("/api/users/auth");

    setUser(res.data.data);
  }

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <>
      <Toaster />
      <h1>Profile Page</h1>
      <h3>Profile of loged in user</h3>

      {Object.keys(user).length === 0 ? (
        "User Not Found"
      ) : (
        <Link href={`/profile/${user._id}`}>See Profile Details</Link>
      )}

      <button
        onClick={logOutUser}
        className="border p-2 rounded-md bg-blue-400 "
      >
        Log Out
      </button>
    </>
  );
}
