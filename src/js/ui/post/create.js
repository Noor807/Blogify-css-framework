/**
 * Passses data to the createPost function in api/post and handles the response
 */

import { createBlogPost } from "../../api/post/create.js"; // Adjust the import path as needed

/// Assuming createBlogPost function is already defined and imported

export async function onCreatePost(e) {
  e.preventDefault(); // Prevent the form from submitting the traditional way

  // Get values from the form
  const title = e.target.title.value.trim();
  const body = e.target.body.value.trim();
  const mediaUrl = e.target.mediaUrl.value.trim();
  const mediaAlt = e.target.mediaAlt.value.trim();
  const selectedTags = e.target.tags.value ? e.target.tags.value .split(',' ).map(
    (tag) => tag.trim()
  ): [];
  

  // Validate required fields
  if (!title || !body) {
    alert("Title and body are required.");
    return;
  }

  // Create the blog post object
  const newPost = {
    title: title,
    body: body,
    tags: selectedTags,
    media: mediaUrl || mediaAlt ? { url: mediaUrl, alt: mediaAlt } : null,
  };


  // Call the API function to create the blog post
  try {
    const result = await createBlogPost(newPost);
    alert("Blog post created successfully!");
    console.log("Created post:", result);
    // Optionally reset the form or redirect the user
    document.getElementById("create-blog-form").reset();
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to create blog post: " + error.message);
  }
}
