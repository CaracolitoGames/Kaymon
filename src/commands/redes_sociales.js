const { Client, MessageEmbed, Collection, MessageAttachment, RichEmbed } = require("discord.js");
const client = new Client();
const version = require("../config.json");
client.comandos = new Collection();

module.exports = {
    Nombre: "redes_sociales",
    Alias: [],
    run: async (client, message, args) => {
        const embed = new MessageEmbed() 
		    .setTitle("REDES SOCIALES")
		    .setAuthor("Kaymon")
		    .setColor("RANDOM")
		    .setFooter("\nVersion del bot " + version.VERSION)
		    .addField("`Redes Sociales:`",
		    	`[-Instagram](https://www.instagram.com/elkikgame/)\n[-Facebook](https://www.facebook.com/kikgame.kikgame.5/)\n[-Twitter](https://twitter.com/KikGame3)\n[-Youtube](https://www.youtube.com/channel/UCjdQcJFdDFjWWbQaNckWhjA)`);

    
    	message.channel.send(embed);

    }
}