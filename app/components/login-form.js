import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    authenticate(evt) {
      evt.preventDefault();

      this.get('authenticate')(this.get('email'), this.get('password'));
    }
  }
});
