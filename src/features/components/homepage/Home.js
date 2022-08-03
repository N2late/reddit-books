import './home.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoTopButton from '../buttonGoTop/GoTopButton';
import Community from '../communities/Community';
import { communities } from '../communities/data/communitiesData';
import { loadPosts, selectPosts } from '../posts/postsSlice';
import PreviewPost from '../posts/Preview-post';
import { selectSearchTerm } from '../searchTerm/searchTermSlice';

const Home = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const { hasError } = useSelector((state) => state.allPosts);

  useEffect(() => {
    dispatch(loadPosts(searchTerm));
  }, [dispatch, searchTerm]);

  const data = useSelector(selectPosts);

  return (
    <main id="posts-wrapper">
      {hasError ? (
        <div id="error-wrapper">
          <h1> Reddit is having lunch. Please try again! :)</h1>
          <button>Try again</button>
        </div>
      ) : (
        <>
          <div className="main-content-container">
            <section className="preview-posts-section">
              <h2 className="header">posts</h2>
              {data.map((post) => (
                <PreviewPost postPreview={post} key={post.data.id} />
              ))}
            </section>
            <section className="preview-communities-section">
              <h2 className="header">communities</h2>
              {communities.map((community) => (
                <Community community={community} key={community.id} />
              ))}
            </section>
          </div>
          <GoTopButton />
        </>
      )}
    </main>
  );
};

export default Home;
