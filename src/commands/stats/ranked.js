const { SlashCommandBuilder } = require("discord.js");

const data = new SlashCommandBuilder()
    .setName("ranked")
    .setDescription("Request all player stats for a game");

async function execute(interaction) {
    await interaction.reply(
        `stats checking in progress for ${interaction.user.username} that joined in ${interaction.member.joinedAt}...`
    );
}

module.exports = { data, execute };
