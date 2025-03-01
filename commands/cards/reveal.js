const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('reveal')
    .setDescription('Reveals all of the cards that have been drawn or flipped for each player.'),
  async execute(interaction, deck) {
    let str = deck.reveal_human_readable();
    await interaction.reply(`Everyone's cards are...\n\n${str}`);
  },
};
