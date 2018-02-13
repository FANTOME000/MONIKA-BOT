// on off
// var
const restify = require("restify");
var server = restify.createServer();
server.listen(process.env.PORT || 5000, function () {
    console.log('%s listening to %s', server.name, server.url); 
});

//other var 



// Anti-Crash mp

if(message.channel.type === 'dm') return 
   message.reply("Vous ne pouvez pas m'utilisez en message privé.");

// language utiliser par le bot 

const Discord = require("discord.js");

//Etat du bot MONIKA BOT

const client = new Discord.Client();

client.on('ready', () => {
   console.log(`(1) Logged in as ${client.user.tag}!`);
   client.user.setGame('Doki Doki');
   client.setMaxListeners(1);
  });

//Commande --help mp

if(message.content.startsWith(prefix + ("help"))){
message.channel.send(':e_mail: Aide envoyé en message privé.')
  message.author.send({embed: {
      color: 3447003,
      author: {
        name:  client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Hey, regarde par ici",
      description: "Voici la liste des commandes.",
      fields: [{
          name: "--Monika",
          value: "Affiche la présentation du bot (la présentation actuelle temporaire car le bot est encore en developpement)"
        },
        {
          name: "--Mikado",
          value: "Affiche les information à propos du créateur du bot (oui je parle de moi a la 3eme personne)"
        },
        {
          name: "Salut Monika BOT",
          value: "Le bot vous répond par hey"
        },
        {
          name: "--support",
          value: "Affiche le support du bot"
        },
               
        {
          name: "-help",
          value: "Affiche l'aide par message privé"
        },
        {
          name: "-hhelp",
          value: "Affiche l'aide dans le salon où la commande a été envoyé"
        },
        
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: message.author.avatarURL,
        text: "Command --help created by Clara \n Requete de © " + message.author.username
      }
    }
  });
}

// création d'une commande (message, reponse)

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('Pong');
  }
  
  // Création d'une commande (message, reponse)
  
    else if (msg.content === '--help') {
      msg.reply("Help");
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
  else if (msg.content === ('Monika')) {
      msg.reply("Salut c'est moi qui contrôle le game (je suis en developpement) \n \n *created by mikado*");
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
          
    else if (msg.content === '--support') {
      msg.reply("Le bot a été hebergeur avec Heroku: \n https://heroku.com ");
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
