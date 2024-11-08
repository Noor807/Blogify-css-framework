/**
 * Functions you attach to logout events that calls ui/auth/logout function
 */

// This function adds the logout event listener to the button with id="logout"
import { onLogout } from "../auth/logout";
export function setLogoutListener() {
  const logoutButton = document.getElementById("logout-Btn");

  logoutButton.addEventListener("click", onLogout);
 
}
