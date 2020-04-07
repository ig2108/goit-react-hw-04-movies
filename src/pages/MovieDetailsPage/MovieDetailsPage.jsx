import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
import * as filmsApi from '../../services/filmsApi';
import getIdFromProps from '../../heplers/getIdFromProps';
import ButtonReturn from '../../components/ButtonReturn/ButtonReturn';
import AboutFilm from '../../components/AboutFilm/AboutFilm';
import AdditionalBlock from '../../components/AdditionalBlock/AdditionalBlock';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import styles from './MovieDetailsPage.module.css';

const queryString = require('query-string');
const getQueryFromSearchInput = location => {
  return queryString.parse(location.state.from.search).query;
};

export default class MovieDetailsPage extends Component {
  state = {
    film: null,
    searchInput: '',
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    const { location } = this.props;

    filmsApi
      .getFilmWithId(id)
      .then(({ data }) =>
        this.setState({
          film: { ...data },
        }),
      )
      .catch(err => console.log(err));

    if (location.state) {
      this.setState({
        searchInput: getQueryFromSearchInput(location),
      });
    }
  }

  handleGoBack = () => {
    const { history } = this.props;
    const { searchInput } = this.state;
    if (searchInput) {
      return history.push(`/movies?query=${searchInput}`);
    } else {
      return history.push('/');
    }
  };

  hadleToggledInfo = e => {
    const { history, location } = this.props;
    const id = getIdFromProps(this.props);
    console.log(e.currentTarget.textContent);

    if (
      location.pathname.split('/').includes('cast') ||
      location.pathname.split('/').includes('reviews')
    ) {
      if (
        location.pathname.split('/').includes('cast') &&
        e.currentTarget.textContent === 'Reviews'
      ) {
        return history.push(`/movies/${id}/reviews`);
      } else if (
        location.pathname.split('/').includes('reviews') &&
        e.currentTarget.textContent === 'Cast'
      ) {
        return history.push(`/movies/${id}/cast`);
      } else history.push(`/movies/${id}`);
    } else {
      if (e.currentTarget.textContent === 'Reviews') {
        return history.push(`/movies/${id}/reviews`);
      } else if (e.currentTarget.textContent === 'Cast') {
        return history.push(`/movies/${id}/cast`);
      }
    }
  };

  handleToggleList = () => {
    const { history } = this.props;
    const id = getIdFromProps(this.props);
    history.push(`/movies/${id}`);
  };

  render() {
    const { film } = this.state;
    const { match } = this.props;

    return (
      <>
        <div className={styles.btnWrap}>
          <ButtonReturn onGoBack={this.handleGoBack} />
        </div>
        {film && (
          <>
            <div className={styles.filmSection}>
              <AboutFilm film={film} />
            </div>
            <div className={styles.additionalBlock}>
              <AdditionalBlock
                id={film.id}
                ToggleInfo={this.hadleToggledInfo}
              />
            </div>

            <Route
              path={`${match.path}/cast`}
              render={props => (
                <Cast id={film.id} onToggleList={this.handleToggleList} />
              )}
            />
            <Route
              path={`${match.path}/reviews`}
              render={props => (
                <Reviews id={film.id} onToggleList={this.handleToggleList} />
              )}
            />
          </>
        )}
      </>
    );
  }
}
