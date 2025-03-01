const { Deck } = require('../src/deck');
var assert = require('assert');

describe('Deck', function() {
  it('draws a card', function() {
    let deck = new Deck();
    assert.equal(deck.draw(), 'KS');
    assert.equal(deck.data.length, 51);
  });
});
