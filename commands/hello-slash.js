const log = require('nyx-logger');

module.exports = {
    name: 'hello',
    description: 'hello world',
    execute: async (interaction) => {
        try {
            await interaction.reply(`Welcome to the template for discord-easy [link](https://github.com/Virtual-Engine/Discord-Easy)`);
        } catch (error) {
            log("err", 'Error responding to message:', error);
        }
    }
};