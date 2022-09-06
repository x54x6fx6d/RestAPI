const express = require("express");
const bodyparser = require("body-parser");
const url = require("url");
const querystring = require("querystring");

const webhook = require("./utils/discord/webhook/webhook");

const ChildProcess = require("child_process");
const config = require("./utils/config.json");
const fs = require("fs");
const cors = require("cors");

const spawn = require("node:child_process");

let port = process.env.PORT || 3001;
let app = express();

app.use(cors());

app.get("/api/get/discord/invite", (req, res) => {
    console.dir({ message: config.invite });
    res.json( { message: /*req.params.link*/config.invite } );
});

app.get("/api/post/:utility/:config1/:config2/:config3", (req, res) =>{
    let utility = req.params.utility;
    fs.readdirSync("./utils")
})

app.get("/api/post/webhook/sendMessage/:content/:id/:token", (req, res) => {
    let content = req.params.content;
    let token = req.params.token;
    let id = req.params.id;
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