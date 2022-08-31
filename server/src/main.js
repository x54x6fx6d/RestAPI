const express = require("express");
const bodyparser = require("body-parser");
const url = require("url");
const querystring = require("querystring");
const bot = require("./bot/bot");

let port = process.env.PORT || 3000;
let app = express();

app.get("/api/get/discord/invite/:link", (req, res) => {
    res.json( { inviteLink: req.params.link } );
});

app.post("/api/post/sendMessage/:content/:channel/:token", (req, res) => {
    let content = req.params.content;
    let chid = req.params.channel;
    let token = req.params.token;
    bot.sendMessage(content, chid, token);
    res.send(`Sent message : ${req.params.content} into ChannelID : ${req.params.channel}`);
});

app.listen(port, () => {
    console.log("Listening on http://localhost:" + port + "/");
});