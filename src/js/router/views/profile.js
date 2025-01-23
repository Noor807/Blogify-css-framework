import { setLogoutListener } from "../../ui/global/logout";
import { authGuard } from "../../utilities/authGuard";
setLogoutListener();

authGuard();


const hamburgerBtn = document.getElementById("hamburger-btn");
const navbarLinks = document.getElementById("navbar-links");

hamburgerBtn.addEventListener("click", () => {
    navbarLinks.classList.toggle("hidden");
});



const postsBtn = document.getElementById('posts-btn');
const followersBtn = document.getElementById('followers-btn');
const followingBtn = document.getElementById('following-btn');

// Get the sections
const postsContainer = document.getElementById('posts-container');
const followersSection = document.getElementById('followers-section');
const followingSection = document.getElementById('following-section');

// Function to hide all sections
const hideAllSections = () => {
  postsContainer.classList.add('hidden');
  followersSection.classList.add('hidden');
  followingSection.classList.add('hidden');
};

// Event listeners for the buttons
postsBtn.addEventListener('click', () => {
  hideAllSections();
  postsContainer.classList.remove('hidden');
});

followersBtn.addEventListener('click', () => {
  hideAllSections();
  followersSection.classList.remove('hidden');
});

followingBtn.addEventListener('click', () => {
  hideAllSections();
  followingSection.classList.remove('hidden');
});