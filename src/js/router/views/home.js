import { authGuard } from "../../utilities/authGuard";
import { setLogoutListener } from "../../ui/global/logout";
import { readPosts } from "../../api/post/read";
import { renderBlogPosts } from '/src/js/ui/domBuilder/homeBuilder.js';
authGuard();

setLogoutListener()
const user ='haniah123'
const limit = 12
const page = 1
const post = await readPosts( 12, 1)
console.log(post);
renderBlogPosts(post.data) 

  