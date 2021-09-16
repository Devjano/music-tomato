const Discord = require("discord.js")
const config = require("../../config.json")
module.exports = {
    name: "vote",
    aliases: ["rate"],
    category: "INFORMATION COMMANDS",
    description: "Votes for Hyper Canary",
    useage: "vote",
    run: async (client, message, args) => {
        return message.reply(
            new Discord.MessageEmbed()
            .setColor(config.colors.yes)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTitle("Vote for Hyper Canary")
            .setURL("https://top.gg/bot/780578520870158337")
            .setDescription(``)
        )
    }
}
