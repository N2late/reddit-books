import './preview-post.css';
import React from 'react';
import CommentsIcon from '../../../img/searchIcons/comment-bubble.svg';

export default function PreviewPost({ postPreview, children }) {
  const postTime = secondsToDhms(postPreview.data.created_utc);
  return (
    <div key={postPreview.data.name} className="post-preview" tabIndex={0}>
      <span className="preview-post-container">
        <div className="votes">
          <p className="votes-title">Votes</p>
          <h3 className="num-votes">{postPreview.data.ups}</h3>
        </div>
        <div className="details-container">
          <div className="user-title-container">
            <p className="user">
              <span className="username">{postPreview.data.author}</span> posted{' '}
              <span className="time">{postTime}</span> ago
            </p>
            <h1 className="title">{postPreview.data.title}</h1>
          </div>
          {postPreview.data.url_overridden_by_dest ? (
            <img
              src={postPreview.data.url_overridden_by_dest}
              className="post-image"
              alt=""
            />
          ) : null}
          {postPreview.data.selftext ? (
            <p className="description">{postPreview.data.selftext}</p>
          ) : null}
          <div className="comments">
            <img
              src={CommentsIcon}
              alt="comments"
              className="comments-icon"
              //onClick={displayCommentsHandler}
            />
            <p className="comment-number">{postPreview.data.num_comments}</p>
          </div>
        </div>
      </span>
      {children}
    </div>
  );
}

function secondsToDhms(unix) {
  const start = new Date(unix * 1000);
  const seconds = (Date.now() - start) / 1000;

  let y = Math.floor(seconds / (3600 * 24 * 365));
  let d = Math.floor(seconds / (3600 * 24));
  let h = Math.floor((seconds % (3600 * 24)) / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = Math.floor(seconds % 60);

  if (y > 0) {
    return y + (y == 1 ? ' year' : ' years');
  }
  if (d > 0) {
    return d + (d == 1 ? ' day' : ' days');
  }

  if (h > 0) {
    return h + (h == 1 ? ' hour' : ' hours');
  }

  if (m > 0) {
    return m + (m == 1 ? ' minute' : ' minutes');
  }
  if (s > 0) {
    return s + (s == 1 ? ' second' : ' seconds');
  }
}
