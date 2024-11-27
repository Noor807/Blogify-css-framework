/**
 * Fills the "editPost" form with data from the provided blog post object.
 *
 * @param {Object} post - The blog post data.
 * @returns {void}
 */

export function populateInputForm(post) {
  document.forms.editPost.title.value = post.data.title;
  document.forms.editPost.body.value = post.data.body;
  document.forms.editPost.tags.value = post.data.tags
    ? post.data.tags.join(", ")
    : "";
  document.forms.editPost.mediaUrl.value = post.data.media
    ? post.data.media.url
    : "";
  document.forms.editPost.mediaAlt.value = post.data.media
    ? post.data.media.alt
    : "";
  document.forms.editPost.id.value = post.data.id;
}

