// LIBRERIAS
const { Client, MessageEmbed, Collection, MessageAttachment } = require("discord.js");
const client = new Client({ ws: { intents: 32767 } });
client.comandos = new Collection();
const fs = require("fs");
let comandos = fs.readdirSync("./src/commands/").filter((f) => f.endsWith(".js"));
const package = require("./package.json");
const colors = require('colors');
const config = require('./src/config.json');

// LOGIN
client.login(process.env.TOKEN);


// VARIABLES
var lista = 0;

var prefix = config.PERFIX;

////////// C A R G A R   C O M A N D O S //////////
for (var archi of comandos) {
    let comando = require("./src/commands/" + archi);
    client.comandos.set(comando.Nombre, comando);
    console.log('\x1b[32m%s\x1b[0m', archi + " fue cargado correctamente :V");
}

// BIENVENIDO
// client.on("guildMemberAdd", (miembro) => {

// 	if (server.id == 773739628682674256) {
// 		// MENSAJE EN CANAL DE BIENVENIDA
// 	    const Canal = miembro.guild.channels.cache.get('773741753421398037');
		
// 		const mensaje_publico = new MessageEmbed()
// 			.setColor('RANDOM')
// 			.setAuthor("Kaymon")
// 			.setTitle(`BIENVENIDO`)
// 			.addField("GRACIAS POR PASARTE POR AQUI", `Gracias por entrar <@${miembro.id}> a este servidor, espero te diviertas :+1:`)
// 			.addField("Para que es este servidor?", "Este servidor es para todo!!!, quieres jugar videojuegos con amigos?, aqui jugaras videojuegos. Quieres aprender a programar?, aqui te ayudamos :raised_hands:");

// 		Canal.send(mensaje_publico);
// 	}

// });

// STATUS
function status () {
	client.user.setPresence({
		status: 'idle',
		activity: {
			name: 'Fortnite en scratch | >-ayuda',
			type: 'PLAYING'
		}
	});
}


// INICIO
client.on('ready', () => {
	console.log('\x1b[31m%s\x1b[0m', `${client.user.username} ${client.options._tokenType} ${config.VERSION} Listo y Atento!!!`);
	status();
	lista = 0;
});


// MESAJES
client.on('message', (message) => {

	if(message.author.bot) return;

	
	//ARCHIVOS JS
	require('./src/conversaciones/platicar.js')(message);
	require('./src/consola_bot/espiar.js')(message, lista);
	require('./src/seguridad/groserias.js')(message);
	require('./src/conversaciones/reacciones.js')(message);
	

	//CONANDOS
	if (message.content.startsWith(prefix)) {
        //ARGS
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        //COMMAND
        const command = args.shift().toLowerCase();
        //busca comando
        let cmd = client.comandos.get(command) || client.comandos.find((c) => c.Alias.includes(command));
        //si existe
        if (cmd) {
            cmd.run(client, message, args);
        }
    }
});

// CUANDO SE INVITA EL BOT A UN SERVIDOR
client.on('guildCreate', async (guild) => {
	try {
		const canal = client.channels.cache.find(channel => channel.id == 778291718692274206);
		const embed = new MessageEmbed()
			.setThumbnail(guild.iconURL)
			.setTitle('Me añadieron en un nuevo servidor ❤')
			.addField('Servidor', guild.name, true)
			.addField('Region', guild.region, true)
			.addField('Roles', guild.roles.size, true)
			.addField('Miembros', guild.memberCount, true)
			.setTimestamp()
			.setColor('RANDOM')
			.setImage(guild.iconURL.toString);
		console.log(guild.iconURL.toString);

		canal.send(embed);
	}
	catch (error) {
		const Canal = client.channels.cache.find(channel => channel.id == 778291718692274206);
		Canal.send('Error en **"guildCreate"** <@&738513252673388655>');
		Canal.send(error.toString());
		console.log(error);
	}
});