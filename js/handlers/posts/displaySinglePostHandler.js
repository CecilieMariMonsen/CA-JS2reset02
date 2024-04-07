
import { getSinglePosts } from "../../api/posts/getSinglePost.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { renderPost } from "../../ui/renderPosts/renderSingelPost.js";

/**
 * This is a function to display a single post
 * if no post is found, an error message is displayed
 * if the post is found, the post data is displayed on the page
 * */

export async function displaySinglePostHandler(){

    const querystring = window.location.search;
    const urlParams = new URLSearchParams(querystring);
    //console.log(urlParams);
    const id = urlParams.get("id");

    //try catch block to catch any errors
    try {
        if (!id) {
            throw new Error("No ID was provided");
        }

        const post = await getSinglePosts(id);
        if (!post) {
            throw new Error("Post not found");
        }

        //the post data is displayed on the page
        document.title = `${post.id} | JS 2 `;
        document.getElementById("title").innerHTML = post.title;
        document.getElementById("content").innerHTML = post.body;
        document.getElementById("image").innerHTML = post.media;
        document.getElementById("publish").innerHTML = post.created;
       //console.log(post);
        renderPost("#post-singel", post);

    } catch (error) {
        console.log(error);
        displayMessage("#post", "danger", error.message);
    }
}



