const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('table')
    .setDescription('Shows all the cards on the table, but not the face-down cards.'),
  async execute(interaction, deck) {
    let str = deck.table_human_readable();
    await interaction.reply(`Everyone's visible cards are...\n\n${str}`);
  },
};
