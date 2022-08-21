import './home.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-spinner-material';
import GoTopButton from '../buttonGoTop/GoTopButton';
import Community from '../communities/Community';
import { communities } from '../communities/data/communitiesData';
import { loadPosts, selectPosts } from '../posts/postsSlice';
import PreviewPost from '../posts/Preview-post';
import { selectSearchTerm } from '../searchTerm/searchTermSlice';

const HomeMobile = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const { hasError, isLoading } = useSelector((state) => state.allPosts);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    dispatch(loadPosts(searchTerm));
  }, [dispatch, searchTerm]);

  const data = useSelector(selectPosts);

  const tryAgainHandler = () => {
    dispatch(loadPosts(searchTerm));
  };

  const displayHandler = (e) => {
    e.target.attributes.value.value === 'posts'
      ? setDisplay(true)
      : setDisplay(false);
    console.log(e);
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
          <div className="main-content-container" style={{ display: 'block' }}>
            <div
              style={{
                display: 'inline-flex',
                marginBottom: '0.5rem',
                width: '100%',
              }}
            >
              <h2
                className="header"
                value="posts"
                onClick={displayHandler}
                style={{
                  margin: '0 auto',
                  marginRight: '0.5rem',
                  fontSize: '1.3rem',
                }}
              >
                Posts
              </h2>
              <h2
                className="header"
                value="communities"
                onClick={displayHandler}
                style={{
                  margin: '0 auto',
                  marginLeft: '0.5rem',
                  fontSize: '1.3rem',
                }}
              >
                Communities
              </h2>
            </div>
            {display ? (
              <section
                className="preview-posts-section"
                style={{ width: '100%', paddingTop: '.4rem' }}
              >
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
            ) : (
              <section
                className="preview-communities-section"
                style={{ width: '100%', paddingTop: '1rem' }}
              >
                <div className="communities-container">
                  {communities.map((community) => (
                    <Community
                      community={community}
                      key={community.id}
                      setDisplay={setDisplay}
                    />
                  ))}
                </div>
              </section>
            )}
          </div>
          <GoTopButton />
        </>
      )}
    </main>
  );
};

export default HomeMobile;
