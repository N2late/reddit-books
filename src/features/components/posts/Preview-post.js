import './preview-post.css';
import React, { useState } from 'react';
import CommentsIcon from '../../../img/searchIcons/comment-bubble.svg';
import { secondsToDhms } from '../../utils/utilis';
import AllComments from '../comments/AllComments';

export default function PreviewPost({ postPreview, children }) {
  const [isShow, setIsShow] = useState(false);
  const postTime = secondsToDhms(postPreview.data.created_utc);

  const displayCommentsHandler = () => {
    setIsShow(!isShow);
  };

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
            <h1 className="post-title">{postPreview.data.title}</h1>
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
              onClick={displayCommentsHandler}
            />
            <p className="comment-number">{postPreview.data.num_comments}</p>
          </div>
        </div>
      </span>
      {isShow ? (
        <AllComments
          url={'https://www.reddit.com/' + postPreview.data.permalink}
        />
      ) : null}
      {children}
    </div>
  );
}
