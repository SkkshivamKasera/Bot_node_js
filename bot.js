const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token from the BotFather.
const botToken = '6330218077:AAHdotEqxrfnMiqXIPvcVj64-ITzIYmhR2M';

// Create an instance of Express
const app = express();

// Create a new bot instance
const bot = new TelegramBot(botToken, { polling: true });

// Define a route for handling incoming Telegram messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Respond to the received message. In this example, we'll just echo it back.
  bot.sendMessage(chatId, `You said: ${messageText}`);
});

// Define a route for handling HTTP requests
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
const port = 3000; // You can use any available port number
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
