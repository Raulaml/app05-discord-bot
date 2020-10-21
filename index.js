import Discord from 'discord.js';

const client = new Discord.Client();

const TOKEN_API = 'NzYyNzEyMTE4OTY1MzA1MzU0.X3tJAw.NC_N2hxm0rvU2OBSEL54YpaPnMo';

client.on('ready', ()=>{
    console.log(`Bot logged at: ${client.user.tag}`);
});

client.on('message', message =>{
    if(message.content === 'ping'){
        message.reply('pong');
    }
});

client.login(TOKEN_API);