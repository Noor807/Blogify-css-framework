 /**
//  * Logs in a user with the provided email and password.
//  *
//  * @param {Object} data - The login data.
//  * @param {string} data.email - The user's email address.
//  * @param {string} data.password - The user's password.
//  * @returns {Promise<Object>} A promise that resolves to the user's login response.
//  * @throws {Error} Error if the login fails.
//  */

import { API_AUTH_LOGIN, API_AUTH_KEY } from "../constants";
export async function login({ email, password }) {
  try {
    const response = await fetch(API_AUTH_LOGIN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    const data = await response.json();
    console.log("Login response data:", data);

    // Store token and user data in localStorage
    localStorage.setItem("token", data.data.accessToken);
    const adminUser = data.data;
    localStorage.setItem("adminUser", JSON.stringify(adminUser));
    console.log("Login successful:", data);

    // Fetch the API key
    const apiKey = await getKey("my_Key");
    console.log("API Key response:", apiKey);

    if (apiKey && apiKey.data && apiKey.data.key) {
      localStorage.setItem("apiKey", apiKey.data.key);
      console.log("API key stored in localStorage:", apiKey.data.key);
    } else {
      console.error("API key fetch failed or is invalid.");
    }

    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
}

/**
 * Retrieves the API key.
 */
async function getKey(name) {
  const token = localStorage.getItem("token");
  console.log("Token for API Key request:", token);  // Debugging token

  const body = name ? { name } : undefined;

  try {
    const response = await fetch(API_AUTH_KEY, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",  // Corrected header
        Authorization: `Bearer ${token}`,
      },
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw Error(
        `${errorData.statusCode}: ${errorData.status}. ${errorData.errors[0].message}`
      );
    }

    const data = await response.json();
    console.log("API Key fetch response:", data);
    return data;
  } catch (error) {
    console.error("Error fetching API Key:", error);
    throw new Error(error.message || "Failed to fetch API Key");
  }
}


