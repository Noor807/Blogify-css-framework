/**
 * Deletes a post by its ID.
 *
 * @param {?} id - The ID of the post to delete. Fill in the appropriate type.
 * @returns {?} What the function returns. Choose an appropriate return type.
 * @throws {Error} If the API request fails.
 */

import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";
const headersObject = headers();

headersObject.append("Content-Type", "application/json");

const token = localStorage.getItem("token");
if (token) {
  headersObject.append("Authorization", `Bearer ${token}`);
}
export async function deletePost(id) {
  const API_URL = `${API_SOCIAL_POSTS}/${id}`;

  try {
    const response = await fetch(API_URL, {
      method: "DELETE",
      headers: headersObject,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Failed to delete the post:", errorData);
      throw new Error(errorData.message || "Failed to delete the post");
    }

    return { success: true, message: "Post deleted successfully" };
  } catch (error) {
    console.error("Error deleting the post:", error);
    return { success: false, error: error.message };
  }
}
