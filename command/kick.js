export const name = 'kick';
export const description = 'Kicks a user from the server';
export function execute(message, args) {
    const user = message.mentions.users.first();
    if (user) {
        const member = message.guild.members.cache.get(user.id);
        if (member) {
            member.kick().then(() => {
                message.channel.send(`Successfully kicked ${user.tag}`);
            }).catch(error => {
                message.reply('Unable to kick the member');
                console.error(error);
            });
        } else {
            message.reply('That user is not in this server');
        }
    } else {
        message.reply('You need to mention the user to kick');
    }
}
