import React from 'react'

const Comments = ({
  postComments
}) =>
  <div className="comments">
    {
      postComments.map((comment, i) =>
        <div className="comment" key={i}>
          <p>
            <strong>{comment.user}</strong>
            {comment.text}
            <button className="remove-comment">
              &times;
            </button>
          </p>
        </div>
      )
    }
    <form ref="commentForm" className="comment-form">
      <input type="text" ref="author" placeholder="author" />
      <input type="text" ref="comment" placeholder="comment" />
      <input type="submit" hidden />
    </form>
  </div>

export default Comments
