# Blackjack Bot

## Introduction

This is a discord bot using [discord.js](https://discord.js.org/).

The bot's purpose is to provide some basic functionality for blackjack-like games where some cards are drawn face up, while others are drawn face down.

This uses a standard 52-card deck without jokers.

## Commands

```
/shuffle - Returns all cards to the deck and shuffles them.
/draw - Draws a card from the deck, without revealing it to the other players.
/flip - Draw and reveal a card from the deck.
/table - Shows all the cards on the table, but not the face-down cards.
/reveal - Reveals all of the cards that have been drawn or flipped for each player.
```

## Setting up a Bot

To run your own Discord Blackjack Bot, you will need to set up an application through Discord's web service and add it to a Discord server (guild).

[Setting up a Bot](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)

## Checking out the code

Next you will need to checkout this code, install dependencies, and make sure the unit tests run.

```
mkdir blackjack_bot
cd blackjack_bot
git clone git@github.com:fdorothy/blackjack_bot master
cd master
```

## Configuring the bot

I recommend using [direnv](https://direnv.net/) to configure the bot. After installing direnv, create a .envrc file in the parent directory of master (NOT in the checkout!).

```
export DISCORD_TOKEN=<insert your app's token here>
export CLIENT_ID=<insert your app's client ID here>
export GUILD_ID=<insert your server's guild ID here>
```

Make sure you do not commit this file to git! Once you have this file defined you can navigate back to your `master` checkout and run `direnv allow` to load the environment variables.

Refer to [discord.js docs](https://discordjs.guide) for how to get these environment variables.

## Running

First install dependencies:

```
npm install
```

There are some tests for the cards written with [Mocha](https://mochajs.org/). It's a good idea to make sure these pass:

```
npm test
```

You can upload the commands for Blackjack Bot to your server via a script:

```
node deploy_commands.js
```

Finally this will connect to Discord and run the bot:

```
node index.js
```
