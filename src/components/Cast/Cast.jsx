import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as filmsApi from '../../services/filmsApi';
import CastList from '../CastList/CastList';

export default class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { id } = this.props;
    this.getFilmCastInfo(id);
  }

  getFilmCastInfo = id => {
    filmsApi
      .getFilmCastById(id)
      .then(({ data }) =>
        this.setState({
          cast: [...data.cast],
        }),
      )
      .catch(err => console.log(err));
  };

  render() {
    const { cast } = this.state;
    const { onToggleList } = this.props;
    return <CastList cast={cast} onToggleList={onToggleList} />;
  }
}

Cast.propTypes = {
  id: PropTypes.number.isRequired,
  onToggleList: PropTypes.func.isRequired,
};
