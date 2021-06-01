const Discord = require('discord.js');

const https = require('https');
const fs = require('fs');
const client = new Discord.Client({ disableMentions: 'everyone' });

module.exports = {
	name: 'suggest',
	description: 'sends the info of the user!',
	execute(message, args) {
    let = message.content
    .split(" ")
    .slice(1)
    if(!args[0]) return message.reply("Hey! To suggest something you need to send something!")
    const reportlog = new Discord.MessageEmbed()
    .setTitle('A New Suggestion!') 
    .setColor('RANDOM')
   .setDescription(args.join(" "))
   .setFooter(`Suggestion by ${message.author.tag}`)
   .setThumbnail('https://i.pinimg.com/originals/44/35/16/4435169a7a9437e228492b1c62350336.gif')
   .setTimestamp()
   client.channels.cache.get('849107898658848839').send(reportlog).then (sentMessage => {
    sentMessage.react("⬆")
    sentMessage.react("⬇")
    })
    message.reply("Your Suggestion has been succesfully been sent.")
    message.delete()
	},
};

