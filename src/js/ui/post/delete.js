import { deletePost } from "../../api/post/delete.js";
import { showAlert } from "../../utilities/toast.js";

/**
 * Handles deletion of a blog post.
 * Prompts the user for confirmation, calls the delete API,
 * removes the post from the DOM on success, and shows alerts.
 *
 * @param {Event} event - The click event triggered by the delete button.
 * @returns {Promise<void>} - Resolves after attempting to delete the post.
 *
 * @example
 * const deleteBtn = document.querySelector(".delete-post-btn");
 * deleteBtn.addEventListener("click", onDeletePost);
 */
export async function onDeletePost(event) {
  event.preventDefault();

  const postId = event.target.dataset.id;

  if (!postId) {
    console.error("Post ID not found.");
    showAlert("Post ID not found.", "error");
    return;
  }

  // Custom confirmation using showAlert with a timeout instead of native confirm()
  const userConfirmed = confirm("Are you sure you want to delete this post?");
  if (!userConfirmed) return;

  try {
    const result = await deletePost(postId);

    if (result.success) {
      const postElement = document.getElementById(`post-${postId}`);
      if (postElement) postElement.remove();

      showAlert(result.message || "Post deleted successfully!", "success");

      // Optional: redirect after a short delay
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } else {
      console.error("Failed to delete post:", result.error);
      showAlert("Error: Could not delete the post.", "error");
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    showAlert("Error: Could not delete the post.", "error");
  }
}
