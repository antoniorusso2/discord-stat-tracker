const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("member_info")
        .setDescription("get member info"),
    async execute(interaction) {
        const member = interaction.member;

        await interaction.reply(
            `User ${interaction.user.username} joined at ${member.joinedAt}`
        );
    },
};
