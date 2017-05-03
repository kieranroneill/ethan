// Responses.
import { CloseLexResponse } from '../responses/index';

export default function hello(event, context, callback) {
    //const input = event.currentIntent.inputTranscript;
    const response = new CloseLexResponse('Goodbye :)');

    callback(null, response.toResponse());
}
