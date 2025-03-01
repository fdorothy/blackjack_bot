const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('shuffle')
    .setDescription('Returns all cards to the deck and shuffles them.'),
  async execute(interaction, deck) {
    // interaction.guild is the object representing the Guild in which the command was run
    deck.reset();
    deck.shuffle();
    await interaction.reply(`${interaction.user.displayName} collects and is shuffling the cards...done!`);
  },
};
