import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('watchlist-typeahead', 'Integration | Component | watchlist typeahead', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{watchlist-typeahead}}`);

  assert.equal(this.$().text().trim(), '');
});
