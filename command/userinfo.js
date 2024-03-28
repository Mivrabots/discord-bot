export const name = 'userinfo';
export const description = 'Displays information about a user';
export function execute(message) {
    const user = message.mentions.users.first() || message.author;
    message.channel.send(`Username: ${user.username}\nID: ${user.id}`);
}
