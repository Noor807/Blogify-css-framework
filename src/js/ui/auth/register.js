import { register } from "../../api/auth/register";
import { showAlert } from "../../utilities/alerts";

export async function onRegister(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;

  try {
    const data = await register({ name, email, password });

    showAlert("Welcome! You are registered successfully.", "success");

    // Redirect after a short delay so the user sees the alert
    setTimeout(() => {
      window.location.href = "/auth/login/";
    }, 1500);
  } catch (error) {
    console.error("Registration failed:", error);
    showAlert(
      "Registration failed. Please check your details and try again.",
      "error"
    );
  }
}
