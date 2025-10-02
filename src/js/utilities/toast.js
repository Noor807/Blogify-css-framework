/**
 * Show a toast notification using Toastify
 * @param {string} message - The message to display
 * @param {"success"|"error"|"info"|"warning"} type - The type of toast
 */
export function showToast(message, type = "info") {
  let bg;
  switch (type) {
    case "success":
      bg = "linear-gradient(to right, #00b09b, #96c93d)";
      break;
    case "error":
      bg = "linear-gradient(to right, #e74c3c, #c0392b)";
      break;
    case "warning":
      bg = "linear-gradient(to right, #f39c12, #d35400)";
      break;
    default:
      bg = "linear-gradient(to right, #3498db, #2980b9)";
  }

  Toastify({
    text: message,
    duration: 3000,
    gravity: "top",
    position: "right",
    close: true,
    style: { background: bg },
  }).showToast();
}
