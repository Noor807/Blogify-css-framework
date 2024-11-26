export function renderBlogPosts(array) {
  const blogContainer = document.querySelector("#blogContainer");

  if (!blogContainer) {
    console.error('No element with id "blogContainer" found.');
    return;
  }

  array.forEach((post) => {
    const {
      id = "unknown",
      media = {},
      title = "Untitled Post",
      author = {},
      created = "Date",
      tags = [],
    } = post || {};

    const postLink = document.createElement("a");
    postLink.className = "blog-dev";
    postLink.href = `/post/?post=${id}`;

    const img = document.createElement("img");
    img.src = media?.url || "";
    img.alt = media?.alt || "No description";
    postLink.appendChild(img);

    const contentDiv = document.createElement("div");

    const titleElement = document.createElement("h2");
    titleElement.className = "title";
    titleElement.textContent = title;
    contentDiv.appendChild(titleElement);

    const authorElement = document.createElement("p");
    authorElement.className = "author";
    authorElement.textContent = author.name || "Unknown Author";
    contentDiv.appendChild(authorElement);

    const createdElement = document.createElement("p");
    createdElement.className = "created";
    createdElement.textContent = created
      ? created.slice(0, 10)
      : "Unknown Date";
    contentDiv.appendChild(createdElement);

    const tagsElement = document.createElement("p");
    tagsElement.className = "tags";
    tagsElement.textContent = tags.join(", ");
    contentDiv.appendChild(tagsElement);

    postLink.appendChild(contentDiv);

    blogContainer.appendChild(postLink);
  });
}
