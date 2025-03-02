const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hand')
    .setDescription('Shows all the cards in your hand without revealing them to other players.'),
  async execute(interaction, deck) {
    let str = deck.hand_human_readable(interaction.user.id);
    await interaction.reply({ content: `${str}`, ephemeral: true });
  },
};
