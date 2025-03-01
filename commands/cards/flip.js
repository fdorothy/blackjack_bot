const { SlashCommandBuilder } = require('discord.js');
const { Deck } = require('../../src/deck');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('flip')
    .setDescription('Draw and reveal a card from the deck.'),
  async execute(interaction, deck) {
    let card = deck.draw();
    if (card) {
      deck.add_to_hand(interaction.user.id, card, false);
      deck.set_name(interaction.user.id, interaction.user.displayName);
      await interaction.reply(`${interaction.user.displayName} drew and revealed a ${Deck.human_readable(card)}`);
    } else {
      await interaction.reply(`${interaction.user.displayName} tried to draw a card, but there are none left.`)
    }
  },
};
