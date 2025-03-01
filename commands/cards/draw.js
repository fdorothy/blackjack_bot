const { SlashCommandBuilder } = require('discord.js');
const { Deck } = require('../../src/deck');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('draw')
    .setDescription('Draws a card from the deck, without revealing it to the other players.'),
  async execute(interaction, deck) {
    let card = deck.draw();
    if (card) {
      deck.add_to_hand(interaction.user.id, card, true);
      deck.set_name(interaction.user.id, interaction.user.displayName);
      await interaction.reply(`${interaction.user.displayName} drew a card face down.`)
      await interaction.followUp({ content: `You drew a ${Deck.human_readable(card)}`, ephemeral: true });
    } else {
      await interaction.reply(`${interaction.user.displayName} tried to draw a card, but there are none left.`)
    }
  },
};
