import './home.css';
import React from 'react';

export function Home() {
  const { hasError } = false;

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
            <h2 className="header">Posts</h2>
            {/*<AllPosts />*/}
          </section>
        </>
      )}
    </main>
  );
}

export default Home;
