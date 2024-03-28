const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('messageCreate', message => {
    if (message.author.bot) return; // Ignore messages from bots
    if (message.content.toLowerCase() === 'hi') {
        message.channel.send('Hi!');
        return;
    }

    const prefix = process.env.PREFIX || '!'; // Default prefix is '!' if PREFIX env var is not set
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('There was an error executing that command!');
    }
});

const PORT = process.env.PORT || 3000;

client.login(process.env.TOKEN)
    .then(() => {
        console.log('Logged in as ' + client.user.tag);
        // Keep the bot alive on Render
        require('http').createServer((req, res) => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Bot is running!\n');
        }).listen(PORT);
    })
    .catch(error => {
        console.error('Failed to log in:', error);
    });
