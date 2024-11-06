/**
 * Functions you attach to logout events that calls ui/auth/logout function
 */

// This function adds the logout event listener to the button with id="logout"
export function setLogoutListener() {
    const logoutButton = document.getElementById('logout');

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            try {
                console.log('Logging out...');

                // Remove user data from localStorage (and sessionStorage if used)
                localStorage.removeItem('userToken');
                sessionStorage.removeItem('userToken');  // Optional: remove if you store it in sessionStorage

                window.location.href = '/login';


            } catch (error) {
                console.error('Logout failed:', error);
            }
        });
    } else {
        console.warn('Logout button not found!');
    }
}
