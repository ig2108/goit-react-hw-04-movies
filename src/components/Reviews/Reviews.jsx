import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as filmsApi from '../../services/filmsApi';
import ReviewsList from '../ReviewsList/ReviewsList';

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { id } = this.props;
    this.getFilmReviewsInfo(id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      console.log(this.state);
    }
  }

  getFilmReviewsInfo = id => {
    filmsApi
      .getFilmReviewsById(id)
      .then(({ data }) =>
        this.setState({
          reviews: [...data.results],
        }),
      )
      .catch(err => console.log(err));
  };

  render() {
    const { reviews } = this.state;
    const { onToggleList } = this.props;
    return <ReviewsList reviews={reviews} onToggleList={onToggleList} />;
  }
}

Reviews.propTypes = {
  id: PropTypes.number.isRequired,
  onToggleList: PropTypes.func.isRequired,
};
