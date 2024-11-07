// export function renderBlogPosts(postsArray) {
//     const blogContainer = document.querySelector('#blogContainer');
  
//     // Check if blogContainer exists in the DOM
//     if (!blogContainer) {
//       console.error('No element with id "blogContainer" found.');
//       return;
//     }
  
//     postsArray.forEach(post => {
//       // Validate post object structure
//       const { id,media, title, author, created, tags } = post;
  
//       // Create the <a> element
//       const postLink = document.createElement('a');
//       postLink.className = 'blog-dev';
//       postLink.href = `/post/?post=${id}`;
  
//       // Create and append the <img> element
//       const img = document.createElement('img');
//       img.src = media.url || '';      // Set image source, default empty string if undefined
//       img.alt = media.Alt || '';       // Set alt text, default empty string if undefined
//       postLink.appendChild(img);
  
//       // Create the content <div>
//       const contentDiv = document.createElement('div');
  
//       // Title <h2>
//       const titleElement = document.createElement('h2');
//       titleElement.className = 'title';
//       titleElement.textContent = title || 'Untitled Post';  // Default text if title is undefined
//       contentDiv.appendChild(titleElement);
  
//       // Author <p>
//       const authorElement = document.createElement('p');
//       authorElement.className = 'author';
//       authorElement.textContent = author.name || 'Unknown Author';
//       contentDiv.appendChild(authorElement);
  
//       // Created date <p>
//       const createdElement = document.createElement('p');
//       createdElement.className = 'created';
//       createdElement.textContent = created.slice(0,10) || 'Unknown Date';
//       contentDiv.appendChild(createdElement);
  
//       // Tags <p>
//       const tagsElement = document.createElement('p');
//       tagsElement.className = 'tags';
//       tagsElement.textContent = tags ? tags.join(', ') : 'No Tags';
//       contentDiv.appendChild(tagsElement);
  
//       // Append content div to the post link
//       postLink.appendChild(contentDiv);
  
//       // Append the post link to the blog container
//       blogContainer.appendChild(postLink);
//     });
//   }







  export function renderBlogPosts(postsArray) {
    const blogContainer = document.querySelector('#blogContainer');
  
    if (!blogContainer) {
      console.error('No element with id "blogContainer" found.');
      return;
    }
  
    postsArray.forEach(post => {
      // Destructure with default values for safety
      const {
        id = 'unknown', 
        media = '', 
        title = 'Untitled Post', 
        author = 'Unknown Author', 
        created = 'Date', 
        tags = []
      } = post || {};  // Handle cases where `post` itself might be null/undefined
  
      // Create the <a> element
      const postLink = document.createElement('a');
      postLink.className = 'blog-dev';
      postLink.href = `/post/?post=${id}`;
  
      // Create and append the <img> element
      const img = document.createElement('img');
      img.src = media.url;      
      img.alt = media.alt;       
      postLink.appendChild(img);
  
      // Create the content <div>
      const contentDiv = document.createElement('div');
  
      // Title <h2>
      const titleElement = document.createElement('h2');
      titleElement.className = 'title';
      titleElement.textContent = title;
      contentDiv.appendChild(titleElement);
  
      // Author <p>
      const authorElement = document.createElement('p');
      authorElement.className = 'author';
      authorElement.textContent = author.name;
      contentDiv.appendChild(authorElement);
  
      // Created date <p>
      const createdElement = document.createElement('p');
      createdElement.className = 'created';
      createdElement.textContent = created.slice(0,10);
      contentDiv.appendChild(createdElement);
  
      // Tags <p>
      const tagsElement = document.createElement('p');
      tagsElement.className = 'tags';
      tagsElement.textContent = tags.join(', ');
      contentDiv.appendChild(tagsElement);
  
      // Append content div to the post link
      postLink.appendChild(contentDiv);
  
      // Append the post link to the blog container
      blogContainer.appendChild(postLink);
    });
  }
  
  