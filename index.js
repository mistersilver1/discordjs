const Discord = require('discord.js'); //we require the package
const fs = require('fs'); //we require fs (filesystem)
const client = new Discord.Client(); //this is our bot
const config = require('./config.json');
client.commands = new Discord.Collection(); //client.commands is a collection
fs.readdir('./commands/', (err, files) => { //it will read commands folder for files
  if (err) console.log(err); //if error it will show us err
  let jsfile = files.filter(f => f.split(".").pop() === "js"); //it will filter for files which end with .js
  if (jsfile.lenth <= 0) return console.log("No commands found"); //if no files show err
  jsfile.forEach((f, i) => { //for each js file
    let props = require(`./commands/${f}`) // f is the file
    let file = f.split(".")[0]; //this will get the name of file e.g ping.js then ping is name
    console.log(`${file} loaded`);
    client.commands.set(props.help.name, props); //this will add an item to collection
    //^ this line will get name of cmd from exports.help of that cmd
    //so its importing name from there
  });
});
client.on('ready', () => {
  //when it is ready
  console.log('READY');
});
client.on('message', async message => {
  let prefix = config.prefix;
  const args = message.content.slice(prefix.length).trim().split(/ + /g); //this will slice the prefix and cmd so only args are left for eg it will slice of /kick and only person and reason are left if it was /kick person reason
  const command = args.shift().toLowerCase(); //this is the command , this will get args out and leave lowercased command
  let commandfile = client.commands.get(command); //this will get the file like if cmd user typed was ping, it will search for ping.js
  if (commandfile) commandfile.run(client, message, args); //if command file exists then it will run it
  if (message.author.bot) return; //if author is bot dont do anything
  if (message.channel.type == "dm") return; //if channel is dm return
  if (!message.content.startsWith(prefix)) return; //if msg doesnt start with prefix return
})
client.login(config.token);