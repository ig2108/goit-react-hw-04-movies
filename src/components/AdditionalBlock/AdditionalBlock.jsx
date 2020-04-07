import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './AdditionalBlock.module.css';

const AdditionalBlock = ({ id, ToggleInfo }) => {
  return (
    <>
      <h4 className={styles.additionalBlockTitle}>Additional Information</h4>
      <ul className={styles.additionalBlockList}>
        <li className={styles.additionalBlockItem} onClick={ToggleInfo}>
          <Link
            className={styles.additionalItemLink}
            to={{ pathname: `/movies/${id}/cast` }}
          >
            Cast
          </Link>
        </li>
        <li className={styles.additionalBlockItem} onClick={ToggleInfo}>
          <Link
            className={styles.additionalItemLink}
            to={{ pathname: `/movies/${id}/cast` }}
          >
            Reviews
          </Link>
        </li>
      </ul>
    </>
  );
};

AdditionalBlock.propTypes = {
  id: PropTypes.number.isRequired,
  ToggleInfo: PropTypes.func.isRequired,
};

export default withRouter(AdditionalBlock);
