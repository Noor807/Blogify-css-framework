import { login } from "../../api/auth/login";
import { showToast } from "../../utilities/toast";

export async function onLogin(event) {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;

  try {
    const data = await login({ email, password });

    showToast("Login successful!", "success");

    // Delay redirect to let user see the alert
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  } catch (error) {
    console.error("Login failed:", error);
    showToast(
      "Login failed. Please check your credentials and try again.",
      "error"
    );
  }
}
