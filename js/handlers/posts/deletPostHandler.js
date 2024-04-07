
import { deletePost } from "../../api/posts/deletePost.js";
import { displayMessage } from "../../ui/common/displayMessage.js";

/**
 * Function to handle the delete post
 * if no post is found, an error message is displayed 
 * if the post is found, the post is deleted
 * this only works if the atuhor of the post is the same as the user deleting the post
 * 
 * @param {number} id - the id of the post
 * @returns {Promise<void>}
 *  
 * */

export async function deletePostHandler(id) {
  
    try {
        if (!id) {
            throw new Error("No ID was provided");
        }

        if(id !== null && !isNaN(id)){

        await deletePost(id); 

        window.location.href = "/thePosts/index.html";
        }
    } catch (error) {
        console.log(error);
        displayMessage("#message", "danger", error.message);
    }
}