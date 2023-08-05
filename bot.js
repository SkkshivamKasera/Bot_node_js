const TelegramBot = require('node-telegram-bot-api');
const express = require('express')

const app = express()

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with the token you received from BotFather
const bot = new TelegramBot('6330218077:AAHdotEqxrfnMiqXIPvcVj64-ITzIYmhR2M', { polling: true });

// Handle incoming messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === '/hello') {
    bot.sendMessage(chatId, 'Hello there!');
  } else {
    bot.sendMessage(chatId, 'I don\'t understand that command. Try /hello.');
  }
});

// Handle /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome to your Telegram bot! Type /hello to get a greeting.');
});

app.listen(5000, ()=>{console.log("listing")})
