import { createFeatureSelector, createSelector } from '@ngrx/store';

import { MoviesState } from '@app/store/movies/movies.state';

const selectMovies = createFeatureSelector<MoviesState>('movies');

export const movies = createSelector(selectMovies, s => s.movies);
export const isLoading = createSelector(selectMovies, s => s.isLoading);

export const trailer = idIMDB =>
  createSelector(selectMovies, s => {
    return s.trailers.find(item => {
      return item.idIMDB === idIMDB;
    });
  });

export const selectedMovies = createSelector(selectMovies, s => {
  return s.movies.filter(function(item) {
    return this.indexOf(item.idIMDB) >= 0;
  }, s.selectedMovies);
});

export const selectYearsOfMovies = createSelector(selectMovies, s => {
  const chartData = {
    labels: [],
    dataYears: []
  };

  const years = s.movies.map(item => {
    return +item.year - (+item.year % 10);
  });

  const sortYears = years.sort((a, b) => {
    return a - b;
  });

  chartData.labels = sortYears.filter((item, index, self) => self.indexOf(item) === index);

  const countersOfYears = sortYears.reduce((yearsGroup, el, index) => {
    yearsGroup[el] = (yearsGroup[el] || 0) + 1;
    return yearsGroup;
  }, {});

  for (let key in countersOfYears) {
    chartData.dataYears.push(countersOfYears[key]);
  }

  return chartData;
});
