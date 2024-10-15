const log = require('nyx-logger');

module.exports = {
    name: 'ready',
    register(bot) {
        bot.client.on('ready', () => {
            console.log('Bot is online!');
        });
    }
};