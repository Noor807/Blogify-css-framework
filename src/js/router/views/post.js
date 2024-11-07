alert("Single Post Page");

export async function RenderSinglePost(postId) {
    try {
      // Fetch the post from the API
      const response = await fetch(`${API_BASE}/social/posts/${postId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch blog post");
      }
  
      // Parse the response data
      const data = await response.json();
  
      // Select the container where the post will be displayed
      const postContainer = document.querySelector("#singlePostContainer");
      if (!postContainer) {
        console.error('No element with id "singlePostContainer" found.');
        return;
      }
  
      // Create and append post content
      const titleElement = document.createElement("h1");
      titleElement.textContent = data.title;
  
      const authorElement = document.createElement("p");
      authorElement.textContent = `Author: ${data.author.name || "Unknown"}`;
  
      const dateElement = document.createElement("p");
      dateElement.textContent = `Published: ${data.created || "Date unknown"}`;
  
      const contentElement = document.createElement("div");
      contentElement.innerHTML = data.body;
  
      const imageElement = document.createElement("img");
      imageElement.src = data.media?.url || "";
      imageElement.alt = data.media?.alt || "Blog image";
  
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
