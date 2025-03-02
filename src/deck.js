class Deck {
  constructor() {
    this.reset();
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

  static human_readable(card) {
    let value = "???";
    switch (card[0]) {
    case 'A':
      value = "Ace";
      break;
    case '2':
      value = "Two";
      break;
    case '3':
      value = "Three";
      break;
    case '4':
      value = "Four";
      break;
    case '5':
      value = "Five";
      break;
    case '6':
      value = "Six";
      break;
    case '7':
      value = "Seven";
      break;
    case '8':
      value = "Eight";
      break;
    case '9':
      value = "Nine";
      break;
    case 'T':
      value = "Ten";
      break;
    case 'J':
      value = "Jack";
      break;
    case 'Q':
      value = "Queen";
      break;
    case 'K':
      value = "King";
      break;
    }
    let suit = "???";
    switch (card[1]) {
    case 'C':
      suit = "Clubs";
      break;
    case 'D':
      suit = "Diamonds";
      break;
    case 'H':
      suit = "Hearts";
      break;
    case 'S':
      suit = "Spades";
      break;
    }
    return `${value} of ${suit}`;
  }

  reset() {
    this.data = Deck.standard_deck();
    this.hands = {};
    this.names = {};
  }

  draw() {
    if (this.data.length > 0) {
      return this.data.pop();
    } else {
      return null;
    }
  }

  add_to_hand(hand, card, hidden) {
    let info = {'card': card, 'hidden': hidden};
    if (this.hands.hasOwnProperty(hand)) {
      this.hands[hand].push(info);
    } else {
      this.hands[hand] = [info];
    }
  }

  set_name(hand, name) {
    this.names[hand] = name;
  }

  shuffle() {
    this.data =
      this.data
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  }

  reveal_human_readable() {
    let rows = [];
    for (const [hand, cards] of Object.entries(this.hands)) {
      let displayName = this.names[hand];
      let row = [];
      cards.forEach(info => {
        row.push(Deck.human_readable(info.card));
      });
      let str = row.join(', ');
      rows.push(`${displayName}: ${str}`);
    }
    if (rows.length > 0) {
      return rows.join("\n");
    } else {
      return "No cards were dealt";
    }
  }

  table_human_readable() {
    let rows = [];
    for (const [hand, cards] of Object.entries(this.hands)) {
      let displayName = this.names[hand];
      let row = [];
      cards.forEach(info => {
        if (info.hidden) {
          row.push("???");
        } else {
          row.push(Deck.human_readable(info.card));
        }
      });
      let str = row.join(', ');
      rows.push(`${displayName}: ${str}`);
    }
    if (rows.length > 0) {
      return rows.join("\n");
    } else {
      return "No cards were dealt";
    }
  }

  hand_human_readable(id) {
    if (this.hands.hasOwnProperty(id)) {
      let rows = [];
      const cards = this.hands[id];
      cards.forEach(info => {
        if (info.hidden) {
          rows.push(`${Deck.human_readable(info.card)} (hidden)`);
        } else {
          rows.push(`${Deck.human_readable(info.card)}`);
        }
      });
      if (rows.length > 0) {
        let str = rows.join(', ');
        return `Your cards: ${str}`;
      } else {
        return `Your hand is empty.`;
      }
    } else {
      return "No cards were dealt to you.";
    }
  }
}

export { Deck };
