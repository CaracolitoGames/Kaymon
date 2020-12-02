const { Client, MessageEmbed, Collection, MessageAttachment, RichEmbed } = require("discord.js");
const client = new Client();
const version = require("../config.json");
const id_users = require("../id_users.json");
client.comandos = new Collection();

module.exports = {
    Nombre: "ayuda",
    Alias: [],
    run: async (client, message, args) => {
        const embed = new MessageEmbed() 
		    .setTitle("AYUDA ✅")
		    .setAuthor("Kaymon")
		    .setColor("RANDOM")
		    .setDescription("Puedes ocupar el comando __>-ayuda__ para ver mis comandos, entra al server de mi creador dando click [aqui](https://discord.gg/M7fBpQgy6V)!!")
		    .setFooter("\n\nVersion del bot: " + version.VERSION)
		    ///////// COMANDOS ///////
		    .addField("----`>-ping`----", "***Comando de prueba***")
		    .addField("----`>-comer`----", "***Dame de comer que tengo hambre***")
		    .addField("----`>-avatar`----", "***Quieres ver el avatar tuyo o de otra persona?***")
		    .addField("----`>-emoji`----", "***Quieres enviar un emoji random?***")
		    .addField("----`>-invitar_bot`----", "***Si quieres,invitame a tu server***")
		    .addField("----`>-creditos`----", `***Quieres saber quienes son los ayudantes o el credor del bot?***`)
		    .addField("----`>-redes_sociales`----", `***Quieres ver las redes sociales de mi creador?***`);

    
    	message.channel.send(embed);
    }
}