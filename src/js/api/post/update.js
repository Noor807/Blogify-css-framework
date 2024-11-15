import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

/**
 * Updates an existing post by sending updated data to the API.
 *
 * @param {string|number} id - The ID of the post to update.
 * @param {Object} params - The updated post parameters.
 * @param {string} [params.title] - The updated title of the post.(optional)
 * @param {string} [params.body] - The updated body of the post.(optional)
 * @param {string[]} [params.tags] - Array of updated tags associated with the post.(optional)
 * @param {Object} [params.media] - Updated media object containing URL and alt text.(optional)
 * @param {string} [params.media.url] - The updated URL of the media.
 * @param {string} [params.media.alt] - Updated alt text for the media.
 * @returns {Promise<Object>} The updated post data from the API.
 * @throws {Error} If the API request fails.
 */
const headersObject = headers();

headersObject.append("Content-Type", "application/json");

const token = localStorage.getItem("token");
if (token) {
  headersObject.append("Authorization", `Bearer ${token}`);
}

export async function updatePost(id, { title, body, tags = [], media = {} }) {
    const API_URL = `${API_SOCIAL_POSTS}/${id}`;
   

    // Build the request body with mandatory fields
    const requestBody = {
        title,
        body,
    };

    // Conditionally add optional fields if they are provided
    if (tags.length > 0) {
        requestBody.tags = tags;
    }

    if (media.url) {
        requestBody.media = media;
    }

    try {
        const response = await fetch(API_URL, {
            method: 'PUT',
            headers: headersObject,
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error("Failed to update the post");
        }

        return await response.json();
    } catch (error) {
        console.error("Error updating the post:", error);
        throw error;
    }
}
