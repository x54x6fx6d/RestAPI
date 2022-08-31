const { Client, MessageEmbed, Intents } = require("discord.js");
const utils = require("../utils/sleep");


module.exports.sendMessage = (content, channelId, token) => {
    let bot = new Client(Intents.ALL);
    bot.once("ready", (message) => {
        let chnl = message.guild.channels.cache.get(channelId);
        chnl.send(content);
        
    });

    bot.login(token);
    utils.sleep(3000);
    bot.destroy();
    

}