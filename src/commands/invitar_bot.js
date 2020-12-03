const { Client, MessageEmbed, Collection, MessageAttachment, RichEmbed } = require("discord.js");
const client = new Client();
const version = require("../config.json");
client.comandos = new Collection();

module.exports = {
    Nombre: "invitar",
    Alias: [],
    run: async (client, message, args) => {
        const embed = new MessageEmbed() 
		    .setTitle("Por favor, invitame a tu server")
		    .setAuthor("Kaymon")
		    .setColor("RANDOM")
		    .setFooter("\nVersion del bot " + version.VERSION)
		    .addField("`Invitacion:`",
		    	`Quieres invitarme a tu server?, [da click aqui!!](https://discord.com/oauth2/authorize?client_id=771813067146788884&scope=bot&permissions=8)`, true)
		    .addField("`CODIGO::`",
		    	`Este es mi repositorio de github, [da click aqui!!](https://github.com/KikGame/Kaymon)`, true);


    
    	message.channel.send(embed);
    }
}