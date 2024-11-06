/**
 * This function should log the user out by removing aproppriate user data from the browser.
 */

// export function onLogout() {}

export function onLogout() {
    try {
        console.log('Logging out...');

        // Remove user data from localStorage and sessionStorage
        localStorage.removeItem('userToken');
        sessionStorage.removeItem('userToken');  // Optional: remove if you store it in sessionStorage


    } catch (error) {
        console.error('Logout failed:', error);
    }
}
