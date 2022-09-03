const { WebhookClient } = require("discord.js");

module.exports.sendMessage = (id, token, content, ip) => {
    const wh = new WebhookClient({ id: id, token: token });
    wh.send({ content: content + ip, username: "Lotus GmbH" });
};

module.exports.editName = (id, token, name) => {
    const wh = new WebhookClient({ id: id, token: token });
    wh.edit({
        name: name,
    });
};