import { useState, useEffect } from "react";

let id = 0;
const listeners = new Set();

// Function to trigger a toast from anywhere
export const toast = (message, type = "info", duration = 3000) => {
  const toastObj = { id: id++, message, type, duration };
  listeners.forEach((listener) => listener(toastObj));
};

export default function Toaster() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const addToast = (toastObj) => {
      setToasts((prev) => [...prev, toastObj]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toastObj.id));
      }, toastObj.duration);
    };

    listeners.add(addToast);
    return () => listeners.delete(addToast);
  }, []);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="fixed top-5 right-5 flex flex-col gap-2 z-50">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`flex items-center justify-between px-4 py-2 rounded shadow-lg text-white font-semibold animate-slide-in
            ${
              t.type === "info"
                ? "bg-blue-500"
                : t.type === "success"
                ? "bg-green-500"
                : t.type === "error"
                ? "bg-red-500"
                : "bg-gray-500"
            }
          `}
        >
          <span>{t.message}</span>
          <button
            onClick={() => removeToast(t.id)}
            className="ml-4 font-bold text-xl hover:text-gray-200"
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
}
