import { useState } from "react";
import { postDeatils } from "./PostLists";

function Posts() {
  const [post, setPost] = useState(postDeatils);

  function setLike(index, addLike) {
    console.log("");

    let newPost = [...post];

    newPost[index].likes += addLike;

    if (newPost[index].likes < 0) newPost[index].likes = 0;

    setPost(newPost);
  }

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>

      {post.map((item, index) => {
        return (
          <div class="post-list">
            <div class="post-item">
              <div class="post-header">
                <h2>{item.title}</h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes">{item.likes}</span>
                </div>
              </div>
              <p class="post-content">{item.content}</p>
              <div class="post-actions">
                <button class="like-button" onClick={() => setLike(index, 1)}>
                  Like
                </button>
                <button
                  class="dislike-button"
                  onClick={() => setLike(index, -1)}
                >
                  Dislike
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
