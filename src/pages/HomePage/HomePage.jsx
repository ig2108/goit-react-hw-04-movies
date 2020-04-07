import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import * as filmsApi from '../../services/filmsApi';
import filmsMapper from '../../heplers/filmsMapper';
import FilmsList from '../../components/FilmsList/FilmsList';
import styles from './HomePage.module.css';

export default class HomePage extends Component {
  state = {
    filmsInTrends: [],
  };

  componentDidMount() {
    filmsApi
      .getFilmsInTrends()
      .then(({ data }) => {
        this.setState({
          filmsInTrends: filmsMapper(data.results),
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { filmsInTrends } = this.state;
    return (
      <div className={styles.homePage}>
        <h2>Trending Films</h2>
        <FilmsList films={filmsInTrends} />
      </div>
    );
  }
}
