
import { authGuard } from "../../utilities/authGuard";
import { setLogoutListener } from "../../ui/global/logout";
import { readPosts } from "../../api/post/read";
import { renderBlogPosts } from "../../ui/domBuilder/homeBuilder";
import { fetchPosts, goLeft, goRight } from "../../ui/paginator/homePagination";

authGuard();
setLogoutListener();


// Initial fetch to load the first page
fetchPosts();  // Loads the first page by default
const searchBar = document.querySelector('#searchInput');
if(searchBar){
    searchBar.addEventListener('keyup' , ()=>{
        const tag = searchBar.value.trim()
        if (tag==='') {
            fetchPosts()   
        } else {
            fetchPosts(1, tag) 
            
        }
    })
}else{
    console.error('searchbar not found')
}
// Set up the event listeners for the pagination buttons
document.getElementById('left').addEventListener('click', goLeft);
document.getElementById('right').addEventListener('click', goRight);



