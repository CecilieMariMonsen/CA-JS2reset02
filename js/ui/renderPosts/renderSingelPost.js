/**
 * this function will render a single post
 * it wil make a div element with the post data and append it to the parent element
 * it will also add h2, p, img and p elements to the div element
 *  
 */


export function renderPost(parent, post, postId) {
    const container = document.querySelector(parent);

    container.innerHTML = "";

    const postHtml = createPost(post, postId);

    container.append(postHtml);

    console.log(postHtml);
    console.log(container, post);
}

function createPost(post, postId) {
    const { title: heading, body, media, created } = post;

    const postContainer = document.createElement("div");
    postContainer.classList.add("singel-post", "card", "m-2");

    const title = document.createElement("h2");
    title.textContent = heading;

    const content = document.createElement("p");
    content.textContent = body;
 
      const image = document.createElement("img");
      image.src = media;
      image.alt = "Post-Image";
      image.textContent = media;
      image.classList.add("post-image", "singel-post-image" );

      const publish = document.createElement("p");
      publish.textContent = created;

    postContainer.append(title, image, content, publish);
   
    return postContainer;
}
