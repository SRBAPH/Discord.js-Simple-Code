// Main Variables
const { Client } = require("discord.js");
const client = new Client({ intents: 32767 });
const express = require("express");
const app = express();
const { token } = require("./config.json");

// Commands
client.on("messageCreate", async (message) => {
  if(message.content.toLowerCase().startsWith("!ping")) {
    message.channel.send({ content: "Pong!" });
  };
});

// Site handler
app.listen(3000, () => {
  // Check if Client is ready
  console.log("Client is ready!");
});

app.get("/", (req, res) => {
  res.send("Hello world!")
})

// Clients Login
client.login(token);
