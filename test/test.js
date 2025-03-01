const { Deck } = require('../src/deck');
const { State } = require('../src/state');
//import { Deck } from '../src/deck';
//import { State } from '../src/state';
//import assert from 'assert';
var assert = require('assert');

describe('Deck', function() {
  it('draws a card', function() {
    let deck = new Deck();
    assert.equal(deck.draw(), 'KS');
    assert.equal(deck.data.length, 51);
  });

  it('can shuffle', function() {
    let deck = new Deck();
    deck.shuffle();
    console.log(deck.data);
    assert.equal(deck.data.length, 52);
  });

  it('can name cards', function() {
    assert.equal(Deck.human_readable('4D'), 'Four of Diamonds');
  });

  it('can reveal cards', function() {
    let deck = new Deck();
    deck.set_name('u1', 'User 1');
    deck.add_to_hand('u1', 'AS', false);
    deck.add_to_hand('u1', 'KS', false);
    assert.equal(deck.reveal_human_readable(), "User 1: Ace of Spades, King of Spades");
  });

  it('can show the table', function() {
    let deck = new Deck();
    deck.set_name('u1', 'User 1');
    deck.add_to_hand('u1', 'AS', false);
    deck.add_to_hand('u1', 'KS', true);
    assert.equal(deck.table_human_readable(), "User 1: Ace of Spades, ???");
  });
});

describe('State', function() {
  it('can get and create decks', function() {
    let state = new State();
    let deck = state.get_or_create_deck('s1');
    deck.draw();
    assert.equal(deck.data.length, 51);
    let deck2 = state.get_or_create_deck('s1');
    assert.equal(deck2.data.length, 51);
  });
});
