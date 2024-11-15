import { readPost } from "../../api/post/read";
import { setLogoutListener } from "../../ui/global/logout";
import { onUpdatePost } from "../../ui/post/update";
import { authGuard } from "../../utilities/authGuard";
import { populateInputForm } from "../../utilities/populateInputForm";

setLogoutListener()


authGuard();
const urlSearch = new URLSearchParams(window.location.search);
const postId = urlSearch.get("post");
const response = await readPost(postId)
console.log(response);

populateInputForm(response)

const form = document.forms.editPost;

form.addEventListener('submit' , onUpdatePost)







