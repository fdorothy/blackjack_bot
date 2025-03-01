import { Deck } from './deck.js';

class State {
  constructor() {
    this.decks = {};
  }

  get_or_create_deck(id) {
    if (this.decks.hasOwnProperty(id)) {
      return this.decks[id];
    } else {
      let deck = new Deck();
      deck.shuffle();
      this.decks[id] = deck;
      return deck;
    }
  }
}

export { State };
