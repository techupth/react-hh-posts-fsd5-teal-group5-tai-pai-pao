import { useState } from "react";
import AddPost from "./addpost.jsx";

function Posts() {
  const [post, setPost] = useState(AddPost);
  // fuction like
  const putLike = (i) => {
    const newPost = [...post];
    newPost[i].likes += 1;
    setPost(newPost);
  };
  //fuc  dislike
  const cutLike = (i) => {
    const newPost = [...post];
    if (newPost[i].likes > 0) {
      newPost[i].likes -= 1;
    }
    setPost(newPost);
  };

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {AddPost.map((item, index) => {
          return (
            <div class="post-item">
              <div class="post-header">
                <h2>{item.title}</h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes"> {item.likes}</span>
                </div>
              </div>
              <p class="post-content">{item.content}</p>
              <div class="post-actions">
                <button
                  class="like-button"
                  onClick={() => {
                    putLike(index);
                  }}
                >
                  Like
                </button>
                <button
                  class="dislike-button"
                  onClick={() => {
                    cutLike(index);
                  }}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
