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
      bg = "#22c55e";
      break;
    case "error":
      bg = "#ef4444"; 
      break;
    case "warning":
      bg = "#eab308"; 
      break;
    default:
      bg = "#16a34a"; 
  }

  Toastify({
    text: message,
    duration: 3000,
    gravity: "top",    
    position: "right", 
    close: true,
    style: {
      background: bg,
      color: "#fff",
      fontWeight: "500",
      padding: "0.75rem 1rem",
      borderRadius: "0.5rem", 
    },
  }).showToast();
}




