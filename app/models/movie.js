import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  testComputed: Ember.computed('title', function() {
    debugger;
  }),
  title: DS.attr('string')
});
