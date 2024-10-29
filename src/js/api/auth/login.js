/**
 * Logs in a user with the provided email and password.
 *
 * @param {Object} data - The login data.
 * @param {string} data.email - The user's email address.
 * @param {string} data.password - The user's password.
 * @returns {Promise<Object>} A promise that resolves to the user's login response.
 * @throws {Error} Error if the login fails.
 */

export async function login({ email, password }) {
  try {
    const response = await fetch(API_AUTH_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    const data = await response.json();
    // Handle successful login (e.g., store token, redirect user)
    console.log("Login successful:", data);
    return data; // You might want to return user data or a token
  } catch (error) {
    console.error("Error during login:", error);
    throw error; // Rethrow error for further handling if necessary
  }
}




// // Function to handle login
//  async function onLogin(event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Get input values
//     const email = document.getElementById('email-input').value;
//     const password = document.getElementById('password-input').value;

//     const loginData = {
//         email,
//         password
//     };

//     try {
//         const response = await fetch(API_AUTH_LOGIN, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${API_KEY}` // Include API key in header if required
//             },
//             body: JSON.stringify(loginData)
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const result = await response.json();

//         // Handle successful login
//         console.log('Login successful:', result);
//         // You can store the token or user info as needed
//         // e.g., localStorage.setItem('token', result.token);

//         // Redirect or display a success message
//         // window.location.href = '/dashboard'; // Example redirect after login
//     } catch (error) {
//         // Handle error (e.g., show a message to the user)
//         console.error('Login failed:', error);
//         alert('Login failed: ' + error.message);
//     }
// }

// // Attach the onLogin function to the form
// document.getElementById('login-form').addEventListener('submit', onLogin);
