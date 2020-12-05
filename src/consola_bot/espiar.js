const Discord = require('discord.js');
const client = new Discord.Client();
const colors = require('colors');

module.exports = (message, lista, client) => {
	lista += 1
	var numero_probabilidad = Math.floor(Math.random() * (3 - 1)) + 1;
	var server = message.guild; 

	if (server) {

		// COLORES
		if (numero_probabilidad == 1) {
			console.log(colors.blue(`----------${server.name}------------\n`));
		}

		if (numero_probabilidad == 2) {
			console.log(colors.white(`----------${server.name}------------\n`));
		}

		if (numero_probabilidad == 3) {
			console.log(colors.cyan(`----------${server.name}------------\n`));
		}

		// TEXTOS Y AUTHOR
		console.log(colors.green(lista,`-${message.author.username}:`),colors.yellow(`${message}`));

	}  else {

		// COLORES
		console.log(colors.brightMagenta(`\n----------MENSAJE DIRECTO A KAYMON------------\n`));

		console.log(colors.green(lista,`-${message.author.username}:`),colors.yellow(`${message}`));

	}
}