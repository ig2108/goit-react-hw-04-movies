import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonReturn.module.css';

const ButtonReturn = ({ onGoBack }) => {
  return (
    <button className={styles.ButtonLoadMore} type="button" onClick={onGoBack}>
      Go back
    </button>
  );
};

ButtonReturn.propTypes = {
  onGoBack: PropTypes.func.isRequired,
};

export default ButtonReturn;
