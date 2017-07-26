import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('movie', {})
  },

  afterModel(model) {
    debugger;
  },

  actions: {
    search(val) {
      debugger;
    }
  }
});
