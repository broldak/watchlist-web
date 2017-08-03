import DS from 'ember-data';
import pathMapping from 'watchlist/constants/path-mapping';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:custom',
  
  pathForType: function(type) {
    return pathMapping[type] || this._super(...arguments);
  }
});
