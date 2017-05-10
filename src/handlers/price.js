// Responses.
import { CloseLexResponse } from '../responses/index';

export default function price(event, context, callback) {
    const response = new CloseLexResponse(event.sessionAttributes);

    callback(null, response.toResponse());
}
