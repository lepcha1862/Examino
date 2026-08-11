"use client";

import { useState } from "react";
import AuthInput from "./AuthInput";
import Button from "../ui/Button";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      console.log("Login Data:", formData);

      // Later:
      // await fetch("/api/auth/login", {
      //   method: "POST",
      //   body: JSON.stringify(formData),
      // });
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        w-full
        max-w-105

        rounded-lg

        border
        border-white/10

        bg-slate-900/75
        backdrop-blur-xl

        shadow-2xl
        shadow-black/30

        px-7
        py-8

        sm:px-10
        sm:py-9
      "
    >
      {/* Header */}
      <div className="mb-8">
        <h1
          className="
            text-2xl
            sm:text-[26px]
            font-semibold
            tracking-wide
            text-white
          "
        >
          Welcome Back
        </h1>

        <p className="mt-3 text-sm text-white/60">Please enter your username and password</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthInput
          label=""
          name="username"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <AuthInput
          label=""
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <div className="pt-3">
          <Button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </div>
      </form>
    </div>
  );
}
