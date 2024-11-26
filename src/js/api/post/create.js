/**
 * Creates a new post by sending the data to the API.
 *
 * @param {Object} data - The post parameters.
 * @param {string} data.title - The title of the post (required).
 * @param {string} [data.body] - The body of the post (optional).
 * @param {string[]} [data.tags] - Array of tags associated with the post (optional).
 * @param {Object} [data.media] - Media object containing URL and alt text (optional).
 * @param {string} [data.media.url] - The URL of the media (optional).
 * @param {string} [data.media.alt] - Alt text for the media (optional).
 * @returns {Promise<Object>} The created post data from the API.
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

export async function createBlogPost({ title, body, tags, media }) {
  const blogPost = {
    title,
    body,
    tags,
    media,
  };

  const response = await fetch(API_SOCIAL_POSTS, {
    method: "POST",
    headers: headersObject,

    body: JSON.stringify(blogPost),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Error creating blog post:", errorData);
    throw new Error(`Failed to create blog post: ${errorData.message}`);
  }

  const result = await response.json();
  return result;
}
