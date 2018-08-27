const Discord = require('discord.js');
exports.run  = async (client, message, args) => {
let string = args.join(' ');
let reverse = string.split("").reverse().join("")
let rembed = new Discord.RichEmbed()
.setColor(`RANDOM`)
.addField(`Input`, string)
.addField(`Output`, reverse);
message.channel.send(rembed);
}

exports.help = {
name: "reverse"
}
