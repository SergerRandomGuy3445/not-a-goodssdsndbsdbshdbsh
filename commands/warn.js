const Discord = require('discord.js');

module.exports = {
	name: 'warn',
	description: 'warn the user',
	execute(message, args) {
 if(message.member.hasPermission("MANAGE_MESSAGES")) {
 let args = message.content
 .split(" ")
 .slice(1)

 let victim = message.mentions.users.first()
 if(!args[0]) return message.reply("invalid Must provide reason and must mention the user to warn for example -warn @user breaking the rule")
 
 let embed = new Discord.MessageEmbed()
 .setTitle("Warned")
 .setDescription(args.join(" "))
 .setColor("PURPLE")
 .setFooter(`Moderater : ${message.author.username}`)
 .setTimestamp()
 
 message.channel.send(embed)

}else {
 message.reply("You don't have permission to do that!")
}
	},
};




