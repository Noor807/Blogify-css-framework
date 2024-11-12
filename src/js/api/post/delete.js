/**
 * Deletes a post by its ID.
 *
 * @param {?} id - The ID of the post to delete. Fill in the appropriate type.
 * @returns {?} What the fucntion returns. Choose an appropriate return type.
 * @throws {Error} If the API request fails.
 */

import { API_SOCIAL_POSTS } from "../constants";

export async function deletePost(id) {
    const API_URL = `${API_SOCIAL_POSTS}/${id}`; // Replace with your actual API endpoint
    const token = localStorage.getItem('token')
    const apiKey = localStorage.getItem('apiKey')

    try {
        const response = await fetch(API_URL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
                'X-Noroff-API-Key': apiKey,
            },
        });

        if (!response.ok) {
            // Handle different types of errors if needed
            const errorData = await response.json();
            console.error("Failed to delete the post:", errorData);
            throw new Error(errorData.message || "Failed to delete the post");
        }

        console.log("Post deleted successfully");
        return { success: true, message: "Post deleted successfully" };
    } catch (error) {
        console.error("Error deleting the post:", error);
        return { success: false, error: error.message };
    }
}
