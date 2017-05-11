// Config.
import defaults from '../config/defaults';
import strings from '../config/strings';

class BaseLexResponse {
    constructor(sessionAttributes = {}) {
        this.sessionAttributes = sessionAttributes;
        this.dialogAction = {
            type: defaults.response.dialog.type.elicitIntent,
            fulfillmentState: defaults.response.dialog.fulfillmentState.fulfilled,
            message: {
                contentType: defaults.response.dialog.contentType.plainText,
                content: strings.responses.defaults.default // Message to convey to the user.
            },
            intentName: null,
            slots: null,
            slotToElicit: null
        };
        this.responseCard = {
            version: 1,
            contentType: defaults.response.card.contentType.generic,
            genericAttachments: []
        };
    }

    setResponseMessage(message) {
        this.dialogAction.message.content = message;
    }
}

export default BaseLexResponse;
