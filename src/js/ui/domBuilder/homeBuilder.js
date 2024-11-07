export function renderBlogPosts(postsArray) {
  const blogContainer = document.querySelector("#blogContainer");

  if (!blogContainer) {
    console.error('No element with id "blogContainer" found.');
    return;
  }

  postsArray.forEach((post) => {
    // Destructure with default values for safety
    const {
      id = "unknown",
      media = {}, // Default to an empty object to handle cases where media might be undefined
      title = "Untitled Post",
      author = {}, // Default to an empty object to handle cases where author might be undefined
      created = "Date",
      tags = [],
    } = post || {}; // Handle cases where `post` itself might be null/undefined

    // Create the <a> element
    const postLink = document.createElement("a");
    postLink.className = "blog-dev";
    postLink.href = `/post/?post=${id}`;

    // Create and append the <img> element
    const img = document.createElement("img");
    img.src = media?.url || ""; // Default to an empty string if media.url is undefined
    img.alt = media?.alt || "No description"; // Default alt text if media.alt is undefined
    postLink.appendChild(img);

    // Create the content <div>
    const contentDiv = document.createElement("div");

    // Title <h2>
    const titleElement = document.createElement("h2");
    titleElement.className = "title";
    titleElement.textContent = title;
    contentDiv.appendChild(titleElement);

    // Author <p>
    const authorElement = document.createElement("p");
    authorElement.className = "author";
    authorElement.textContent = author.name || "Unknown Author"; // Default to 'Unknown Author' if author.name is undefined
    contentDiv.appendChild(authorElement);

    // Created date <p>
    const createdElement = document.createElement("p");
    createdElement.className = "created";
    createdElement.textContent = created
      ? created.slice(0, 10)
      : "Unknown Date"; // Fallback for invalid date
    contentDiv.appendChild(createdElement);

    // Tags <p>
    const tagsElement = document.createElement("p");
    tagsElement.className = "tags";
    tagsElement.textContent = tags.join(", ");
    contentDiv.appendChild(tagsElement);

    // Append content div to the post link
    postLink.appendChild(contentDiv);

    // Append the post link to the blog container
    blogContainer.appendChild(postLink);
  });
}
