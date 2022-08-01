import './comments.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-spinner-material';
import Comment from './Comment';
import { loadComments } from './commentsSlice';

const AllComments = ({ url }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadComments(url));
  }, [dispatch, url]);

  const { comments } = useSelector((state) => state.allComments);

  const { isLoading } = useSelector((state) => state.allComments);

  if (isLoading) {
    return (
      <div className="spinner">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="comments-container">
      {comments.map((comment) => (
        <Comment comment={comment.data} key={comment.data.id} />
      ))}
    </div>
  );
};

export default AllComments;
