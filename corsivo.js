const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = 'ehvolevi';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  var text = '';
  for(var i = 0; i < msg.text.length; i++){
     var c = msg.text.charAt(i);
     //if no more, ae yes
     if(i + 1 >= msg.text.length){
        text += goodCorsivo(c, '');
        continue;
     }

     text += goodCorsivo(c, msg.text.charAt(i + 1));
  }

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, text);
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function goodCorsivo(char, charLater){
    var c = corsivo(char, charLater);
    return char == char.toUpperCase() ? c.toUpperCase() : c;
}

function corsivo(char, charLater){
    if(charLater == '' || charLater == ' '){
        switch(char.toLowerCase()){
            case 'a': return 'æ';
            case 'o': return 'œ';
            case 'e': return 'ë';
            case 'i': return 'ï';
            case 'u': return 'ü';
            default: return char;
        }
    }

    if(getRandomInt(2) != 0) return char;
    switch(char.toLowerCase()){
        case 'a': return 'ä';
        case 'o': return 'ö';
        case 'e': return 'ë';
        case 'i': return 'ï';
        case 'u': return 'ü';
        default: return char;
    }
}
