// REPOSITORIO DE GIT https://github.com/KikGame/Kaymon.git

// LIBRERIAS
const { Client, MessageEmbed, Collection, MessageAttachment } = require("discord.js");
const client = new Client();
client.comandos = new Collection();
const fs = require("fs");
let comandos = fs.readdirSync("./src/commands/").filter((f) => f.endsWith(".js"));
const package = require("./package.json");
const colors = require('colors');
const config = require('./src/config.json');

// LOGIN
client.login(config.BOT_TOKEN);


// VARIABLES
var lista = 0;

var prefix = config.PERFIX;

////////// C A R G A R   C O M A N D O S //////////
for (var archi of comandos) {
    let comando = require("./src/commands/" + archi);
    client.comandos.set(comando.Nombre, comando);
    console.log('\x1b[32m%s\x1b[0m', archi + " fue cargado correctamente :V");
}

// STATUS
function status () {
	client.user.setPresence({
		status: 'online',
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
	require('./src/conversaciones/saludos.js')(message);
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