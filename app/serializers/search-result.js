import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType, isSingle) {
    debugger;

    payload.data.forEach((movie) => {
      movie.id = movie.imdbid;
    });

    return this._super(store, primaryModelClass, payload, id, requestType, isSingle);
  }
});
