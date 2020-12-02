const { Client, MessageEmbed, Collection, MessageAttachment, RichEmbed } = require("discord.js");
const client = new Client();

module.exports = (message) => {

   var mensaje_embed_description = "Es malo decir __groserias__, si no quedaras `banneado` por una semana";
   var mensaje_embed_titulo = "NO DIGAS GROSERIAS :rage:";

   ///// PUTO /////
   if(message.content.includes("Puto") || message.content.includes("puto") || message.content.includes("PUTO")
      || message.content.includes("Pvto") || message.content.includes("pvto") || message.content.includes("PVTO")
      || message.content.includes("puta") || message.content.includes("Puta") || message.content.includes("PUTA")
      || message.content.includes("Putas") || message.content.includes("putas") || message.content.includes("PUTAS1")){

      message.delete();

      const embed = new MessageEmbed() 
         .setTitle(mensaje_embed_titulo)
         .setAuthor("Kaymon")
         .setColor("RANDOM")
         .setDescription(mensaje_embed_description)
         .setFooter("MALO!!");

          
      message.author.send(embed);
   }

   ///// JOTO /////
   if(message.content.includes("Joto") || message.content.includes("joto") || message.content.includes("JOTO")){

      message.delete();

      const embed = new MessageEmbed() 
         .setTitle(mensaje_embed_titulo)
         .setAuthor("Kaymon")
         .setColor("RANDOM")
         .setDescription(mensaje_embed_description)
         .setFooter("MALO!!");

          
      message.author.send(embed);	
   }

   ///// MIERDA /////
   if(message.content.includes("mierda") || message.content.includes("MIERDA") || message.content.includes("Mierda")){

      message.delete();

      const embed = new MessageEmbed() 
         .setTitle(mensaje_embed_titulo)
         .setAuthor("Kaymon")
         .setColor("RANDOM")
         .setDescription(mensaje_embed_description)
         .setFooter("MALO!!");

          
      message.author.send(embed);
   }

   /////DIOTA /////
   if(message.content.includes("idiota") || message.content.includes("IDIOTA") || message.content.includes("Idiota")
      || message.content.includes("idiotas") || message.content.includes("IDIOTAS") || message.content.includes("Idiotas")
      || message.content.includes("idiot") || message.content.includes("IDIOT") || message.content.includes("Idiot")){

      message.delete();

      const embed = new MessageEmbed() 
         .setTitle(mensaje_embed_titulo)
         .setAuthor("Kaymon")
         .setColor("RANDOM")
         .setDescription(mensaje_embed_description)
         .setFooter("MALO!!");

          
      message.author.send(embed);
   }

   ///// PENDEJOS /////
   if(message.content.includes("pendejo") || message.content.includes("pendejo") || message.content.includes("PENDEJO")
      || message.content.includes("Pedejos") || message.content.includes("PENDEJOS") || message.content.includes("pendejos")
      || message.content.includes("Pedejas") || message.content.includes("PENDEJAS") || message.content.includes("pendejas")
      || message.content.includes("pendeja") || message.content.includes("PENDEJA") || message.content.includes("Pendeja")){

      message.delete();

      const embed = new MessageEmbed() 
         .setTitle(mensaje_embed_titulo)
         .setAuthor("Kaymon")
         .setColor("RANDOM")
         .setDescription(mensaje_embed_description)
         .setFooter("MALO!!");

          
      message.author.send(embed);
   }

   ///// TETAS /////
   if(message.content.includes("tetas") || message.content.includes("Tetas") || message.content.includes("Tetones")
       || message.content.includes("Tetudos") || message.content.includes("tetones") || message.content.includes("tetudos")
       || message.content.includes("Tetasalaire") || message.content.includes("tetasalaire")){

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

   ///// PITO /////
   if(message.content.includes("pito") || message.content.includes("Pito")){

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

   ///// CULO /////
   if(message.content.includes("culo") || message.content.includes("Culo")  || message.content.includes("Nalgas")
      || message.content.includes("nalgas")){

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

   ///// TESTICULOS /////
   if(message.content.includes("testiculos") || message.content.includes("Testiculos") || message.content.includes("Testiculositos")
      || message.content.includes("testiculositos")){

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

   ///// VAGINA /////
   if(message.content.includes("vagina") || message.content.includes("Vagina")){

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

   ///// PENE /////
   if(message.content.includes("pene") || message.content.includes("Pene")){

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
}