import { RenderSinglePost } from "../../ui/domBuilder/singlePostBuilder";

const urlSearch = new URLSearchParams(window.location.search)
const postId = urlSearch.get('post')
 console.log(postId);
 RenderSinglePost(postId)