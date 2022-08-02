import './home.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
          <section className="preview-posts-section">
            <h2 className="header">posts</h2>
            {data.map((post) => (
              <PreviewPost postPreview={post} key={post.data.id} />
            ))}
          </section>
        </>
      )}
    </main>
  );
};

export default Home;
