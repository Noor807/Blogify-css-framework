/**
 * Redirects the user to the login page if they are not authenticated.
 * Checks for the presence of a `token` in localStorage as the authentication indicator.
 */

export function authGuard() {
  if (!localStorage.token) {
    window.location.href = "/auth/login/";
  }
}
