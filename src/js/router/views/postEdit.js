import { readPost } from "../../api/post/read";
import { setLogoutListener } from "../../ui/global/logout";
import { authGuard } from "../../utilities/authGuard";
import { populateInputForm } from "../../utilities/populateInputForm";
setLogoutListener()


authGuard();
const urlSearch = new URLSearchParams(window.location.search);
const postId = urlSearch.get("post");
const response = await readPost(postId)
console.log(response);

populateInputForm(response)
