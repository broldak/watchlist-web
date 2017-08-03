import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

const { inject, testing } = Ember;

export default Base.extend({
  session: inject.service('session'),

  authorize(data, block) {
    if (testing) {
      block('Authorization', 'testing');
    }

    const { token } = data;

    if (this.get('session.isAuthenticated') && token) {
      block('x-access-token', `${token}`);
    }
  }
});
