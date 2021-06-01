const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "Help command and helps the user",
  execute(message, bot, args){
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Comamnds')
    .setAuthor('Mr. Happy Bot Help Commands')
    .setDescription('These are the help commands. Use Them wisely!')
    .addFields(
    { name: '**Moderation**', value: '`clear,kick,ban,warn,slowmode.channeldelete.`', inline: false },
     { name: '**Fun**', value: '`kill,google,pp,avatar,beep,alive,hack,dm,script,playstore,say.`', inline: true },
   { name: '**Socials**', value: '`socials,youtube`', inline: false },
    { name: '**Others**', value: '`serverinfo,weather,userinfo,whois,ping,info.`', inline: false },
    )
    .setTimestamp()
    .setImage('https://media1.tenor.com/images/3f58e053707cc8f5186fafbf7572cb9c/tenor.gif?itemid=15841206')
    .setFooter(`Requested by ${message.author.username}`);
  message.channel.send(embed);
}




  }