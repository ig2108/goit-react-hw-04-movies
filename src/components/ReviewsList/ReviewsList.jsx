import React from 'react';
import PropTypes from 'prop-types';
import styles from './ReviewsList.module.css';

const ReviewsList = ({ reviews = [], onToggleList }) => {
  return reviews.length > 0 ? (
    <ul className={styles.reviewsList} onClick={onToggleList}>
      {reviews.map(({ id, author, content }) => (
        <li key={id} className={styles.reviewItem}>
          <h3 className={styles.reviewItemAuthor}>Author: {author}</h3>
          <p className={styles.reviewItemContent}>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie.</p>
  );
};

ReviewsList.propTypes = {
  onToggleList: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ReviewsList;
