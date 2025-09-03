const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("user_info")
        .setDescription("get user info"),
    async execute(interaction) {
        const user = interaction.user;

        await interaction.reply(`Retrieving ${user.username} info`);
    },
};
