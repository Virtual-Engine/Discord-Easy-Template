const { Guild } = require('discord.js');
const DiscordEasy = require('discord-easy');
const { GatewayIntentBits } = require('discord.js');

const bot = new DiscordEasy(
    'YOUR_BOT_TOKEN', // Replace with your Bot Token
    'YOUR_CLIENT_ID', // Replace with your Client ID
    'YOUR_GUILD_ID', // Replace with your Guild ID
    '!', // Prefix for message commands
    true, // Enable slash commands
    true  // Enable message commands
);
// Add a database connection
// bot.addDatabase("your_host", "your_user", "your_password", "your_database"); // Not nessecary
bot.addIntents(GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMembers); // For exemple default intents => GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent this command addIntents its not nessecary

//Set your command and events path
bot.setPath('command', './commands');
bot.setPath('event', './events');

bot.run();