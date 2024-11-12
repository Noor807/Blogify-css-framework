import { updatePost } from "../../api/post/update";

/**
 * Passses data to the createPost function in api/post and handles the response
 */
export async function onUpdatePost(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

  // Get values from the form
  const title = e.target.title.value.trim();
  const body = e.target.body.value.trim();
  const mediaUrl = e.target.mediaUrl.value.trim();
  const mediaAlt = e.target.mediaAlt.value.trim();
  const tags = e.target.tags.value ? e.target.tags.value .split(',' ).map(
    (tag) => tag.trim()
  ): [];
const media = {
    url: mediaUrl,
    alt: mediaAlt,
    
}

  if (!title || !body) {
    alert("Title and body are required.");
    return;
  }
  

  try {
    const response = await  updatePost(id, { title, body, tags , media  })
    if (response) {
        alert("post is updated successfully")
        
    }else{
        alert("error updating")
    }

    
  } catch (error) {
    console.error("update error" , error)
    
  }
}
