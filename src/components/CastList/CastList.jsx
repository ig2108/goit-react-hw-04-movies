import React from 'react';
import PropTypes from 'prop-types';
import styles from './CastList.module.css';

const CastList = ({ cast = [], onToggleList }) => {
  return cast.length > 0 ? (
    <ul className={styles.castList} onClick={onToggleList}>
      {cast.map(({ character, name, profile_path, id }) => (
        <li key={id} className={styles.castItem}>
          {profile_path && (
            <img
              className={styles.castItemImg}
              src={`https://image.tmdb.org/t/p/w400/${profile_path}`}
              alt={'member of cast'}
            />
          )}
          <p className={styles.castItemName}>{name}</p>
          <p className={styles.castItemCharacter}>Character: {character}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>We don't have any cast info for this movie.</p>
  );
};

CastList.propTypes = {
  onToggleList: PropTypes.func.isRequired,
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      character: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default CastList;
