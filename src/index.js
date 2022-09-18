const Discord = require('discord.js');
const { Client, MessageEmbed, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });
require('dotenv').config();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
if(message.content == '!ban') {
const guild = client.guilds.cache.get('GUILD ID HERE');
try {

guild.members.fetch().then(async (member) => {
    member.forEach(async (member) => {
        if(member.user.id === client.user.id) return;
        member.ban({ reason: 'Your Reason Here' }).then(() => {
            console.log(`Banned: ${member.user.tag}`);
        }).catch((err) => {
            console.log(`Failed to ban: ${member.user.tag}`);
        }); 
    });
});
} catch (error) {
    console.error(error);
}

}});

client.login(process.env.TOKEN);