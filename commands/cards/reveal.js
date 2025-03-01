const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('reveal')
    .setDescription('Reveals all of the cards that have been drawn or flipped for each player.'),
  async execute(interaction) {
    await interaction.reply(`Everyone's cards are...`);
  },
};
