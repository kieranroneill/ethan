const defaults = {
    input: {
        confirmationStatus: {
            confirmed: 'Confirmed',
            denied: 'Denied',
            none: 'None'
        },
        invocationSource: {
            dialogCodeHook: 'DialogCodeHook',
            fulfillmentCodeHook: 'FulfillmentCodeHook' // Expects a response.
        },
        outputDialogMode: {
            text: 'Text',
            voice: 'Voice'
        }
    },

    response: {
        card: {
            contentType: {
                generic: 'application/vnd.amazonaws.card.generic'
            }
        },
        dialog: {
            contentType: {
                plainText: 'PlainText',
                ssml: 'SSML'
            },
            fulfillmentState: {
                failed: 'Failed',
                fulfilled: 'Fulfilled'
            },
            type: {
                close: 'Close',
                confirmIntent: 'ConfirmIntent',
                delegate: 'Delegate',
                elicitIntent: 'ElicitIntent',
                elicitSlot: 'ElicitSlot'
            }
        }
    }
};

export default defaults;
