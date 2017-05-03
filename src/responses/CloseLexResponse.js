// Config.
import defaults from '../config/defaults';

// Responses.
import BaseLexResponse from './BaseLexResponse';

class CloseLexResponse extends BaseLexResponse {
    constructor(message, isFulfilled = true) {
        super();

        this.dialogActions.type = defaults.response.dialog.type.close;
        this.dialogActions.fulfillmentState = (isFulfilled ?
            defaults.response.dialog.fulfillmentState.fulfilled : defaults.response.dialog.fulfillmentState.failed);

        // Message.
        this.dialogActions.message.content = message;
    }

    setResponseMessage(message) {
        this.dialogActions.message.content = message;
    }

    /**
     * Returns a simple fulfilled response.
     * @returns {Object}
     */
    toResponse() {
        // If we have a message, return it.
        if(this.dialogActions.message.content) {
            return {
                dialogActions: {
                    type: this.dialogActions.type,
                    fulfillmentState: this.dialogActions.fulfillmentState,
                    message: this.dialogActions.message
                }
            };
        }

        return {
            dialogActions: {
                type: this.dialogActions.type,
                fulfillmentState: this.dialogActions.fulfillmentState
            }
        };
    }
}

export default CloseLexResponse;
