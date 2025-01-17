import { RenderSinglePost } from "../../ui/domBuilder/singlePostBuilder";
import { setLogoutListener } from "../../ui/global/logout";
import { onDeletePost } from "../../ui/post/delete";
setLogoutListener();
const urlSearch = new URLSearchParams(window.location.search);
const postId = urlSearch.get("post");
RenderSinglePost(postId);

const delButton = document.querySelector(".del-btn");
delButton.setAttribute("data-id", postId);
delButton.addEventListener("click", onDeletePost);

const editButton = document.querySelector(".edit-btn");
editButton.addEventListener("click", () => {
  window.location.href = `/post/edit/?post=${postId}`;
});

const hamburgerBtn = document.getElementById("hamburger-btn");
const navbarLinks = document.getElementById("navbar-links");

hamburgerBtn.addEventListener("click", () => {
    navbarLinks.classList.toggle("hidden");
});
