const express = require("express");
const bodyparser = require("body-parser");
const url = require("url");
const querystring = require("querystring");
const webhook = require("./webhook/webhook");
const ChildProcess = require("child_process");
const config = require("./utils/config.json");

const spawn = require("node:child_process");

let port = process.env.PORT || 3000;
let app = express();

app.get("/api/get/discord/invite/:link", (req, res) => {
    res.json( { inviteLink: req.params.link } );
});

app.get("/api/post/webhook/sendMessage/:content/:id/:token", (req, res) => {
    let content = req.params.content;
    let token = req.params.token;
    let id = req.params.id;
    let forwardedIpsStr = req.header("x-forwarded-for") || req.socket.remoteAddress;
    let ip = req.ips;
    if (forwardedIpsStr) {
        ip = forwardedIpsStr = forwardedIpsStr.split(",")[0];
    }
    webhook.sendMessage(id, token, content, ip);
    res.send(`Sent message : ${content} with webhook id : ${id}`);
});

app.get("/api/post/minecraft/startServer/:username", (req, res) => {
    let username = req.params.username;
    webhook.sendMessage(config.logWebhookId, config.logWebhookToken, username + " hat den Server gestartet!");
    let command = "screen -S minecraftServer -dm java -jar /home/ehlol/spigot-1.19.2.jar";
    ChildProcess.exec(command);
    
    res.send("startet den server...");
});

app.get("api/post/minecraft/stopServer/:username", (req, res)=> {
    let username = req.params.username;
    webhook.sendMessage(config.logWebhookId, config.logWebhookToken, username + " hat den Server gestoppt!");
});

app.get("/api/post/webhook/editName/:name/:id/:token", (req, res) => {
    let name = req.params.name;
    let id = req.params.id;
    let token = req.params.token;
    webhook.editName(id, token, name);
    res.send(`Edited webhook name to ${name}!`);
});

app.get("/api/post")

app.listen(port, () => {
    console.log("Listening on http://localhost:" + port + "/");
});