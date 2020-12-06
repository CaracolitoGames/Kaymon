const { Client, MessageEmbed, Collection, MessageAttachment, RichEmbed } = require("discord.js");
const client = new Client();
const version = require("../config.json");
const id_users = require("../id_users.json");
client.comandos = new Collection();

module.exports = {
    Nombre: "ayuda",
    Alias: [],
    run: async (client, message, args) => {

    	var server = message.guild;
    	var bot_icono = "https://cdn.discordapp.com/avatars/771813067146788884/bb887a8d3a094265a049c70037740ba6.webp"

    	if (server) {

    		// SERVIDOR DE PROGRAMADORES Y DE KIKGAME
    		if (server.id == "781694613852782612" || server.id == "773739628682674256") {
				const embed = new MessageEmbed() 
				    .setTitle("AYUDA")
				    .setAuthor("Kaymon", bot_icono, '')
				    .setColor("RANDOM")
				    .setDescription("Puedes ocupar el comando __>-ayuda__ para ver mis comandos, entra al server de mi creador dando click [aqui](https://discord.gg/M7fBpQgy6V)!! ✅")
				    .setFooter("\n\nVersion del bot: " + version.VERSION)
				    ///////// COMANDOS ///////
				    .addField("----`>-ping`----", "***Comando de prueba***", true)
				    .addField("----`>-comer`----", "***Dame de comer que tengo hambre***", true)
				    .addField("----`>-avatar`----", "***Quieres ver el avatar tuyo o de otra persona?***", true)
				    .addField("----`>-emoji`----", "***Quieres enviar un emoji random?***", true)
				    .addField("----`>-invitar`----", "***Si quieres,invitame a tu server***", true)
				    .addField("----`>-creditos`----", `***Quieres saber quienes son los ayudantes o el credor del bot?***`, true)
				    .addField("----`>-redes`----", `***Quieres ver las redes sociales de mi creador?***`, true)
				    .addField("----`>-limpiar`----", `***Elimina una cantidad de mensajes***`, true)
				    .addField("----`>-sugerencia`----", `***Has una sugerencia para mejorar este servidor***`, true)
				    .addField("----`>-buscaminas`----", `***Juega al buscaminas***`, true)
				    .addField("----`>-di`----", `***Que quieres que diga por ti?***`, true);

		    
		    	message.channel.send(embed);    			
    		}
    		else {
    			const embed = new MessageEmbed() 
				    .setTitle("AYUDA")
				    .setAuthor("Kaymon")
				    .setColor("RANDOM")
				    .setDescription("Puedes ocupar el comando __>-ayuda__ para ver mis comandos, entra al server de mi creador dando click [aqui](https://discord.gg/M7fBpQgy6V)!! ✅")
				    .setFooter("\n\nVersion del bot: " + version.VERSION)
				    ///////// COMANDOS ///////
				    .addField("----`>-ping`----", "***Comando de prueba***", true)
				    .addField("----`>-comer`----", "***Dame de comer que tengo hambre***", true)
				    .addField("----`>-avatar`----", "***Quieres ver el avatar tuyo o de otra persona?***", true)
				    .addField("----`>-emoji`----", "***Quieres enviar un emoji random?***", true)
				    .addField("----`>-invitar`----", "***Si quieres,invitame a tu server***", true)
				    .addField("----`>-creditos`----", `***Quieres saber quienes son los ayudantes o el credor del bot?***`, true)
				    .addField("----`>-redes`----", `***Quieres ver las redes sociales de mi creador?***`, true)
				    .addField("----`>-limpiar`----", `***Elimina una cantidad de mensajes***`, true)
				    .addField("----`>-buscaminas`----", `***Juega al buscaminas***`, true)
				    .addField("----`>-di`----", `***Que quieres que diga por ti?***`, true);

				message.channel.send(embed);
    		}

    	}
        
    }
}