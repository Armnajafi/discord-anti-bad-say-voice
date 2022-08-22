const { Client, Message } = require('discord.js');
const client = new Client();
const { DiscordSR } = require("./discord-speech-recognition");
const discordSR = new DiscordSR(client);
const fs = require("fs");

client.on("ready", () => { 
  client.user.setStatus("idle");
  console.log(`${client.user.id} is Online`)
});

client.on('message', async msg => {
if(msg.content == "+join"){
	if(msg.member.hasPermission(["ADMINISTRATOR"])){
      	if (msg.member.voice.channel) {
       		let connection = await msg.member.voice.channel.join();
      	}
	}
}
});

client.on("speech", async(msg) => {
   let connection = await msg.member.voice.channel.join();
    var users = [];
    var memeberrr = msg.guild.members.cache.get(msg.author.id);
    var MainCo = msg.content ? msg.content : "None"
       if(MainCo.includes("*")){
      memeberrr.voice.setMute(true);
      users.push(memeberrr.id);
      if(users.filter(x => x == memeberrr.id).length  >= 3){
		await connection.play('Voice Link');
        memeberrr.setVoiceChannel(null);
      } else if(users.filter(x => x == memeberrr.id).length == 2){
		await connection.play('Voice Link');
        setTimeout(()=>{
          memeberrr.voice.setMute(false);
        } , 300000)
      } else if(users.filter(x => x == memeberrr.id).length == 1){
		 await connection.play('Voice Link');
		 setTimeout(()=>{     
				memeberrr.voice.setMute(false);
			} , 120000)
		  }
      }
});

client.login("TOKEN");