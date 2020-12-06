const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = (message) => {
	var mensajes = [":)", ":+1:", ":V", ":-)", ":sunglasses:", ":regional_indicator_x::regional_indicator_d:", "✅"];

   var platicar = [
      ":V",
      ":v",
      "::V",

      "XD",
      "xd",
      "Xd",
      "xD"
   ]

   // PLATICAR
   platicar.forEach((element) => {
      if (message.content.startsWith(element)) {
         var aleatorio = Math.floor(Math.random()*(mensajes.length));
         message.channel.send(mensajes[aleatorio]);
      }
   });

}