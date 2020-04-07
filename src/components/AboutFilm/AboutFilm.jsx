import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutFilm.module.css';

const AboutFilm = ({ film }) => {
  const { poster_path, title, vote_average, overview, genres } = film;

  return (
    <>
      <img
        className={styles.filmImg}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt=""
      />
      <div className={styles.filmInfo}>
        <h2 className={styles.filmName}> {title}</h2>
        <p className={styles.chapterInfo}>Users Score: {vote_average * 10} %</p>
        <h3 className={styles.chapterTitle}>Overview</h3>
        <p className={styles.chapterInfo}>{overview}</p>
        <h3 className={styles.chapterTitle}>Genres</h3>
        <div className={styles.genresList}>
          {genres.map(genre => (
            <span key={genre.id} className={styles.genresItem}>
              {`${genre.name} `}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

AboutFilm.propTypes = {
  film: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    ),
  }),
};

export default AboutFilm;
