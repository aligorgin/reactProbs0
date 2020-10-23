import React from "react";

const CommentDetail = (probs) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={probs.avatar} alt="avatar"/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {probs.author}
                </a>
                <div className="metadata">
                      <span className="date">
                          {probs.timeAgo}
                      </span>
                </div>
                <div className="text">
                    {probs.comment}
                </div>
            </div>
        </div>
    );
};

export default CommentDetail;