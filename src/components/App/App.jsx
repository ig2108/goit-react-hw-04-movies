import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// import HomePage from '../../pages/HomePage/HomePage';
// import MoviesPage from '../../pages/MoviesPage/MoviesPage';
// import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import Nav from '../Nav/Nav';
import Loader from '../Loader/Loader';

import styles from './App.module.css';

const HomePage = lazy(() =>
  import('../../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);

const MoviesPage = lazy(() =>
  import(
    '../../pages/MoviesPage/MoviesPage' /* webpackChunkName: "home-page" */
  ),
);

const MovieDetailsPage = lazy(() =>
  import(
    '../../pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "home-page" */
  ),
);

const App = () => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Route path="/movies" component={MoviesPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default App;
