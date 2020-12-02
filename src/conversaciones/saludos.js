const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = (message) => {
	var mensajes = ["Hola", "Te extrañe mucho", "Que honda!!", "Wenas"];


   	var aleatorio = Math.floor(Math.random()*(mensajes.length));

   	// HOLA
   	if(message.content.includes("Hola") || message.content.includes("hola") || message.content.includes("HOLA")
   		|| message.content.includes("Ola") || message.content.includes("ola") || message.content.includes("oLa")){
      	message.channel.send(mensajes[aleatorio])
   	}

   	// WENAS
   	if(message.content.includes("Wenas") || message.content.includes("wenas") || message.content.includes("WENAS")){
      	message.channel.send(mensajes[aleatorio])
   	}

   	// QUE TAL
   	if(message.content.includes("Que tal") || message.content.includes("que tal") || message.content.includes("QUE TAL")){
      	message.channel.send(mensajes[aleatorio])
   	}
   	
}
