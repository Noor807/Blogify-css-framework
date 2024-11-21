import { readPosts } from "../../api/post/read";
import { renderBlogPosts } from "../domBuilder/homeBuilder";

// Keep track of the current page
let currentPage = 1;  // Start on page 1
const limit = 12
// Exported function to fetch and display posts for a given page
export const fetchPosts = async (page = 1, tag='') => {
  try {
    // Fetch posts using the existing readPosts function
    const { data, meta } = await readPosts(limit,page,tag='');  // Destructure the response
document.getElementById('blogContainer').innerHTML = ''
    // Pass the data to your homeBuilder function
    renderBlogPosts(data);

    // Update pagination buttons based on the fetched meta data
    handlePaginationButtons(meta);

    // Update the current page
    currentPage = page;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Helper function to enable/disable pagination buttons
const handlePaginationButtons = (meta) => {
  const leftButton = document.getElementById('left');
  const rightButton = document.getElementById('right');
  
  leftButton.disabled = meta.isFirstPage;  // Disable left if it's the first page
  rightButton.disabled = meta.isLastPage;  // Disable right if it's the last page
};

// Exported function for navigating to the previous page
export const goLeft = () => {
  if (currentPage > 1) {
    fetchPosts(currentPage - 1);  // Go to the previous page
  }
};

// Exported function for navigating to the next page
export const goRight = () => {
  fetchPosts(currentPage + 1);  // Go to the next page
};
