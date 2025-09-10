const { SlashCommandBuilder } = require("discord.js");
const { getPlayerStats } = require("../../services/trackerNetwork.js");

const data = new SlashCommandBuilder()
    .setName("stats")
    .setDescription("Request all player stats for a game");

async function execute(interaction) {
    await interaction.reply(
        `stats checking in progress for ${interaction.user.username} that joined in ${interaction.member.joinedAt}...`
    );

    const stats = getPlayerStats("apex", "Acidx303");
    console.log(stats);
}

module.exports = { data, execute };
