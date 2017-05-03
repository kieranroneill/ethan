// Config.
import defaults from '../config/defaults';

// Responses.
import BaseLexResponse from './BaseLexResponse';

class CloseLexResponse extends BaseLexResponse {
    constructor(sessionAttributes, message, isFulfilled = true) {
        super(sessionAttributes);

        this.dialogAction.type = defaults.response.dialog.type.close;
        this.dialogAction.fulfillmentState = (isFulfilled ?
            defaults.response.dialog.fulfillmentState.fulfilled : defaults.response.dialog.fulfillmentState.failed);

        // Message.
        this.dialogAction.message.content = message;
    }

    setResponseMessage(message) {
        this.dialogAction.message.content = message;
    }

    /**
     * Returns a simple fulfilled response.
     * @returns {Object}
     */
    toResponse() {
        let dialogAction = {
            type: this.dialogAction.type,
            fulfillmentState: this.dialogAction.fulfillmentState
        };

        // If we have a message, return it.
        if(this.dialogAction.message.content) {
            dialogAction = {
                message: this.dialogAction.message,
                ...dialogAction
            };
        }

        return {
            sessionAttributes: this.sessionAttributes,
            dialogAction: dialogAction
        };
    }
}

export default CloseLexResponse;
