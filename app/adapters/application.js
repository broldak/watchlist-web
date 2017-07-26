import DS from 'ember-data';
import pathMapping from 'watchlist/constants/path-mapping';

export default DS.JSONAPIAdapter.extend({
  pathForType: function(type) {
    return pathMapping[type] || this._super(...arguments);
  }
});
