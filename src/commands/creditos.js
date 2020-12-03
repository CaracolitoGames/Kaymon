const { Client, MessageEmbed, Collection, MessageAttachment, RichEmbed } = require("discord.js");
const client = new Client();
const version = require("../config.json");
client.comandos = new Collection();

module.exports = {
    Nombre: "creditos",
    Alias: [],
    run: async (client, message, args) => {
        const embed = new MessageEmbed() 
            .setTitle("CREDORES")
            .setAuthor("Kaymon")
            .setColor("RANDOM")
            .setFooter("Version del bot " + version.VERSION)
            .setDescription("Estos son los creadores y los que estan ayudando con el bot")
            .addField("AYUDANTES", "-Caracolito Games", true)
            .addField("CREADOR", "-KikGame", true);

    
        message.channel.send(embed);

    }
}