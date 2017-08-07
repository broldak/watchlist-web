import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { inject, Route } = Ember;

export default Route.extend(ApplicationRouteMixin, {
  userSession: inject.service('user-session'),

  beforeModel() {
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  },

  _loadCurrentUser() {
    return this.get('userSession').load().catch(() => this.get('session').invalidate());
  }
});
