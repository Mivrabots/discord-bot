export const name = 'say';
export const description = 'Repeats what you say';
export function execute(message, args) {
    const text = args.join(' ');
    message.channel.send(text);
}
