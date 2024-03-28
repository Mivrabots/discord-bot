export const name = 'serverinfo';
export const description = 'Displays information about the server';
export function execute(message) {
    const server = message.guild;
    message.channel.send(`Server name: ${server.name}\nTotal members: ${server.memberCount}`);
}
