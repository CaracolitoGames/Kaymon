const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = (message) => {
	var mensajes = [":)", ":+1:", ":V", ":-)", ":sunglasses:", "🍎", "✅"];
   var menciones = [
      "Quien me llamo?", 
      "Me llamaron?", 
      "No me hablen que estoy jugando Fortnite en scratch", 
      "Hola, soy kaymon"
   ];


   	var aleatorio = Math.floor(Math.random()*(mensajes.length));

   	// HOLA
   	if(message.content.startsWith("Me pase") || message.content.startsWith("me pase") || message.content.startsWith("ME PASE")){
      	message.channel.send(mensajes[aleatorio]);
   	}

   	// WENAS
   	if(message.content.startsWith("::V") || message.content.startsWith(":V") || message.content.startsWith(":v")){
      	message.channel.send(mensajes[aleatorio]);
   	}

   	// QUE TAL
   	if(message.content.startsWith("XD") || message.content.startsWith("xd") || message.content.startsWith("Xd")){
      	message.channel.send(mensajes[aleatorio]);
   	}

   	//PEPINOS
   	if(message.content.startsWith("PEPINOS") || message.content.startsWith("Pepinos") || message.content.startsWith("pepinos")
   		|| message.content.startsWith("pepino") || message.content.startsWith("Pepino") || message.content.startsWith("PEPINO")) {
   		message.channel.send(":cucumber:");
   	}

   	//LLAMADAS A KAYMON
   	if(message.content.startsWith("PEPINOS") || message.content.startsWith("Pepinos") || message.content.startsWith("pepinos")
   		|| message.content.startsWith("pepino") || message.content.startsWith("Pepino") || message.content.startsWith("PEPINO")) {
   		message.channel.send(":cucumber:");
   	}

      // LLAMANDO A KAYMON 2.0
      if (message.content.includes("<@!771813067146788884>")) {
         var aleatorio = Math.floor(Math.random()*(menciones.length));
         message.channel.send(menciones[aleatorio]);
      }

}