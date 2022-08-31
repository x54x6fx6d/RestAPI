const { WebhookClient } = require("discord.js");

module.exports.sendMessage = (id, token, content) => {
    const wh = new WebhookClient({ id: id, token: token });
    wh.send({ content: content, username: "Lotus GmbH" });
};

module.exports.editName = (id, token, name) => {
    const wh = new WebhookClient({ id: id, token: token });
    wh.edit({
        name: name,
    });
};