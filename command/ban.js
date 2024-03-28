export const name = 'ban';
export const description = 'Bans a user from the server';
export function execute(message, args) {
    const user = message.mentions.users.first();
    if (user) {
        const member = message.guild.members.cache.get(user.id);
        if (member) {
            member.ban().then(() => {
                message.channel.send(`Successfully banned ${user.tag}`);
            }).catch(error => {
                message.reply('Unable to ban the member');
                console.error(error);
            });
        } else {
            message.reply('That user is not in this server');
        }
    } else {
        message.reply('You need to mention the user to ban');
    }
}
