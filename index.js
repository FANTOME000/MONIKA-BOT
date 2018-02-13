// Anti-Crash mp

if(message.channel.type === 'dm') return 
   message.reply("Vous ne pouvez pas m'utilisez en message privé.");

// module

const Discord = require("discord.js");

//Etat du bot MONIKA BOT

const client = new Discord.Client();

client.on('ready', () => {
   console.log(`(1) Logged in as ${client.user.tag}!`);
   client.user.setGame('Doki Doki');
   client.setMaxListeners(1);
  });
// création d'une commande (message, reponse)

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('Pong');
  }
  
  // Création d'une commande (message, reponse)
  
    else if (msg.content === '--help') {
      msg.reply("Commande en cours de création...");
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
  else if (msg.content === '--Monika') {
      msg.reply("Salut c'est moi qui contrôle le game (je suis en developpement) \n \n *created by mikado*");
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
  
    else if (msg.content === '--Mikado') {
      msg.reply("C'est lui <@301913733536415755>, mon créateur");
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
  
    
  
    else if (msg.content.startsWith('Salut Monika BOT')) {
      msg.reply('Hey');
    }
  
});
    
    client.on('guildMemberAdd', member => {
    console.log(':heavy_multiplication_x:Pas de Rôle:heavy_multiplication_x: ' + member.user.username + ' a rejoind le Serveur')
    client.channels.get("410786905026985990").send( member.user.toString() + ", bienvenue va dans <#412051988025442305> pour avoir les instructions :) n'oublie pas de lire <#410747083100913665> :wink:");
    var role = member.guild.roles.find('name', '✖ Pas de Rôle ✖');
    member.addRole(role);
    
});

// client secret
  client.login(process.env.TOKEN);
