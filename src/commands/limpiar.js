const { Client, MessageEmbed, Collection, MessageAttachment, RichEmbed } = require("discord.js");
const client = new Client();
const version = require("../config.json");
client.comandos = new Collection();

module.exports = {
    Nombre: "limpiar",
    Alias: [],
    run: async (client, message, args) => {
        message.delete();

        const cantidad = args.join(' ');

        //CONFIGURACIONES
        var perm = message.member.hasPermission("MANAGE_MESSAGES");
        if(!perm) return message.channel.send('No tienes los `permisos` para eliminar mensajes');
        if (!cantidad) return message.channel.send('Debes de poner una cantidad `1, 5, 100...` ');
        if (cantidad == 0) return message.channel.send('Debes de poner una cantidad `mayor que cero`');


        if (cantidad <= 100) {
            message.channel.bulkDelete(cantidad).then(() => {
                message.channel.send(`***${cantidad}*** mensajes borrados ✅`);
            });
        } else {
            message.channel.send("El limite son 100 mensajes ❌");
        }

    }
}