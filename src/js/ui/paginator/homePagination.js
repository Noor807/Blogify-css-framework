/**
 * Fetches blog posts for a specific page and optional tag, then renders them in the DOM.
 * Updates pagination buttons based on metadata.
 *
 * @param {number} [page=1] - The page number to fetch.
 * @param {string} [tag=""] - Optional tag filter for the posts.
*/

import { readPosts } from "../../api/post/read";
import { renderBlogPosts } from "../domBuilder/homeBuilder";

let currentPage = 1;
const limit = 12;

export const fetchPosts = async (page = 1, tag = "") => {
  try {
    const { data, meta } = await readPosts(limit, page, (tag = ""));
    document.getElementById("blogContainer").innerHTML = "";

    renderBlogPosts(data);

    handlePaginationButtons(meta);

    currentPage = page;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const handlePaginationButtons = (meta) => {
  const leftButton = document.getElementById("left");
  const rightButton = document.getElementById("right");

  leftButton.disabled = meta.isFirstPage;
  rightButton.disabled = meta.isLastPage;
};

export const goLeft = () => {
  if (currentPage > 1) {
    fetchPosts(currentPage - 1);
  }
};

export const goRight = () => {
  fetchPosts(currentPage + 1);
};
