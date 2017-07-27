import { test } from 'qunit';
import moduleForAcceptance from 'watchlist/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /', function(assert) {
  server.createList('movie', 10);

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });

  fillIn('.typeahead__input', 'green');
  keyEvent('.typeahead__input', 'keyup');

  andThen(function() {
    assert.equal(find('.typeahead-results__result').length, 10, 'display results properly');
  });

  click('.typeahead-results__result:eq(0)');

  andThen(function() {
    assert.equal(find('.movie-card').length, 1, 'movie card renders');
  })
});
