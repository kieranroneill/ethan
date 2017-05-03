export default function hello(event, context, callback) {
    const input = event.currentIntent.inputTranscript;

    callback(null, event.currentIntent.inputTranscript);
}
