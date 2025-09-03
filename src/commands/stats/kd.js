const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("kd")
        .setDescription("Provides info about user KD in a game"),
    async execute(interaction) {
        const user = interaction.user;
        await interaction.reply(
            `Retrieving KD data about user ${user.username}`
        );
    },
};
