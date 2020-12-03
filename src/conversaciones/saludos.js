const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = (message) => {
	var mensajes = ["Hola", "Te extrañe mucho", "Que honda!!", "Wenas"];


   	var aleatorio = Math.floor(Math.random()*(mensajes.length));

   	// HOLA
   	if(message.content.startsWith("Hola") || message.content.startsWith("hola") || message.content.startsWith("HOLA")
   		|| message.content.startsWith("Ola") || message.content.startsWith("ola") || message.content.startsWith("oLa")){
      	message.channel.send(mensajes[aleatorio])
   	}

   	// WENAS
   	if(message.content.startsWith("Wenas") || message.content.startsWith("wenas") || message.content.startsWith("WENAS")){
      	message.channel.send(mensajes[aleatorio])
   	}

   	// QUE TAL
   	if(message.content.startsWith("Que tal") || message.content.startsWith("que tal") || message.content.startsWith("QUE TAL")){
      	message.channel.send(mensajes[aleatorio])
   	}
   	
}
