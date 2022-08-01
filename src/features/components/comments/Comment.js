import './comments.css';
import React from 'react';
import { linkify, secondsToDhms, textWithParagraphs } from '../../utils/utilis';

export default function Comment({ comment, children }) {
  const postTime = secondsToDhms(comment.created_utc);
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
        {textWithParagraphs(linkify(comment.body))}
      </span>
    </div>
  );
}
