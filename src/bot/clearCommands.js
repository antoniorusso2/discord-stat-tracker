const { REST, Routes } = require("discord.js");

const { APP_ID, GUILD_ID, TOKEN } = process.env;

const rest = new REST().setToken(TOKEN);

(async () => {
    try {
        console.log("🔄 Inizio pulizia comandi...");

        // 1. Cancella TUTTI i comandi globali
        await rest.put(Routes.applicationCommands(APP_ID), { body: [] });
        console.log("✅ Tutti i comandi GLOBALI eliminati");

        // 2. Cancella TUTTI i comandi della guild (sviluppo)
        await rest.put(Routes.applicationGuildCommands(APP_ID, GUILD_ID), {
            body: [],
        });
        console.log(`✅ Tutti i comandi della GUILD ${GUILD_ID} eliminati`);

        console.log("✨ Pulizia completata!");
    } catch (error) {
        console.error("❌ Errore durante la pulizia:", error);
    }
})();
