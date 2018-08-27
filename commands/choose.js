const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  let arg = args.join("")
  let ar = arg.split(`"`);
  let random = Math.floor(Math.random() * args.length);
  let answer = args[random];
  let embed = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .addField('Possibilities', arg)
    .addField(`Answer`, answer);
  message.channel.send(embed);
}

exports.help = {
  name: "choose"
}
