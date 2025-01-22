import { readPost } from "../../api/post/read";

/**
 * Fetches and renders a single blog post inside the container with ID "singlePostContainer".
 *
 * @param {string} postId - The ID of the blog post to fetch.
 */
export async function RenderSinglePost(postId) {
  try {
    const data = await readPost(postId);

    const postContainer = document.querySelector("#singlePostContainer");
    if (!postContainer) {
      console.error('No element with id "singlePostContainer" found.');
      return;
    }

    // Title Element
    const titleElement = document.createElement("h2");
    titleElement.textContent = data.data.title;
    titleElement.classList.add("text-xl", "sm:text-3xl", "lg:text-2xl", "font-semibold", "text-gray-900", "mt-4");

    // Author Element
    const authorElement = document.createElement("p");
    authorElement.textContent = `Author: ${data.data.author.name || "Unknown"}`;
    authorElement.classList.add("text-lg", "text-gray-500", "mt-2");

    // Date Element
    const dateElement = document.createElement("p");
    dateElement.textContent = `Published: ${data.data.created.slice(0, 10) || "Date unknown"}`;
    dateElement.classList.add("text-lg", "text-gray-500", "mt-1");

    // Content Element
    const contentElement = document.createElement("div");
    contentElement.innerHTML = data.data.body;
    contentElement.classList.add("text-base", "sm:text-lg", "lg:text-xl", "text-gray-700", "mt-4");

    // Image Element
    const imageElement = document.createElement("img");
    imageElement.src = data.data.media?.url || "";
    imageElement.alt = data.data.media?.alt || "Blog image";
    imageElement.classList.add( "w-full", "rounded-lg", "mt-4", "object-cover", "lg:w-[900px]");

    // Append the elements to the post container
    postContainer.appendChild(titleElement);
    postContainer.appendChild(authorElement);
    postContainer.appendChild(dateElement);
    postContainer.appendChild(contentElement);
    postContainer.appendChild(imageElement);
  } catch (error) {
    console.error("Error fetching and displaying the post:", error);
  }
}
