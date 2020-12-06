const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = (message) => {
	
   var server = message.guild; 

   if (server) {

      // PARA TODOS LOS SERCIDORES
      if (message.content.includes("https://") || message.content.startsWith("http://")) {
         message.react("👍"); // PULGAR ARRIBA
         message.react("🤩"); // ASOMBRO
         message.react("👏"); // APAUSOS
      }

      // TALK Y CHILL Y PARA EL SERVIDOR DE KIKGAME
      if (server.id == "773739628682674256" || server.id == "758046182210535586") {
         if (message.content.includes("GG")) {
            message.react("😑");
         }
      }

      // REACCION DEL COMANDO DE DEFENDER /LOVE
      if (message.content.includes("/love") || message.content.includes("love")) {
         message.react("❤");
      }
      
   }
}