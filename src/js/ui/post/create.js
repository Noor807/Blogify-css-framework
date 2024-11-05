/**
 * Passses data to the createPost function in api/post and handles the response
 */

import { createBlogPost } from "../../api/post/create.js"; // Adjust the import path as needed

/// Assuming createBlogPost function is already defined and imported

export async function onCreatePost(e) {
  e.preventDefault(); // Prevent the form from submitting the traditional way

  // Get values from the form
  const title = document.getElementById("title").value.trim();
  const body = document.getElementById("text-area").value.trim();
  const mediaUrl = document.getElementById("mediaUrl").value.trim();
  const mediaAlt = document.getElementById("mediaAlt").value.trim();
  const selectedTags = Array.from(
    document.querySelectorAll("input[name='tags']:checked")
  ).map((tag) => tag.value);

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

  // Get the username from local storage
  const username = localStorage.getItem("adminUser");
  if (!username) {
    alert("Username is not available in local storage.");
    return;
  }

  // Call the API function to create the blog post
  try {
    const result = await createBlogPost(username, newPost);
    alert("Blog post created successfully!");
    console.log("Created post:", result);
    // Optionally reset the form or redirect the user
    document.getElementById("create-blog-form").reset();
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to create blog post: " + error.message);
  }
}
