// function toggleMenu() {
//     const menu = document.getElementById('menu');
//     const burger = document.querySelector('.burger');
//     menu.classList.toggle('show');
//     burger.classList.toggle('active');
// }

// function addPost() {
//     const postContent = document.getElementById('newPostContent').value;
//     if (postContent.trim() === "") {
//         alert("Напишіть щось перед публікацією!");
//         return;
//     }

//     const posts = document.getElementById('posts');
//     const newPost = document.createElement('div');
//     newPost.classList.add('post');

//     const postTitle = document.createElement('h3');
//     postTitle.textContent = "Новий пост";

//     const postText = document.createElement('p');
//     postText.textContent = postContent;

//     newPost.appendChild(postTitle);
//     newPost.appendChild(postText);
//     posts.insertBefore(newPost, posts.firstChild);

//     document.getElementById('newPostContent').value = "";
// }