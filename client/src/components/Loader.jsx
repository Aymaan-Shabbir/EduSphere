// src/components/Loader.jsx
import React from "react";

export default function Loader({ size = 48, message }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="flex flex-col items-center p-6 rounded-2xl bg-white/90 dark:bg-gray-800/90 shadow-2xl">
        {/* Spinner */}
        <svg
          className="animate-spin text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          style={{ width: size, height: size }}
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>

        {/* Optional message */}
        {message && (
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
