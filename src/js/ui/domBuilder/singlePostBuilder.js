import { readPost } from "../../api/post/read";

export async function RenderSinglePost(postId) {
  try {
    // Fetch the post data using `readPost`
    const data = await readPost(postId);
    console.log(data);

    // Select the container where the post will be displayed
    const postContainer = document.querySelector("#singlePostContainer");
    if (!postContainer) {
      console.error('No element with id "singlePostContainer" found.');
      return;
    }

    // Create and append post content
    const titleElement = document.createElement("h1");
    titleElement.textContent = data.data.title;

    const authorElement = document.createElement("p");
    authorElement.textContent = `Author: ${data.data.author.name || "Unknown"}`;

    const dateElement = document.createElement("p");
    dateElement.textContent = `Published: ${
      data.data.created || "Date unknown"
    }`;

    const contentElement = document.createElement("div");
    contentElement.innerHTML = data.data.body;

    const imageElement = document.createElement("img");
    imageElement.src = data.data.media?.url || "";
    imageElement.alt = data.data.media?.alt || "Blog image";

    // Append elements to the post container
    postContainer.appendChild(titleElement);
    postContainer.appendChild(authorElement);
    postContainer.appendChild(dateElement);
    postContainer.appendChild(contentElement);
    postContainer.appendChild(imageElement);
  } catch (error) {
    console.error("Error fetching and displaying the post:", error);
  }
}
