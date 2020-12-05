const { Client, MessageEmbed, Collection, MessageAttachment, RichEmbed } = require("discord.js");
const client = new Client();
const version = require("../config.json");
client.comandos = new Collection();

module.exports = {
    Nombre: "sugerencia",
    Alias: [],
    run: async (client, message, args) => {
    	var server = message.guild;

    	if (server) {
    		//SERVIDOR DE PROGRAMADORES
	    	if (server.id == "781694613852782612") {
	    		const Canal = message.guild.channels.cache.get('783925493162311680');
	    		const mensaje = args.join(' ');

	    		if (mensaje) {
		    		const embed = new MessageEmbed() 
					    .setTitle("SUGERENCIA")
					    .setAuthor("Kaymon")
					    .setColor("RANDOM")
					    .setFooter("\nVersion del bot " + version.VERSION)
					    .addField(`Sugerencia de ${message.author.username} para el servidor ${message.guild.name}`, `${mensaje}`);

		    		
		    		Canal.send(embed).then(msg => {
		    			msg.react('⬆');
						msg.react('⬇');
		    		});

		    		message.channel.send(`Gracias <@${message.author.id}> por la sugerencia`);
		    		
	    		} else {
	    			message.channel.send("Debes escribir algo");
	    		}

	    		message.delete({ timeout: 0 });
	    	}

















	    	//SERVIDOR DE KIKGAME
	    	if (server.id == "773739628682674256") {
	    		const Canal = message.guild.channels.cache.get('783946072615682078');
	    		const mensaje = args.join(' ');

	    		if (mensaje) {
		    		const embed = new MessageEmbed() 
					    .setTitle("SUGERENCIA")
					    .setAuthor("Kaymon")
					    .setColor("RANDOM")
					    .setFooter("\nVersion del bot " + version.VERSION)
					    .addField(`Sugerencia de ${message.author.username} para el servidor ${message.guild.name}`, `${mensaje}`);

		    		
		    		Canal.send(embed).then(msg => {
		    			msg.react('⬆');
						msg.react('⬇');
		    		});

		    		message.channel.send(`Gracias <@${message.author.id}> por la sugerencia`);
		    		
	    		} else {
	    			message.channel.send("Debes escribir algo");
	    		}

	    		message.delete({ timeout: 2 });
	    	}


    	}
        

    }
}