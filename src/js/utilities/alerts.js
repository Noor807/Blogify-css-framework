export function showAlert(message, type = "info") {
  let container = document.getElementById("alert-container");

  // Create a container if not already in DOM
  if (!container) {
    container = document.createElement("div");
    container.id = "alert-container";
    container.className = "fixed top-4 right-4 space-y-2 z-50 w-80";
    document.body.appendChild(container);
  }

  const alertBox = document.createElement("div");

  // Tailwind styles for each type
  const styles = {
    success: "text-green-800 bg-green-200 border border-green-300",
    error: "text-red-800 bg-red-200 border border-red-300",
    warning: "text-yellow-800 bg-yellow-200 border border-yellow-300",
    info: "text-blue-800 bg-blue-200 border border-blue-300",
  };

  // Inline SVG icons
  const icons = {
    success: `<svg class="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414L9 14.414l8-8a1 1 0 000-1.414z" clip-rule="evenodd"></path></svg>`,
    error: `<svg class="w-5 h-5 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.536-10.95a1 1 0 00-1.414-1.414L10 8.586 7.879 6.465a1 1 0 00-1.415 1.415L8.586 10l-2.122 2.121a1 1 0 001.415 1.415L10 11.414l2.121 2.122a1 1 0 001.415-1.415L11.414 10l2.122-2.121z" clip-rule="evenodd"></path></svg>`,
    warning: `<svg class="w-5 h-5 mr-2 text-yellow-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.72-1.36 3.485 0l6.518 11.598c.75 1.334-.213 3.003-1.742 3.003H3.48c-1.53 0-2.492-1.67-1.742-3.003L8.257 3.1zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-7a1 1 0 00-1 1v3a1 1 0 002 0V7a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>`,
    info: `<svg class="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-8-4a1 1 0 100 2 1 1 0 000-2zm-1 4a1 1 0 000 2v2a1 1 0 001 1h1a1 1 0 100-2v-2a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>`,
  };

  alertBox.className = `flex items-center justify-between p-4 text-sm rounded-lg shadow border ${styles[type]}`;
  alertBox.innerHTML = `
    <div class="flex items-center">
      ${icons[type]}
      <span>${message}</span>
    </div>
    <button class="ml-4 font-bold hover:opacity-70">✕</button>
  `;

  // Remove on X click
  alertBox.querySelector("button").addEventListener("click", () => {
    alertBox.remove();
  });

  container.appendChild(alertBox);

  // Auto remove after 3s
  setTimeout(() => alertBox.remove(), 3000);
}
