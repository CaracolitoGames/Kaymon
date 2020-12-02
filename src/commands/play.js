const { Client, MessageEmbed, Collection, MessageAttachment, RichEmbed} = require("discord.js");
const client = new Client();
const version = require("../config.json");
client.comandos = new Collection();

module.exports = {
    Nombre: "play",
    Alias: [],
    run: async (client, message, args) => {
		
    	const ytdl = require('ytdl-core');

	    let voiceChannel = message.member.voiceChannel;
	    if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
	    if(!args) return message.channel.send('Ingrese un enlace de youtube para poder reproducirlo.');

	    voiceChannel.join()
	      	.then(connection => {
	        	const url = ytdl(args, { filter : 'audioonly' });
	        	const dispatcher = connection.playStream(url);
	        	message.channel.send('Reproduciendo ahora: '+ args);
	        	message.delete();
	    	}).catch(console.error);
    }
}