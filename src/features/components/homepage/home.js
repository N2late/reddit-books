import './home.css';
import React from 'react';
import PreviewPost from '../preview-Post/Preview-post';

export function Home() {
  const { hasError } = false;

  const data = {
    data: {
      selftext:
        "I'm just getting back into reading after a long hiatus, I've been looking at lists online but I'm curious as to what everyone has to say about what the best books they have ever read are.",
      name: 't3_w5v0og',
      ups: 12,
      num_comments: 38,
      author: 'wickedwombat69',
      title: 'best book/books you have ever read?',
      url_overridden_by_dest:
        'https://www.reddit.com/r/booklists/comments/w5v0og/best_bookbooks_you_have_ever_read/',
      created_utc: 1658551204,
    },
  };
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
            {<PreviewPost postPreview={data} />}
          </section>
        </>
      )}
    </main>
  );
}

export default Home;
