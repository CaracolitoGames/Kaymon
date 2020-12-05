module.exports = {
    Nombre: "di",
    Alias: ["say", "decir"],
    Administrator: false,
    Bot: false,
    Categoria: "Util",
    Descripcion: "El bot dice algo por ti",
    Uso:".di <#canal> [texto]",
    Ejemplo:".Di #anuncios Se anuncia que las comisiones han sido abiertas a partir de ahora",
    run: async (client, message, args) => {
        message.delete();
        try {
            const texto = args.map(p=>{
                if (p=="@everyone"&&!message.member.hasPermission("MENTION_EVERYONE")) {
                    return "everyone";
                } else if (p=="@here"){
                    return "here";
                } else {
                    return p;
                }
            });
            if(!args[0]) return message.channel.send("Dime que quieres que diga :+1:").then(m => m.delete({ timeout: 5000 }));
            if(!args[0].match(/<#(\d{17,19})>/)){
                message.channel.send(texto.join(' '));
            }else{
                if(!args[1]) return message.channel.send("No dire nada si no me dices").then(m => m.delete({ timeout: 5000 }));
                const canal = message.mentions.channels.first();
                canal.send(texto.slice(1).join(' '));
            }
        } catch (error) {
            const CanalError = client.channels.cache.get('734497561485901906');
            CanalError.send(`Error en **"di"** <@&734599009414676551>\n${error.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
    }
}