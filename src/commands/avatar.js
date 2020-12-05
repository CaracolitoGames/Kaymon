const { Client, MessageEmbed, Collection, MessageAttachment, RichEmbed } = require("discord.js");
const client = new Client();
client.comandos = new Collection();

module.exports = {
    Nombre: "avatar",
    Alias: [],
    run: async (client, message, args) => {
        let user = message.mentions.users.first();
  		if(!user) user = message.author;


    	const embed = new MessageEmbed()
    		.setTitle("Este es tu perfil")
    		.setColor("RANDOM")
    		.setDescription("Este es el avatar")
    		.setImage(user.displayAvatarURL());

    	message.channel.send(embed);

    }
}