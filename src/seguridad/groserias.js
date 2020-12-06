const { Client, MessageEmbed, Collection, MessageAttachment, RichEmbed } = require("discord.js");
const client = new Client();

module.exports = (message) => {

   var mensaje_embed_description = "Es malo decir __groserias__, si no quedaras `banneado` por una semana";
   var mensaje_embed_titulo = "NO DIGAS GROSERIAS :rage:";

   var groserias = [
      "Puto",
      "puto",
      "PUTO",

      "Pendejo",
      "pendejo",
      "PENDEJO",

      "Porno",
      "porno",
      "PORNO",

      "PITO",
      "pito",
      "Pito",

      "Vagina",
      "vagina",
      "VAGINA"

   ];

   groserias.forEach((element) => {
      if (message.content.includes(element)) {
         message.delete();

         const embed = new MessageEmbed() 
            .setTitle(mensaje_embed_titulo)
            .setAuthor("Kaymon")
            .setColor("RANDOM")
            .setDescription(mensaje_embed_description)
            .setFooter("MALO!!");

         message.channel.send(`<@${message.author.id}> dijo una groseria`);
         message.author.send(embed);
      }
   });

}