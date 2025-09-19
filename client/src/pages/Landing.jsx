import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center px-6">
      {/* Container */}
      <div className="text-center text-white space-y-8 max-w-2xl">
        {/* Hero Title */}
        <h1 className="text-6xl font-extrabold tracking-tight drop-shadow-lg animate-fadeIn">
          Welcome to <span className="text-yellow-300">EduSphere</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-100 leading-relaxed animate-fadeIn delay-200">
          Your personalized{" "}
          <span className="font-semibold">Learning Management System</span>–
          smarter, faster, better.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 animate-fadeIn delay-300">
          <a
            href="/login"
            className="px-8 py-3 rounded-2xl bg-white text-indigo-600 font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            Login
          </a>
          <a
            href="/signup"
            className="px-8 py-3 rounded-2xl bg-yellow-300 text-purple-700 font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
