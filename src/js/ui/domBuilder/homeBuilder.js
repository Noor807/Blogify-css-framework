/**
 * Renders blog posts into the DOM inside the element with ID "blogContainer".
 * Each post is displayed with an image, title, author, creation date, and tags.
 *
 * @param {Array<Object>} array - List of blog post objects.
 *   @param {string} [array[].id="unknown"] - Unique ID of the post.
 *   @param {Object} [array[].media={}] - Media details.
 *     @param {string} [array[].media.url=""] - Media image URL.
 *     @param {string} [array[].media.alt="No description"] - Media image alt text.
 *   @param {string} [array[].title="Untitled Post"] - Post title.
 *   @param {Object} [array[].author={}] - Author details.
 *     @param {string} [array[].author.name="Unknown Author"] - Author name.
 *   @param {string} [array[].created="Date"] - Creation date in ISO format.
 *   @param {Array<string>} [array[].tags=[]] - Tags associated with the post.*/

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
    // postLink.className = "blog-dev";
     postLink.className = "block bg-gray-200 rounded-lg shadow-md hover:shadow-lg hover:scale-90 transition-all duration-500 ease-in-out mb-6 p-4";
    postLink.href = `/post/?post=${id}`;

    const img = document.createElement("img");
    img.src = media?.url || "";
    img.alt = media?.alt || "No description";
      img.className = "w-full h-48 object-cover rounded-t-lg";
    postLink.appendChild(img);

    const contentDiv = document.createElement("div");
    contentDiv.className = "pt-4"

    const titleElement = document.createElement("h2");
    // titleElement.className = "title";
       titleElement.className = "text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 hover:text-blue-600 transition duration-200";
    titleElement.textContent = title;
    contentDiv.appendChild(titleElement);

    const authorElement = document.createElement("p");
    // authorElement.className = "author";
    authorElement.className = "text-sm text-gray-600 mt-2";
    authorElement.textContent = author.name || "Unknown Author";
    contentDiv.appendChild(authorElement);

    const createdElement = document.createElement("p");
    // createdElement.className = "created";
    createdElement.className = "text-xs text-gray-500 mt-1";
    createdElement.textContent = created
      ? created.slice(0, 10)
      : "Unknown Date";
    contentDiv.appendChild(createdElement);

    const tagsElement = document.createElement("p");
    // tagsElement.className = "tags";
    tagsElement.className = "text-sm text-gray-700 mt-2";
    tagsElement.textContent = tags.join(", ");
    contentDiv.appendChild(tagsElement);

    postLink.appendChild(contentDiv);

    blogContainer.appendChild(postLink);
  });
}
