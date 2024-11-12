/**
 * Passses data to the createPost function in api/post and handles the response
 */


import { deletePost } from "../../api/post/delete"; // Import the API delete function

// UI delete function
export async function onDeletePost(event) {
  event.preventDefault();

  const postId = event.target.dataset.id;

  if (!postId) {
    console.error("Post ID not found.");
    return;
  }

  // Step 1: Confirm deletion
  const confirmation = confirm("Are you sure you want to delete this post?");
  if (!confirmation) return;

  try {
    // Step 2: Call the API delete function
    const result = await deletePost(postId);

    if (result.success) {
      // Step 3: Remove the post from the UI
      const postElement = document.getElementById(`post-${postId}`);
      if (postElement) {
        postElement.remove();
      }
      alert(result.message); // "Post deleted successfully"
      window.location.href = '/'
    } else {
      console.error("Failed to delete post:", result.error);
      alert("Error: Could not delete the post.");
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    alert("Error: Could not delete the post.");
  }
}

