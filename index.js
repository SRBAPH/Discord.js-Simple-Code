// Main Variables
const { Client } = require("discord.js"); // Here, we define discord.js package to make a client
const client = new Client({ intents: 32767 }); // Here, we define the client which is the bot
const express = require("express"); // We define the express package here to make an app variable
const app = express(); // Now we define app to make an site handler
const { token } = require("./config.json"); // Here, we define the clients token so the bot will run

// Commands
client.on("messageCreate", async (message) => {
  if(message.content.toLowerCase().startsWith("!ping")) { // If the message starts with "!ping" then
    message.channel.send({ content: "Pong!" }); // The bot will massage the content "Pong!"
  };
});

// Site handler
app.listen(3000, () => {
  // Check if Client is ready
  console.log("Client is ready!"); // Here, we check if the bot is ready
});

app.get("/", (req, res) => {
  res.send("Hello world!") // This function will display the "Hello world!" on the site
})

// Clients Login
client.login(token); // Now we create a function that can run the bot
