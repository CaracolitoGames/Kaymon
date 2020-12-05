const { Client, MessageEmbed, Collection, MessageAttachment, RichEmbed } = require("discord.js");
const client = new Client();
client.comandos = new Collection();

module.exports = {
    Nombre: "comer",
    Alias: [],
    run: async (client, message, args) => {
        var mensajes = ["Gracias, me moria de hambre", "Sabe feo", "No quiero eso, quiero pollo", "Que rico!!!", "No me gusto"];


	   	var aleatorio = Math.floor(Math.random()*(mensajes.length));
	   	message.channel.send(mensajes[aleatorio]);

    }
}