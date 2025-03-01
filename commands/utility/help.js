const { SlashCommandBuilder } = require('discord.js');

const help = `This bot can be used to play blackjack-like games.

/shuffle - Returns all cards to the deck and shuffles them.
/draw - Draws a card from the deck, without revealing it to the other players.
/flip - Draw and reveal a card from the deck.
/table - Shows all the cards on the table, but not the face-down cards.
/reveal - Reveals all of the cards that have been drawn or flipped for each player.
`;

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Provides helpful information about how to use Blackjack Bot.'),
  async execute(interaction) {
    await interaction.reply(help);
  },
};
