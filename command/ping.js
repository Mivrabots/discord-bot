export const name = 'ping';
export const description = 'Ping!';
export function execute(message) {
    message.channel.send('Pong!');
}
