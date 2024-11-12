import { API_SOCIAL_POSTS, API_SOCIAL_PROFILES } from "../constants";
const token = localStorage.getItem('token');
const apiKey = localStorage.getItem('apiKey');
    
/**
 * Reads a single post by its ID.
 *
 * @param {string|number} id - The ID of the post to read.
 * @returns {Promise<object>} The response data.
 * @throws {Error} If the API request fails.
 */
//export async function readPost(id) {}

export async function readPost(id) {
    try {
      const response = await fetch(`${API_SOCIAL_POSTS}/${id}?_author=true`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
         'X-Noroff-API-Key': apiKey,
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch the post");
      }
  
      const postData = await response.json();
      return postData;
    } catch (error) {
      console.error("Error fetching post:", error);
      throw error;
    }
  }
  
  
/**
 * Reads multiple posts with optional pagination and tagging.
 *
 * @param {number} [limit=12] - The maximum number of posts to return.
 * @param {number} [page=1] - The page number for pagination.
 * @param {string} [tag] - An optional tag to filter posts.
 * @returns {Promise<Object>} An object containing an array of posts in the `data` field, and information in a `meta` field.
 * @throws {Error} If the API request fails.
 */
export async function readPosts(limit = 12, page = 1, tag) {
    const URL = `${API_SOCIAL_POSTS}?limit=${limit}&page=${page}&_author=true${tag ? `&tag=${tag}` : ''}`;
    
    try {
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
              'X-Noroff-API-Key': apiKey,
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error:', errorData);
            throw new Error(`Failed to fetch blog posts: ${errorData.message}`);
        }
        
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Failed to fetch blog posts', error);
        throw error; // Re-throw the error to handle it where the function is called if needed
    }
}



/**
 * Reads multiple posts by a specific user with optional pagination and tagging.
 *
 * @param {string} username - The username of the user whose posts to read.
 * @param {number} [limit=12] - The maximum number of posts to return.
 * @param {number} [page=1] - The page number for pagination.
 * @param {string} [tag] - An optional tag to filter posts.
 * @returns {Promise<object>} Object with data and meta fields.
 * @throws {Error} If the API request fails.
 */
export async function readPostsByUser(username, limit = 12, page = 1, tag) {
     
   
}
