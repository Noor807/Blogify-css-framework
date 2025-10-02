import { deletePost } from "../../api/post/delete.js";
import { showToast } from "../../utilities/toast.js";

/**
 * Handles deletion of a blog post.
 * Prompts the user for confirmation via a clickable toast,
 * calls the delete API, removes the post from the DOM on success,
 * and shows alerts.
 *
 * @param {Event} event - The click event triggered by the delete button.
 * @returns {Promise<void>} - Resolves after attempting to delete the post.
 */
export async function onDeletePost(event) {
  event.preventDefault();

  const postId = event.target.dataset.id;

  if (!postId) {
    console.error("Post ID not found.");
    showToast("Post ID not found.", "error");
    return;
  }

  // Toast-based confirmation
  Toastify({
    text: "Are you sure you want to delete this post? Click to confirm.",
    duration: 5000, // auto-close after 5 seconds
    gravity: "top",
    position: "right",
    close: true,
    style: { background: "#f59e0b", color: "#fff", cursor: "pointer" },
    onClick: async () => {
      try {
        const result = await deletePost(postId);

        if (result.success) {
          const postElement = document.getElementById(`post-${postId}`);
          if (postElement) postElement.remove();

          showToast(result.message || "Post deleted successfully!", "success");

          setTimeout(() => {
            window.location.href = "/";
          }, 1500);
        } else {
          console.error("Failed to delete post:", result.error);
          showToast("Error: Could not delete the post.", "error");
        }
      } catch (error) {
        console.error("Unexpected error:", error);
        showToast("Error: Could not delete the post.", "error");
      }
    },
  }).showToast();
}
