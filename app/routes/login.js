import Ember from 'ember';

const { inject, Route } = Ember;

export default Route.extend({
  session: inject.service('session'),

  actions: {
    authenticate(email, password) {
      debugger;

      this.get('session')
        .authenticate('authenticator:jwt', { email, password })
          .catch((err) => {
            console.log(err);
          });
    }
  }
});
