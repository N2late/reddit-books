import './home.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-spinner-material';
import GoTopButton from '../buttonGoTop/GoTopButton';
import Community from '../communities/Community';
import { communities } from '../communities/data/communitiesData';
import { loadPosts, selectPosts } from '../posts/postsSlice';
import PreviewPost from '../posts/Preview-post';
import { selectSearchTerm } from '../searchTerm/searchTermSlice';

const Home = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const { hasError, isLoading } = useSelector((state) => state.allPosts);

  useEffect(() => {
    dispatch(loadPosts(searchTerm));
  }, [dispatch, searchTerm]);

  const data = useSelector(selectPosts);

  const tryAgainHandler = () => {
    dispatch(loadPosts(searchTerm));
  };

  return (
    <main id="posts-wrapper">
      {hasError ? (
        <div id="error-wrapper">
          <h1 className="error-message">
            {' '}
            Reddit is having lunch. Please try again! :)
          </h1>
          <button className="try-again-button" onClick={tryAgainHandler}>
            Try again
          </button>
        </div>
      ) : (
        <>
          <div className="main-content-container">
            <section className="preview-posts-section">
              <h2 className="header">Posts</h2>
              {isLoading ? (
                <div className="spinner">
                  <Spinner />
                </div>
              ) : (
                data.map((post) => (
                  <PreviewPost postPreview={post} key={post.data.id} />
                ))
              )}
            </section>
            <section className="preview-communities-section">
              <h2 className="header">Communities</h2>
              <div className="communities-container">
                {communities.map((community) => (
                  <Community community={community} key={community.id} />
                ))}
              </div>
            </section>
          </div>
          <GoTopButton />
        </>
      )}
    </main>
  );
};

export default Home;
