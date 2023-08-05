const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token from the BotFather.
const botToken = 'YOUR_TELEGRAM_BOT_TOKEN';

// Create a new bot instance with your token.
const bot = new TelegramBot(botToken, { polling: true });

// This event will be triggered when someone sends a message to your bot.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Respond to the received message. In this example, we'll just echo it back.
  bot.sendMessage(chatId, `You said: ${messageText}`);
});

console.log('Bot is running...');
