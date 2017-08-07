import Ember from 'ember';

const { inject, isEmpty, RSVP, Service } = Ember;

export default Service.extend({
  session: inject.service('session'),
  store: inject.service('store'),

  load() {
    debugger;

    const id = this.get('session.data.authenticated.user_id');

    if (!isEmpty(id)) {
      debugger;

      return this.get('store').findRecord('user', id, {reload: true}).then((user) => {
        debugger;

        console.log(user.get('email'));
      }).catch((err) => {
        debugger;
      });
    } else {
      return RSVP.resolve();
    }
  }
});
