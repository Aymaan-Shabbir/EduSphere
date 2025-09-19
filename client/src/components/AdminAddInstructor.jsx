import React, { useState } from "react";
import axios from "axios";
import { toast } from "./Toaster"; // Import the toast function
const API_BASE = import.meta.env.VITE_API_BASE_URL;

const AddInstructor = () => {
  const [form, setForm] = useState({ name: "", email: "", bio: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      toast("Unauthorized! Please log in as admin.", "error");
      return;
    }

    try {
      await axios.post(`${API_BASE}/instructors`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast("Instructor added successfully!", "success");

      setForm({ name: "", email: "", bio: "" }); // reset form
    } catch (err) {
      console.error(
        "Error adding instructor:",
        err.response?.data || err.message
      );
      toast("Error adding instructor", "error");
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-lg font-semibold mb-2 text-center">Add Instructor</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          name="name"
          placeholder="Instructor Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <textarea
          name="bio"
          placeholder="Bio"
          value={form.bio}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Add Instructor
        </button>
      </form>
    </div>
  );
};

export default AddInstructor;
