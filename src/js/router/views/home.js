import { authGuard } from "../../utilities/authGuard";
import { setLogoutListener } from "../../ui/global/logout";
import { fetchPosts, goLeft, goRight } from "../../ui/paginator/homePagination";

authGuard();
setLogoutListener();

fetchPosts();
// Set up the event listeners for the pagination buttons
document.getElementById("left").addEventListener("click", goLeft);
document.getElementById("right").addEventListener("click", goRight);
