import { showToast } from "../../utilities/toast";

export function onLogout() {
  localStorage.removeItem("token");
  localStorage.removeItem("apiKey");
  localStorage.removeItem("adminUser");

  // Show logout success alert
  showToast("You have been logged out.", "info");

  // Redirect after short delay so user can see the alert
  setTimeout(() => {
    window.location.href = "/auth/login/";
  }, 1000);
}
