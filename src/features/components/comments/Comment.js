import './comments.css';
import MarkdownIt from 'markdown-it';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useSelector } from 'react-redux';
import { secondsToDhms } from '../../utils/utilis';

export default function Comment({ comment }) {
  const postTime = secondsToDhms(comment.created_utc);
  const { hasError } = useSelector((state) => state.allComments);
  const md = new MarkdownIt();
  const htmlComment = md.render(comment.body);
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
            <span className="username">{comment.author}</span>{' '}
            <span className="time-comment">comment {postTime} ago</span>
            <div className="vote-container">
              <span className="text2">Votes</span>
              <span className="text3">{comment.ups}</span>
            </div>
          </div>
        </div>
        <div className="text1">{ReactHtmlParser(htmlComment)}</div>
      </span>
    </div>
  );
}
