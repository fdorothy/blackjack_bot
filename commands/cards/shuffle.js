const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('shuffle')
    .setDescription('Returns all cards to the deck and shuffles them.'),
  async execute(interaction, deck) {
    deck.reset();
    deck.shuffle();
    await interaction.reply(`${interaction.user.displayName} returns all the cards to the deck and shuffles them.`);
  },
};
