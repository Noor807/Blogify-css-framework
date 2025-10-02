import { createBlogPost } from "../../api/post/create.js";
import { showAlert } from "../../utilities/alerts.js";

/**
 * Handles the creation of a new blog post.
 * Collects input from the form, validates required fields,
 * sends the data to the API, and shows alerts based on success or failure.
 *
 * @param {SubmitEvent} e - The form submit event triggered by the user.
 * @returns {Promise<void>} - Resolves after attempting to create the blog post.
 *
 * @example
 * const form = document.getElementById("create-blog-form");
 * form.addEventListener("submit", onCreatePost);
 */
export async function onCreatePost(e) {
  e.preventDefault();

  const title = e.target.title.value.trim();
  const body = e.target.body.value.trim();
  const mediaUrl = e.target.mediaUrl.value.trim();
  const mediaAlt = e.target.mediaAlt.value.trim();
  const selectedTags = e.target.tags.value
    ? e.target.tags.value.split(",").map((tag) => tag.trim())
    : [];

  // Validate required fields
  if (!title || !body) {
    showAlert("Title and body are required.", "warning");
    return;
  }

  const newPost = {
    title,
    body,
    tags: selectedTags,
    media: mediaUrl || mediaAlt ? { url: mediaUrl, alt: mediaAlt } : null,
  };

  try {
    const result = await createBlogPost(newPost);

    showAlert("Blog post created successfully!", "success");

    // Reset form
    document.getElementById("create-blog-form").reset();

    // Redirect after short delay so user sees alert
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  } catch (error) {
    console.error("Error creating blog post:", error);
    showAlert("Failed to create blog post: " + error.message, "error");
  }
}
