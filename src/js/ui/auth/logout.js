/**
 * This function should log the user out by removing appropriate user data from the browser.
 */

// export function onLogout() {}

export function onLogout() {
  console.log("Logging out...");

  // Remove user data from localStorage and sessionStorage
  localStorage.removeItem("token");
  localStorage.removeItem("apiKey");
  localStorage.removeItem("adminUser");
  // Optional: remove if you store it in sessionStorage

  window.location.href = "/auth/login/";
}
