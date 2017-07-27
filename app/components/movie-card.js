import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  classNames: ['movie-card'],

  didReceiveAttrs() {
    debugger;

    this.setProperties({
      hasLoadedImage: false,
      imageError: false,
      loading: false
    });

    const image = new Image();

    image.addEventListener('load', () => {
      $('.movie-card__image-wrapper').html(image);
      this.set('hasLoadedImage', true);


      // $('.movie-card__actions').addClass('hidden');
    });

    image.addEventListener('error', () => {
      this.set('imageError', true);
    });

    this.set('loading', true);
    image.src = this.get('movie.poster');
  }
});
