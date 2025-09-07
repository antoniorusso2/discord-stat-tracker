const { MessageFlags } = require("discord.js");

module.exports = {
    async handle(interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(
            interaction.commandName
        );

        if (!command) {
            console.error(`No command matching ${interaction.commandName}`);
            await interaction.reply(
                "Il comando inviato sembra non essere disponibile al momento"
            );
            return;
        }

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({
                    content: "Errore di elaborazione del comando",
                    flags: MessageFlags.Ephemeral,
                });
            } else {
                await interaction.reply({
                    content: "Errore di elaborazione della richiesta",
                    flags: MessageFlags.Ephemeral,
                });
            }
        }
    },
};
