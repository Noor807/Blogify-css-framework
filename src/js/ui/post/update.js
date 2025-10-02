import { updatePost } from "../../api/post/update.js";
import { showToast } from "../../utilities/toast.js";
/**
 * Handles updating an existing blog post.
 * Collects input from the form, validates required fields,
 * sends the data to the API, and shows toast notifications.
 *
 * @param {SubmitEvent} e - The form submit event triggered by the user.
 * @returns {Promise<void>} - Resolves after attempting to update the blog post.
 *
 * @example
 * const form = document.getElementById("update-blog-form");
 * form.addEventListener("submit", onUpdatePost);
 */

export async function onUpdatePost(e) {
  e.preventDefault();

  const id = e.target.id.value.trim();
  const title = e.target.title.value.trim();
  const body = e.target.body.value.trim();
  const mediaUrl = e.target.mediaUrl.value.trim();
  const mediaAlt = e.target.mediaAlt.value.trim();
  const tags = e.target.tags.value
    ? e.target.tags.value.split(",").map((tag) => tag.trim())
    : [];
  const media = {
    url: mediaUrl,
    alt: mediaAlt,
  };

  // Validate required fields
  if (!title || !body) {
    showToast("Title and body are required.", "warning");
    return;
  }

  try {
    const response = await updatePost(id, { title, body, tags, media });

    if (response) {
      showToast("Post updated successfully!", "success");
      // Redirect after short delay so user sees toast
      setTimeout(() => {
        window.location.href = `/post/?post=${id}`;
      }, 1500);
    } else {
      showToast("Error updating the post.", "error");
    }
  } catch (error) {
    console.error("Update error:", error);
    showToast("Unexpected error while updating the post.", "error");
  }
}
