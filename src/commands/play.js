const { Client, MessageEmbed, Collection, MessageAttachment, RichEmbed} = require("discord.js");
const client = new Client();
const version = require("../config.json");
client.comandos = new Collection();

module.exports = {
    Nombre: "play",
    Alias: [],
    run: async (client, message, args) => {

    	let Canalvoz = message.member.voiceChannel;
	    if (!Canalvoz || Canalvoz.type !== 'voice') {
	    	message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
	    } else if (message.guild.voiceConnection) {
	    	message.channel.send('Ya estoy conectado en un canal de voz.');
	    } else {
	     	message.channel.send('Conectando...').then(m => {
	          	Canalvoz.join().then(() => {
	            	m.edit(':white_check_mark: | Conectado exitosamente.').catch(error => message.channel.send(error));
	        	}).catch(error => message.channel.send(error));
	    	 }).catch(error => message.channel.send(error));
	    }
	}
}