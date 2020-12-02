const { Client, MessageEmbed, Collection, MessageAttachment, RichEmbed } = require("discord.js");
const client = new Client();
const id_servers = require("../id_servers.json");
client.comandos = new Collection();

module.exports = {
    Nombre: "emoji",
    Alias: [],
    run: async (client, message, args) => {
    	message.delete();

        var mensajes_default = [
        	":cucumber:", 
        	":poop:", 
        	":thumbsdown:",
        	":sunglasses:",
        	":v:",
        	":onion:",
        	":red_circle:",
        	":face_with_raised_eyebrow:",
        	":heart_eyes:",
        	":scream:",
        	":exploding_head:",
        	":robot:",
        	":ping_pong:",
        	":regional_indicator_f:",
        	":regional_indicator_k: :regional_indicator_i: :regional_indicator_k:",
        	":triumph:",
        	":alien:",
        	":stuck_out_tongue_closed_eyes:",
        	":money_mouth:",
        	":face_vomiting:",
        	":relaxed:",
        	":zipper_mouth:",
        	":person_shrugging:",
        	":pinched_fingers:",
        	":middle_finger:",
        	":woman_factory_worker:",
        	"🏋",
        	"🍞"
        ];


        //SABER EN QUE SERVER ESTA
        var aleatorio = Math.floor(Math.random()*(mensajes_default.length));
   		message.channel.send(mensajes_default[aleatorio]);

    }
}