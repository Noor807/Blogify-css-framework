import { RenderSinglePost } from "../../ui/domBuilder/singlePostBuilder";
import { setLogoutListener } from "../../ui/global/logout";
import { onDeletePost } from "../../ui/post/delete";
setLogoutListener();
const urlSearch = new URLSearchParams(window.location.search);
const postId = urlSearch.get("post");
console.log(postId);
RenderSinglePost(postId);

const delButton = document.querySelector(".del-btn");
delButton.setAttribute("data-id", postId);
delButton.addEventListener("click", onDeletePost);

const editButton = document.querySelector(".edit-btn");
editButton.addEventListener("click", () => {
  window.location.href = `/post/edit/?post=${postId}`;
});
