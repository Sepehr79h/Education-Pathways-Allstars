
import axios from "axios";
import React from "react";

import './css/Comments.css'

function vote(increment, comment_id) {
    console.log("vote", increment, comment_id);
    return axios.put(`${process.env.REACT_APP_API_URL}/course/comments?comment_id=${comment_id}`, {increment: increment})
}

export default function Comment({
  comment,  update
}){
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  return (
    <div key={comment.id} className="comment">
      <div className="comment-image-container">
        <img alt="user_pic" src="/user-icon.png" />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div>{createdAt}</div>
        </div>
        <div className="comment-text">{comment.body}</div>
      </div>
      <div className="comment-votes-container">
        <div className="comment-votes-box">
        {/* <input type="button" style="" className="like" /> */}
        {/* <input type="image" src="/like.png" className="like" onClick={vote(1, comment.id)} />  */}
        <button className="like-btn" onClick={() => {
          vote(1,  comment.id).then(() => {
            update(1);
          })
        }}>
        <img alt="upvote" src="/like.png" className="like" /> 
        {comment.upvotes}
        </button>
        </div>
        <div className="comment-votes-box">
        <button className="dislike-btn" onClick={() => {
          vote(-1, comment.id).then(() => {
            update(-1);
          })
        }}>
        <img alt="downvote" src="/dislike.png" className="dislike" /> 
        {comment.downvotes}
        </button>
        
      </div>
      </div>
    </div>
  );
};