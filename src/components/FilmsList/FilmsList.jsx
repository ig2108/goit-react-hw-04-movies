import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import styles from './FilmsList.module.css';

const FilmsList = ({ films = [], location }) => {
  return (
    <ul className={styles.filmsList}>
      {films.map(({ id, name, title }) => (
        <li key={id} className={styles.filmsListItem}>
          <Link to={{ pathname: `/movies/${id}`, state: { from: location } }}>
            <p className={styles.filmsListItemTitle}>{name || title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(FilmsList);
