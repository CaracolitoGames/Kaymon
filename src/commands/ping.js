module.exports = {
    Nombre: "ping",
    Alias: [],
    run: async (client, message, args) => {
        message.channel.send("pong!");
    }
}