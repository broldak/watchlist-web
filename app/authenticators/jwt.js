import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const { isEmpty, RSVP, run, $ } = Ember;

export default Base.extend({
  tokenEndpoint: '/authenticate',

  restore(data) {
    return new RSVP.Promise((res, rej) => {
      if (!isEmpty(data.token)) {
        res(data);
      } else {
        rej();
      }
    });
  },

  authenticate(credentials) {
    const { email, password } = credentials;

    const data = JSON.stringify({
      auth: {
        email,
        password
      }
    });

    const requestOpts = {
      url: this.get('tokenEndpoint'),
      type: 'POST',
      data,
      contentType: 'application/json',
      dataType: 'json'
    };

    return new RSVP.Promise((res, rej) => {
      $.ajax(requestOpts).then((response) => {
        debugger;

        const { token, user_id } = response;

        debugger;

        run(() => {
          res({
            token,
            user_id
          });
        });
      }, (err) => {
        run(() => {
          rej(err);
        });
      });
    });
  },

  invalidate(data) {
    return RSVP.Promise.resolve(data);
  }
});
