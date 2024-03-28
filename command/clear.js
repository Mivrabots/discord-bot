export const name = 'clear';
export const description = 'Clears messages from a channel';
export async function execute(message, args) {
    const amount = parseInt(args[0]);

    if (isNaN(amount)) {
        return message.reply('Please provide a valid number of messages to delete');
    } else if (amount < 1 || amount > 100) {
        return message.reply('You can only delete between 1 and 100 messages');
    }

    try {
        await message.channel.bulkDelete(amount, true);
        message.channel.send(`Successfully deleted ${amount} messages`).then(msg => {
            msg.delete({ timeout: 5000 });
        });
    } catch (error) {
        console.error(error);
        message.reply('There was an error trying to delete messages in this channel');
    }
}
