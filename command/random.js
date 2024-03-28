export const name = 'random';
export const description = 'Generates a random number';
export function execute(message, args) {
    const min = parseInt(args[0]) || 1;
    const max = parseInt(args[1]) || 100;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    message.channel.send(`Random number between ${min} and ${max}: ${randomNum}`);
}
