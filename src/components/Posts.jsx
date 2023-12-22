import listDetails from "./list";
import { useState } from 'react';

function Posts() {
  const [counter,setCounter] = useState(listDetails);

  const addLike = (index)=>{
    const newCounter = [...counter];//ถ้าใช้ const newCounter = counter จะขึ้นแค่ใน console.log แต่หน้าจอไม่เพิ่ม
    newCounter[index].likes += 1
    console.log(newCounter[index].likes)
    setCounter(newCounter);
}

const disLike = (index)=>{
  const newCounter = [...counter];
  if(newCounter[index].likes > 0){
    newCounter[index].likes -= 1
  }
  console.log(newCounter[index].likes)
  setCounter(newCounter);
}

  return (
    counter.map((listObj,index)=>{
      return (
        <div class="app-wrapper" key={index}>
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        <div class="post-item">
          <div class="post-header">
            <h2>{listObj.title} #{listObj.id}</h2>
            <div class="post-social-media-stats">
              <span class="stats-topic">Likes: </span>
              <span class="post-likes">{listObj.likes}</span>
            </div>
          </div>
          <p class="post-content">
            {listObj.content}
          </p>
          <div class="post-actions">
            <button class="like-button" onClick = {()=>{
              addLike(index);
            }}>Like</button>

            <button class="dislike-button" onClick = {()=>{
              disLike(index);
            }}>Dislike</button>
          </div>
        </div>
      </div>
    </div>
      )
    })
  );
}

export default Posts;
