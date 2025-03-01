const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('draw')
    .setDescription('Draws a card from the deck, without revealing it to the other players.'),
  async execute(interaction) {
    await interaction.reply(`This card is...`);
  },
};
