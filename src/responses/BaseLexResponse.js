// Config.
import defaults from '../config/defaults';

class BaseLexResponse {
    constructor() {
        this.sessionAttributes = null;
        this.dialogActions = {
            type: defaults.response.dialog.type.elicitIntent,
            fulfillmentState: defaults.response.dialog.fulfillmentState.fulfilled,
            message: {
                contentType: defaults.response.dialog.contentType.plainText,
                content: null // Message to convey to the user.
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
}

export default BaseLexResponse;
