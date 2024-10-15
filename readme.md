# DiscordEasy Bot Setup

This README provides a guide for setting up a simple Discord bot using the ***DiscordEasy*** module. The bot is configured to use message commands and slash commands with basic intents.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Commands and Events](#commands-and-events)
- [Database Connection](#database-connection)
- [Adding Intents](#adding-intents)
- [Contributing](#contributing)

## Features

- Easy integration of message and slash commands.
- Customizable intents for better bot functionality.
- Simplified event management for Discord events.
  
## Prerequisites

Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- A Discord account with permissions to create bots.
- A Discord server where you can test the bot.

## Installation

1. **Clone this repository** or create a new project directory.
   
```
npm install discord.js discord-easy
```

# Create a new bot on the Discord Developer Portal and retrieve the following details:

- Token
- Client ID
- Guild ID
# Usage
- Here's a basic example of how to set up your Discord bot using the DiscordEasy module:

```js
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

// Add a database connection (optional)
bot.addDatabase("your_host", "your_user", "your_password", "your_database");

// Add intents to the bot
bot.addIntents(GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMembers); // Add necessary intents

// Set the paths for your command and event handlers
bot.setPath('command', './commands');
bot.setPath('event', './events');
```

# Run the bot

```js
bot.run();
```
- Important Configuration
- Token: Ensure you replace YOUR_BOT_TOKEN with the actual token from your Discord bot.
- Client ID: Replace YOUR_CLIENT_ID with your bot's client ID.
- Guild ID: Replace YOUR_GUILD_ID with your server's ID.

# Commands and Events
- To add commands and events, create JavaScript files in the commands and events folders, respectively.

## Message Command

```js
module.exports = {
    name: 'hello',
    execute(message) {
        message.channel.send('Hello, World!');
    }
};
```

## Slash Command

```js
module.exports = {
    name: 'hello',
    description: 'hello world',
    execute(interaction) {
        interaction.reply('Hello, World!');
    }
};
```

# Example Event
- In events/ready.js:

```js
module.exports = {
    name: 'ready',
    register(bot) {
        bot.client.on('ready', () => {
            console.log('Bot is online!');
        });
    }
};
```

# Database Connection
- If you wish to connect to a database, uncomment the addDatabase line and fill in your database details:

```js
bot.addDatabase("your_host", "your_user", "your_password", "your_database");
```

# Adding Intents
- You can add more intents as needed using the addIntents method. For example, to add Guild Messages intent:

```js
bot.addIntents(GatewayIntentBits.GuildMessages);
```

# Contributing
- Contributions are welcome! If you have suggestions or want to add new features, feel free to open an issue or submit a pull request.
