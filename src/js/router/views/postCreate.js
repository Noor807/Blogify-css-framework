import { setLogoutListener } from "../../ui/global/logout";
import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "../../utilities/authGuard";

setLogoutListener();

authGuard();

const form = document.forms.createPost;

form.addEventListener("submit", onCreatePost);




const hamburgerBtn = document.getElementById("hamburger-btn");
const navbarLinks = document.getElementById("navbar-links");

hamburgerBtn.addEventListener("click", () => {
    navbarLinks.classList.toggle("hidden");
});