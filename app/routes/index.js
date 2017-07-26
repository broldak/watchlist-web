import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      movies: []
    };
  },

  actions: {
    fetchMovies(query) {
      this.controller.set('model.movies', this.store.query('movie', {q: query}));
    },

    selectMovie(movie) {
      this.controller.set('model.selectedMovie', movie);
    }
  }
});
