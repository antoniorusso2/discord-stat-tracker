const { REST, Routes } = require("discord.js");
const { APP_ID, GUILD_ID, TOKEN } = process.env;
const fs = require("node:fs");
const path = require("node:path");

const commands = [];

const foldersPath = path.join(__dirname, "../commands");
const commandsFolder = fs.readdirSync(foldersPath);

for (const file of commandsFolder) {
    //grab command files
    const commandsPath = path.join(foldersPath, file);
    const commandFiles = fs
        .readdirSync(commandsPath)
        .filter((file) => file.endsWith(".js"));

    //grab slash commands builder to json output
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);

        if ("data" in command && "execute" in command) {
            commands.push(command.data.toJSON());
        } else {
            console.log(
                `[WARNING] the command at ${filePath} is missing a required data or execute property`
            );
        }
    }
}

// console.log(TOKEN);

//instance of the REST module
const rest = new REST().setToken(TOKEN);

// console.log(commands);
//commands deploy
(async () => {
    try {
        console.log(
            `started refreshing commands ${commands.map((cmd) => cmd.name)}`
        );

        // Global commands
        // const data = await rest.put(Routes.applicationCommands(APP_ID), {
        //     body: commands,
        // });

        // dev commands for fast refresh
        const data = await rest.put(
            Routes.applicationGuildCommands(APP_ID, GUILD_ID),
            { body: commands }
        );

        console.log(`successfully reloaded ${data.length} commands`);
    } catch (error) {
        console.error(error);
    }
})();
