import './community.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loadCommunityPosts } from '../posts/postsSlice';

const Community = ({ community, setDisplay }) => {
  const dispatch = useDispatch();

  const loadCommunityPostsHandler = (url) => {
    url = community.url;
    dispatch(loadCommunityPosts(url));
    setDisplay(true);
  };

  return (
    <div
      key={community.id}
      className="community-container"
      tabIndex={0}
      onClick={loadCommunityPostsHandler}
    >
      <div className="subreddit-profile">
        <img src={community.img} alt="profile-icon" className="profile-icon" />
        <div className="subreddit-info">
          <h2 className="subreddit-name">{community.name}</h2>
          <p className="members">{community.members} members</p>
        </div>
      </div>
    </div>
  );
};

export default Community;
