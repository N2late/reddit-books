import './comments.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { linkify, secondsToDhms, textWithParagraphs } from '../../utils/utilis';

export default function Comment({ comment, children }) {
  const postTime = secondsToDhms(comment.created_utc);
  const { hasError } = useSelector((state) => state.allComments);

  if (hasError) {
    return (
      <div className="error">
        {' '}
        <h2>Something went wrong!</h2>
      </div>
    );
  }
  return (
    <div className="comment" tabIndex={0}>
      <span className="comment-container">
        <div className="comment-details">
          <div className="user">
            <span className="username">{comment.author}</span> comment{' '}
            <span className="time">{postTime}</span> ago
            <div className="vote-container">
              <span className="text2">Votes</span>
              <span className="text3">{comment.ups}</span>
            </div>
          </div>
        </div>
        {textWithParagraphs(comment.body)}
      </span>
    </div>
  );
}
