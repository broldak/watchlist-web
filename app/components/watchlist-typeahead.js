import Ember from 'ember';

export default Ember.Component.extend({
  title: '',

  showResults: Ember.computed.alias('movies'),

  actions: {
    onInput() {
      Ember.run.debounce(this, this.fetchAction, this.get('title'), 1000);
    },

    selectMovie(movie) {
      this.selectAction(movie);
      this.set('showResults', false);
    }
  }
});
