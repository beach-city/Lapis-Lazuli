const { SlashCommandBuilder } = require('@discordjs/builders');
const { playing }=require('./play.js')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('skip')
		.setDescription('Skips song'),
	async execute(interaction) {
        const player=interaction.client.queue.get(interaction.guildId)

        if(player.queue.length<2)
            return interaction.reply('No more songs mate.');
        else
            {
                interaction.reply(`${player.queue[0].title} has been skipped.`);
                player.player.un
                player.queue.shift();
                player.player.pause();
                //player.connection.subscribe(player.player).unsubscribe();
                //setTimeout(()=>playing(),5_000)
                playing();
            }
		return
	},
};