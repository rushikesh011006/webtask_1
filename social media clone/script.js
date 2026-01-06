function toggleLike(button) {
    button.classList.toggle("liked");

    if (button.classList.contains("liked")) {
        button.innerText = "❤️ Liked";
    } else {
        button.innerText = "❤️ Like";
    }
}
function addComment(button) {
    const post = button.closest(".post");
    const input = post.querySelector(".comment-input");
    const commentsBox = post.querySelector(".comments");

    const text = input.value.trim();
    if (text === "") return;

    const comment = document.createElement("div");
    comment.className = "comment";
    comment.innerText = text;

    commentsBox.appendChild(comment);
    input.value = "";
}
