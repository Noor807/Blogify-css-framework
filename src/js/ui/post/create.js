/**
 * Handles the creation of a new blog post by collecting data from a form,
 * validating input, and calling the API to create the post.
 *
 * @param {Event} e - The submit event triggered by the form submission.
*/

import { createBlogPost } from "../../api/post/create.js";

export async function onCreatePost(e) {
  e.preventDefault();

  const title = e.target.title.value.trim();
  const body = e.target.body.value.trim();
  const mediaUrl = e.target.mediaUrl.value.trim();
  const mediaAlt = e.target.mediaAlt.value.trim();
  const selectedTags = e.target.tags.value
    ? e.target.tags.value.split(",").map((tag) => tag.trim())
    : [];

  if (!title || !body) {
    alert("Title and body are required.");
    return;
  }

  const newPost = {
    title: title,
    body: body,
    tags: selectedTags,
    media: mediaUrl || mediaAlt ? { url: mediaUrl, alt: mediaAlt } : null,
  };

  try {
    const result = await createBlogPost(newPost);
    window.location.href = "/";
    alert("Blog post created successfully!");
    document.getElementById("create-blog-form").reset();
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to create blog post: " + error.message);
  }

}
