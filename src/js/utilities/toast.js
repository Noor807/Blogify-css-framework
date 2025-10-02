import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

/**
 * Show a toast notification using Toastify
 * @param {string} message - The message to display
 * @param {"success"|"error"|"info"|"warning"} type - The type of toast
 */
export function showToast(message, type = "info") {
  let bg;
  switch (type) {
    case "success":
      bg = "#14b8a6"; // Tailwind teal-500
      break;
    case "error":
      bg = "#ef4444"; // Tailwind red-500
      break;
    case "warning":
      bg = "#f59e0b"; // Tailwind amber-500
      break;
    default:
      bg = "#3b82f6"; // Tailwind blue-500
  }

  Toastify({
    text: message,
    duration: 3000,
    gravity: "top",      // top or bottom
    position: "right",   // left, center, right
    close: true,
    style: {
      background: bg,
      color: "#fff",      // ensures text is readable
      fontWeight: "500",  // optional for better readability
      padding: "0.75rem 1rem"
    },
  }).showToast();
}



