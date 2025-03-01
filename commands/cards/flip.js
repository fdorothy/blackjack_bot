const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('flip')
    .setDescription('Flips a card over from the deck, revealing it to the other players.'),
  async execute(interaction) {
    await interaction.reply(`This card is...`);
  },
};
