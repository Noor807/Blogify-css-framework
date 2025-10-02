import { login } from "../../api/auth/login";
import { showAlert } from "../../utilities/alerts";

export async function onLogin(event) {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;

  try {
    const data = await login({ email, password });

    showAlert("Login successful!", "success");

    // Delay redirect to let user see the alert
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  } catch (error) {
    console.error("Login failed:", error);
    showAlert(
      "Login failed. Please check your credentials and try again.",
      "error"
    );
  }
}
