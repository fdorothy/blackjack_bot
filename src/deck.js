class Deck {
  constructor() {
    this.data = Deck.standard_deck();
  }

  static standard_deck() {
    let deck = [];
    ['C', 'D', 'H', 'S'].forEach(suit => {
      ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'].forEach(x => {
        deck.push(x + suit);
      });
    });
    return deck;
  }

  draw() {
    return this.data.pop();
  }
}

export { Deck };
