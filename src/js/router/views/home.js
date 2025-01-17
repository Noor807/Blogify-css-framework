import { authGuard } from "../../utilities/authGuard";
import { setLogoutListener } from "../../ui/global/logout";
import { fetchPosts, goLeft, goRight } from "../../ui/paginator/homePagination";

authGuard();
setLogoutListener();

fetchPosts();

document.getElementById("left").addEventListener("click", goLeft);
document.getElementById("right").addEventListener("click", goRight);
document.getElementById("hamburger-btn").addEventListener("click", () => {
const navbarLinks = document.getElementById("navbar-links");
navbarLinks.classList.toggle("hidden");
});