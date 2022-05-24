const {MessageEmbed, MessageActionRow, MessageButton} = require("discord.js");
module.exports = {
    name: "help",
    aliases: ["command"],
    run: async (client, message, args) => {
let embed = new MessageEmbed()
.addField('Music [16]', `\`play\`, \`autoplay\`, \`stop\`, \`skip\`, \`pause\`, \`resume\`, \`search\`, \`loop\`, \`queue\`, \`remove\`, \`nowplaying\`, \`connect\`, \`disconnect\`, \`volume\`, \`seek\`, \`shuffle\``)
.addField('Filter [8]', `\`8D\`, \`bassboost\`, \`chipmunk\`, \`nightcore\`, \`slowmo\`, \`speed\`, \`tremolo\`, \`reset\``)
.addField('Utility [5]', `\`ping\`, \`uptime\`, \`stats\`, \`invite\`, \`help\``)

const row = new MessageActionRow().addComponents(button1, button2, button3, button4);
message.channel.send({embeds: [embed], components: [row]})
    }
}
