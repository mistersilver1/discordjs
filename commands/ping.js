const Discord = require('discord.js');
exports.run  = async (client, message, args) => {
//code to run
const m = await message.channel.send('Ping?');
m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API latency is ${Math.round(client.ping)}ms`);
}
//so it is exporting name so it is exports
exports.help = {
name: "ping" // here goes cmd name
}