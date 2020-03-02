import React from 'react';

function Review(props) {
  return (
    <div className="review">
      <h3 className="review-reviewer">{props.reviewer}</h3>
      <p className="review-content">{props.content.length > 300 ? `${props.content.slice(0, 300)}...` : props.content}</p>
      <p><a className="review-link link" href={props.fullReviewSrc}>{props.content !== "" ? <><span>Read full review</span><i className="fas fa-chevron-right"></i></> : ""}</a></p>
    </div>
  )
}

export default Review;
