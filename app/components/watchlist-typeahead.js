import Ember from 'ember';
import ClickOutside from '../mixins/click-outside';

const { Component, on } = Ember;
const { next } = Ember.run;

export default Component.extend(ClickOutside, {
  title: '',
  showMovies: true,

  showResults: Ember.computed('movies.length', 'showMovies', function() {
    return this.get('movies.length') > 0 && this.get('showMovies');
  }),

  clickOutside() {
    this.set('showMovies', false);
  },

  focusIn(evt) {
    this.set('showMovies', true);
  },

  _attachClickOutsideHandler: on('didInsertElement', function() {
    next(this, this.addClickOutsideListener);
  }),

  actions: {
    onInput() {
      Ember.run.debounce(this, this.fetchAction, this.get('title'), 1000);
    },

    selectMovie(movie) {
      this.selectAction(movie);
      this.set('movies', []);
    }
  }
});
